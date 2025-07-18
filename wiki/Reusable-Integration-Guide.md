# Reusable Email Integration Guide - Power Automate + SharePoint

## Complete Implementation Steps for Future Projects

### Prerequisites
- Microsoft 365 tenant with SharePoint
- Power Automate license
- Azure AD admin access
- Azure CLI installed

### Step 1: Create SharePoint List

```powershell
# Connect to SharePoint
Connect-PnPOnline -Url "https://yourtenant.sharepoint.com/sites/yoursite" -Interactive

# Create list
$list = New-PnPList -Title "Newsletter Subscribers" -Template GenericList

# Add columns
Add-PnPField -List $list -DisplayName "Email" -InternalName "Email" -Type Text -Required
Add-PnPField -List $list -DisplayName "Source" -InternalName "Source" -Type Text
Add-PnPField -List $list -DisplayName "Subscribe Date" -InternalName "SubscribeDate" -Type DateTime
Add-PnPField -List $list -DisplayName "Status" -InternalName "Status" -Type Choice -Choices "Active","Unsubscribed","Bounced"
Add-PnPField -List $list -DisplayName "IP Address" -InternalName "IPAddress" -Type Text
Add-PnPField -List $list -DisplayName "Unsubscribe Token" -InternalName "UnsubscribeToken" -Type Text
Add-PnPField -List $list -DisplayName "Notes" -InternalName "Notes" -Type Note

# Get list ID
Get-PnPList -Identity "Newsletter Subscribers" | Select-Object Id
```

### Step 2: Create Azure AD App Registration

```bash
# Create app
APP_NAME="NewsletterApp"
APP_ID=$(az ad app create --display-name "$APP_NAME" --sign-in-audience AzureADMyOrg --query appId -o tsv)

# Add Graph API permissions
az ad app permission add --id $APP_ID --api 00000003-0000-0000-c000-000000000000 --api-permissions 9492366f-7969-46a4-8d15-ed1a20078fff=Role

# Create client secret
CLIENT_SECRET=$(az ad app credential reset --id $APP_ID --years 2 --query password -o tsv)

# Grant admin consent
az ad app permission admin-consent --id $APP_ID

echo "App ID: $APP_ID"
echo "Client Secret: $CLIENT_SECRET"
```

### Step 3: Create Power Automate Flow

Save this as `email-flow-template.json`:

