# Email Integration Security Rotation Guide

## Overview
This guide provides step-by-step instructions for rotating all email integration credentials after a security exposure. Follow these steps in order to ensure no service disruption.

## Prerequisites
- Azure AD admin access
- Power Automate access
- SharePoint site admin access
- Azure CLI installed and authenticated

## Step 1: Create New Azure AD App Registration

```bash
# Create new app registration
APP_NAME="YourOrg-EmailIntegration-$(date +%Y%m%d)"
APP_RESPONSE=$(az ad app create --display-name "$APP_NAME")
NEW_APP_ID=$(echo $APP_RESPONSE | jq -r '.appId')

# Generate new client secret (valid for 2 years)
SECRET_RESPONSE=$(az ad app credential reset --id $NEW_APP_ID --years 2)
NEW_CLIENT_SECRET=$(echo $SECRET_RESPONSE | jq -r '.password')

# Save these values securely - you'll need them later
echo "New App ID: $NEW_APP_ID"
echo "New Client Secret: $NEW_CLIENT_SECRET"

# Grant Microsoft Graph permissions
az ad app permission add --id $NEW_APP_ID \
  --api 00000003-0000-0000-c000-000000000000 \
  --api-permissions 9492366f-7969-46a4-8d15-ed1a20078fff=Role

# Grant admin consent
az ad app permission admin-consent --id $NEW_APP_ID
```

## Step 2: Get SharePoint Site and List Information

```bash
# Get Microsoft Graph token
GRAPH_TOKEN=$(az account get-access-token --resource 'https://graph.microsoft.com' --query accessToken -o tsv)

# Get site ID (replace with your actual SharePoint site URL)
SITE_URL="yourtenant.sharepoint.com:/sites/yoursite"
SITE_INFO=$(curl -s -H "Authorization: Bearer $GRAPH_TOKEN" \
  "https://graph.microsoft.com/v1.0/sites/$SITE_URL")
SITE_ID=$(echo $SITE_INFO | jq -r '.id')

# List all available lists to find your newsletter list
curl -s -H "Authorization: Bearer $GRAPH_TOKEN" \
  "https://graph.microsoft.com/v1.0/sites/$SITE_ID/lists" | \
  jq '.value[] | {displayName: .displayName, id: .id}'

# Once you identify your list, get its ID
LIST_ID="YOUR-LIST-ID-HERE"

# Verify list columns
curl -s -H "Authorization: Bearer $GRAPH_TOKEN" \
  "https://graph.microsoft.com/v1.0/sites/$SITE_ID/lists/$LIST_ID/columns" | \
  jq '.value[] | {displayName: .displayName, name: .name}'
```

## Step 3: Create New Power Automate Flow

### Flow Definition Template
Create a file named `new-flow.json` with this template:

```json
{
  "properties": {
    "displayName": "Newsletter Signup - Secure",
    "state": "Started",
    "definition": {
      "$schema": "https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#",
      "contentVersion": "1.0.0.0",
      "triggers": {
        "manual": {
          "type": "Request",
          "kind": "Http",
          "inputs": {
            "schema": {
              "type": "object",
              "properties": {
                "email": {"type": "string"},
                "source": {"type": "string"},
                "timestamp": {"type": "string"}
              }
            }
          }
        }
      },
      "actions": {
        "Get_Access_Token": {
          "type": "Http",
          "inputs": {
            "method": "POST",
            "uri": "https://login.microsoftonline.com/YOUR-TENANT-ID/oauth2/v2.0/token",
            "headers": {"Content-Type": "application/x-www-form-urlencoded"},
            "body": "client_id=YOUR-NEW-APP-ID&scope=https://graph.microsoft.com/.default&client_secret=YOUR-NEW-CLIENT-SECRET&grant_type=client_credentials"
          }
        },
        "Parse_Token": {
          "type": "ParseJson",
          "inputs": {
            "content": "@body('Get_Access_Token')",
            "schema": {
              "type": "object",
              "properties": {"access_token": {"type": "string"}}
            }
          },
          "runAfter": {"Get_Access_Token": ["Succeeded"]}
        },
        "Save_to_SharePoint": {
          "type": "Http",
          "inputs": {
            "method": "POST",
            "uri": "https://graph.microsoft.com/v1.0/sites/YOUR-SITE-ID/lists/YOUR-LIST-ID/items",
            "headers": {
              "Authorization": "Bearer @{body('Parse_Token')?['access_token']}",
              "Content-Type": "application/json"
            },
            "body": {
              "fields": {
                "Title": "@{triggerBody()?['email']}",
                "Source": "@{triggerBody()?['source']}",
                "SubscribeDate": "@{utcNow()}"
              }
            }
          },
          "runAfter": {"Parse_Token": ["Succeeded"]}
        }
      }
    }
  }
}
```

### Deploy the Flow