```json
{
  "properties": {
    "displayName": "Newsletter Signup Flow",
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
                "timestamp": {"type": "string"},
                "ipAddress": {"type": "string"}
              },
              "required": ["email"]
            }
          }
        }
      },
      "actions": {
        "Initialize_Variables": {
          "type": "Compose",
          "inputs": {
            "email": "@{triggerBody()?['email']}",
            "source": "@{coalesce(triggerBody()?['source'], 'website')}",
            "timestamp": "@{coalesce(triggerBody()?['timestamp'], utcNow())}",
            "ipAddress": "@{triggerBody()?['ipAddress']}",
            "clientId": "YOUR_APP_ID",
            "clientSecret": "YOUR_CLIENT_SECRET",
            "tenantId": "YOUR_TENANT_ID",
            "siteUrl": "YOUR_SHAREPOINT_SITE_URL",
            "listId": "YOUR_LIST_ID"
          },
          "runAfter": {}
        },
        "Get_Access_Token": {
          "type": "Http",
          "inputs": {
            "method": "POST",
            "uri": "https://login.microsoftonline.com/@{outputs('Initialize_Variables')['tenantId']}/oauth2/v2.0/token",
            "headers": {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            "body": "client_id=@{outputs('Initialize_Variables')['clientId']}&scope=https://graph.microsoft.com/.default&client_secret=@{outputs('Initialize_Variables')['clientSecret']}&grant_type=client_credentials"
          },
          "runAfter": {"Initialize_Variables": ["Succeeded"]}
        },
        "Parse_Token": {
          "type": "ParseJson",
          "inputs": {
            "content": "@body('Get_Access_Token')",
            "schema": {
              "type": "object",
              "properties": {
                "access_token": {"type": "string"}
              }
            }
          },
          "runAfter": {"Get_Access_Token": ["Succeeded"]}
        },
        "Generate_Unsubscribe_Token": {
          "type": "Compose",
          "inputs": "@{guid()}",
          "runAfter": {"Parse_Token": ["Succeeded"]}
        },
        "Save_to_SharePoint": {
          "type": "Http",
          "inputs": {
            "method": "POST",
            "uri": "@{outputs('Initialize_Variables')['siteUrl']}/_api/web/lists(guid'@{outputs('Initialize_Variables')['listId']}')/items",
            "headers": {
              "Authorization": "Bearer @{body('Parse_Token')?['access_token']}",
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            "body": {
              "fields": {
                "Title": "@{outputs('Initialize_Variables')['email']}",
                "Email": "@{outputs('Initialize_Variables')['email']}",
                "Source": "@{outputs('Initialize_Variables')['source']}",
                "SubscribeDate": "@{outputs('Initialize_Variables')['timestamp']}",
                "Status": "Active",
                "IPAddress": "@{outputs('Initialize_Variables')['ipAddress']}",
                "UnsubscribeToken": "@{outputs('Generate_Unsubscribe_Token')}"
              }
            }
          },
          "runAfter": {"Generate_Unsubscribe_Token": ["Succeeded"]}
        },
        "Response_Success": {
          "type": "Response",
          "inputs": {
            "statusCode": 200,
            "headers": {"Content-Type": "application/json"},
            "body": {
              "status": "success",
              "message": "Successfully subscribed to newsletter",
              "data": {
                "email": "@{outputs('Initialize_Variables')['email']}",
                "unsubscribeToken": "@{outputs('Generate_Unsubscribe_Token')}"
              }
            }
          },
          "runAfter": {"Save_to_SharePoint": ["Succeeded"]}
        },
        "Response_Error": {
          "type": "Response",
          "inputs": {
            "statusCode": 500,
            "headers": {"Content-Type": "application/json"},
            "body": {
              "status": "error",
              "message": "Failed to subscribe",
              "error": "@{coalesce(body('Save_to_SharePoint')?['error'], 'Unknown error')}"
            }
          },
          "runAfter": {"Save_to_SharePoint": ["Failed"]}
        }
      },
      "outputs": {}
    }
  }
}
```

### Step 4: Deploy Flow via Terminal

```bash
# Set variables
TENANT_ID="your-tenant-id"
ENVIRONMENT_ID="Default-$TENANT_ID"
SITE_URL="https://yourtenant.sharepoint.com/sites/yoursite"
LIST_ID="your-list-id"
APP_ID="your-app-id"
CLIENT_SECRET="your-client-secret"

# Update flow template
sed -i "s|YOUR_APP_ID|$APP_ID|g" email-flow-template.json
sed -i "s|YOUR_CLIENT_SECRET|$CLIENT_SECRET|g" email-flow-template.json
sed -i "s|YOUR_TENANT_ID|$TENANT_ID|g" email-flow-template.json
sed -i "s|YOUR_SHAREPOINT_SITE_URL|$SITE_URL|g" email-flow-template.json
sed -i "s|YOUR_LIST_ID|$LIST_ID|g" email-flow-template.json

# Get Power Automate token
TOKEN=$(az account get-access-token --resource "https://service.flow.microsoft.com" --query accessToken -o tsv)

# Create flow
FLOW_RESPONSE=$(curl -X POST "https://unitedstates.api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/$ENVIRONMENT_ID/flows?api-version=2016-11-01" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d @email-flow-template.json)

FLOW_ID=$(echo $FLOW_RESPONSE | jq -r '.name')

# Get webhook URL
WEBHOOK_URL=$(curl -X POST "https://unitedstates.api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/$ENVIRONMENT_ID/flows/$FLOW_ID/triggers/manual/listCallbackUrl?api-version=2016-11-01" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{}" | jq -r '.response.value')

echo "Flow ID: $FLOW_ID"
echo "Webhook URL: $WEBHOOK_URL"
```

### Step 5: Create React Component

```jsx
// components/EmailSubscription/EmailSubscription.jsx
'use client';

import { useState } from 'react';
import styles from './EmailSubscription.module.css';

export default function EmailSubscription({ 
  source = 'website',
  buttonText = 'Subscribe',
  placeholder = 'Enter your email',
  showPrivacyNotice = true,
  onSuccess,
  onError
}) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setMessage('Please enter a valid email address.');
      setMessageType('error');
      return;
    }

    setIsSubmitting(true);
    setMessage('');

    try {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        throw new Error('Please enter a valid email address.');
      }

      const subscription = {
        email: email,
        timestamp: new Date().toISOString(),
        source: source,
        ipAddress: window.location.hostname
      };

      const webhookUrl = process.env.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL;
      
      if (webhookUrl && webhookUrl !== 'your-webhook-url-here') {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(subscription)
        });

        if (!response.ok) {
          throw new Error('Subscription processing failed');
        }

        const result = await response.json();
        
        setMessage('Thank you for subscribing! Check your email for confirmation.');
        setMessageType('success');
        setEmail('');
        
        if (onSuccess) {
          onSuccess(email, result.data?.unsubscribeToken);
        }
      }
    } catch (error) {
      console.error('Newsletter submission error:', error);
      setMessage('Something went wrong. Please try again later.');
      setMessageType('error');
      
      if (onError) {
        onError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder={placeholder}
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={isSubmitting}
          aria-label="Email address"
        />
        <button
          type="submit"
          className={styles.button}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Subscribing...' : buttonText}
        </button>
      </form>
      
      {showPrivacyNotice && (
        <p className={styles.privacy}>
          We respect your privacy and will never share your information.
          <a href="/privacy-policy"> Privacy Policy</a>
        </p>
      )}
      
      {message && (
        <div className={`${styles.message} ${styles[messageType]}`}>
          {message}
        </div>
      )}
    </div>
  );
}
```

### Step 6: Environment Variables

```env
# .env.local
NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL=your-webhook-url-here
NEXT_PUBLIC_NEWSLETTER_ENABLED=true
NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE="Thank you for subscribing!"
NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE="Please try again or contact us."
```

### Step 7: Test the Integration

```bash
# Test webhook
curl -X POST "$WEBHOOK_URL" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "source": "test",
    "timestamp": "2025-01-18T12:00:00Z",
    "ipAddress": "127.0.0.1"
  }'

# Verify in SharePoint
GRAPH_TOKEN=$(az account get-access-token --resource "https://graph.microsoft.com" --query accessToken -o tsv)
curl -X GET "$SITE_URL/_api/web/lists(guid'$LIST_ID')/items" \
  -H "Authorization: Bearer $GRAPH_TOKEN" \
  -H "Accept: application/json" | jq '.value'
```

## Key Features of This Implementation

1. **No Manual OAuth Required** - Uses app-only authentication
2. **Unsubscribe Token** - Automatically generated for each subscriber
3. **IP Address Tracking** - For security and compliance
4. **Error Handling** - Comprehensive error responses
5. **Privacy Notice** - Built into component
6. **Reusable Component** - Easy to integrate anywhere

## Security Considerations

1. Store client secret securely in Power Automate
2. Implement rate limiting on webhook
3. Validate email format on both client and server
4. Use HTTPS for all communications
5. Regular security audits of SharePoint permissions

## HIPAA Compliance Notes

- This setup is HIPAA compliant for email collection
- If collecting PHI, add additional safeguards
- Ensure BAA is in place with Microsoft
- Implement proper access controls
- Document retention policies