```bash
# Get your tenant ID
TENANT_ID=$(az account show --query tenantId -o tsv)

# Update the flow JSON with your values
sed -i "s/YOUR-TENANT-ID/$TENANT_ID/g" new-flow.json
sed -i "s/YOUR-NEW-APP-ID/$NEW_APP_ID/g" new-flow.json
sed -i "s/YOUR-NEW-CLIENT-SECRET/$NEW_CLIENT_SECRET/g" new-flow.json
sed -i "s/YOUR-SITE-ID/$SITE_ID/g" new-flow.json
sed -i "s/YOUR-LIST-ID/$LIST_ID/g" new-flow.json

# Get Power Automate token
PA_TOKEN=$(az account get-access-token --resource "https://service.flow.microsoft.com" --query accessToken -o tsv)

# Create the flow
FLOW_RESPONSE=$(curl -X POST \
  "https://unitedstates.api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/Default-$TENANT_ID/flows?api-version=2016-11-01" \
  -H "Authorization: Bearer $PA_TOKEN" \
  -H "Content-Type: application/json" \
  -d @new-flow.json)

NEW_FLOW_ID=$(echo $FLOW_RESPONSE | jq -r '.name')

# Get the new webhook URL
WEBHOOK_RESPONSE=$(curl -X POST \
  "https://unitedstates.api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/Default-$TENANT_ID/flows/$NEW_FLOW_ID/triggers/manual/listCallbackUrl?api-version=2016-11-01" \
  -H "Authorization: Bearer $PA_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{}")

NEW_WEBHOOK_URL=$(echo $WEBHOOK_RESPONSE | jq -r '.response.value')
echo "New Webhook URL: $NEW_WEBHOOK_URL"
```

## Step 4: Update Application Configuration

### Local Development
```bash
# Update .env.local
echo "NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL=$NEW_WEBHOOK_URL" >> .env.local
echo "NEXT_PUBLIC_NEWSLETTER_ENABLED=true" >> .env.local
```

### Production (Azure Static Web Apps)
```bash
# Update Azure Static Web Apps configuration
az staticwebapp appsettings set \
  --name your-static-webapp-name \
  --resource-group your-resource-group \
  --setting-names NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL="$NEW_WEBHOOK_URL"
```

### GitHub Secrets (for CI/CD)
1. Go to your GitHub repository
2. Navigate to Settings → Secrets and variables → Actions
3. Update `NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL` with the new webhook URL

## Step 5: Test the New Integration

```bash
# Test the new webhook
curl -X POST "$NEW_WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "source": "rotation-test",
    "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"
  }'

# Check flow run history
curl -X GET \
  "https://unitedstates.api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/Default-$TENANT_ID/flows/$NEW_FLOW_ID/runs?api-version=2016-11-01" \
  -H "Authorization: Bearer $PA_TOKEN" | jq '.value[0]'

# Verify data in SharePoint
curl -X GET \
  "https://graph.microsoft.com/v1.0/sites/$SITE_ID/lists/$LIST_ID/items?expand=fields&top=5&orderby=fields/Created desc" \
  -H "Authorization: Bearer $GRAPH_TOKEN" | jq '.value[].fields'
```

## Step 6: Clean Up Old Resources

⚠️ **WARNING**: Only perform cleanup after confirming the new integration works!

```bash
# Delete old app registration (replace with your old app ID)
OLD_APP_ID="YOUR-OLD-APP-ID-HERE"
az ad app delete --id $OLD_APP_ID

# Delete old Power Automate flow (manual step)
# 1. Go to https://make.powerautomate.com
# 2. Find the old flow
# 3. Delete it

# Remove old webhook URL from any configuration files
```

## Verification Checklist

- [ ] New app registration created with fresh credentials
- [ ] Permissions granted and admin consent provided
- [ ] New Power Automate flow created and running
- [ ] New webhook URL obtained
- [ ] Local development environment updated
- [ ] Production environment updated
- [ ] GitHub secrets updated
- [ ] Test email successfully saved to SharePoint
- [ ] Old resources cleaned up

## Security Best Practices

1. **Never commit secrets to Git**
   - Use environment variables
   - Use Azure Key Vault for production

2. **Rotate credentials regularly**
   - Set calendar reminders for secret expiration
   - Document rotation procedures

3. **Monitor access logs**
   - Check Power Automate run history
   - Review SharePoint audit logs
   - Monitor failed authentication attempts

4. **Limit permissions**
   - Use minimum required permissions
   - Review and remove unused apps

## Troubleshooting

### Common Issues

1. **401 Unauthorized**
   - Verify admin consent was granted
   - Check client secret hasn't expired
   - Ensure app has correct permissions

2. **404 Not Found**
   - Verify site ID and list ID are correct
   - Check SharePoint site URL format

3. **Field not recognized**
   - Verify SharePoint column internal names
   - Check field name case sensitivity

4. **Flow not triggering**
   - Verify webhook URL is correct
   - Check flow is in "Started" state
   - Review flow run history for errors

### Debug Commands

```bash
# Check app registration
az ad app show --id $NEW_APP_ID

# List app permissions
az ad app permission list --id $NEW_APP_ID

# Test Graph API access
curl -X GET "https://graph.microsoft.com/v1.0/me" \
  -H "Authorization: Bearer $GRAPH_TOKEN"

# Check flow definition
curl -X GET \
  "https://unitedstates.api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/Default-$TENANT_ID/flows/$NEW_FLOW_ID?api-version=2016-11-01" \
  -H "Authorization: Bearer $PA_TOKEN" | jq
```

## Next Steps

After successfully rotating credentials:

1. Update documentation with new setup date
2. Schedule next rotation (recommended: every 6-12 months)
3. Review and update security policies
4. Train team on rotation procedures

---

**Security Note**: This guide uses placeholder values. Never commit actual IDs, secrets, or URLs to version control.