# Email Integration - Complete Implementation Guide

## Overview
Garcia Family Medicine website now has a fully automated email newsletter signup system that saves subscriber emails directly to SharePoint without any manual intervention.

> **Having issues?** See the [Email Subscription Troubleshooting Guide](./email-subscription-troubleshooting.md)

## Architecture

```
Website Form → EmailSubscription Component → Power Automate Webhook → App-Only Auth → SharePoint List
```

## Implementation Details

### 1. EmailSubscription Component
- **Location**: `components/EmailSubscription/EmailSubscription.jsx`
- **Features**:
  - Reusable across the website
  - Webhook integration with fallback to localStorage
  - Email validation
  - Success/error messaging

### 2. Power Automate Flow
- **Name**: Garcia Newsletter FINAL WORKING
- **Flow ID**: YOUR-FLOW-ID-HERE
- **Type**: HTTP Request trigger
- **Authentication**: App-only (no manual OAuth required)

### 3. Azure AD App Registration
- **Name**: GarciaNewsletterApp
- **App ID**: YOUR-APP-ID-HERE
- **Permissions**: Microsoft Graph - Sites.ReadWrite.All
- **Client Secret**: Stored in flow (secure)

### 4. SharePoint List
- **Site**: https://yourtenant.sharepoint.com/sites/yoursite
- **List Name**: Newsletter Subscribers
- **List ID**: YOUR-LIST-ID-HERE
- **Columns**: Title, Source, Subscribe Date, Status, IP Address, Unsubscribe Token, Notes

## How It Works

1. **User submits email** on website
2. **EmailSubscription component** sends POST request to webhook
3. **Power Automate flow** receives the request
4. **Flow gets app token** using client credentials
5. **Flow writes to SharePoint** using Microsoft Graph API
6. **Success response** returned to website

## Configuration

### Environment Variables (.env.local)
```env
NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL={webhook_url}
NEXT_PUBLIC_NEWSLETTER_ENABLED=true
NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE="Thank you for subscribing!"
NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE="Please try again or call us."
```

### Webhook Payload
```json
{
  "email": "user@example.com",
  "timestamp": "2025-01-18T12:00:00Z",
  "source": "website"
}
```

## Testing

### Test via Terminal
```bash
curl -X POST "{webhook_url}" \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","source":"test"}'
```

### Verify in SharePoint
```bash
# Get saved emails
GRAPH_TOKEN=$(az account get-access-token --resource "https://graph.microsoft.com" --query accessToken -o tsv)
curl -X GET "https://graph.microsoft.com/v1.0/sites/{site}/lists/{list}/items?expand=fields" \
  -H "Authorization: Bearer $GRAPH_TOKEN" | jq '.value'
```

## Maintenance

### Update Webhook URL
1. Get new URL from Power Automate
2. Update `.env.local`
3. Restart development server

### Monitor Flow
- Check run history in Power Automate portal
- Review failed runs for debugging
- Monitor SharePoint list for new entries

## Troubleshooting

### Common Issues
1. **401 Unauthorized**: App permissions need admin consent
2. **Field not recognized**: Check SharePoint column names
3. **No response**: Verify webhook URL is correct
4. **Token expired**: Flow will automatically refresh

### Debug Commands
```bash
# Check flow status
az account get-access-token --resource "https://service.flow.microsoft.com" --query accessToken -o tsv
curl -X GET "{flow_api_url}/flows/YOUR-FLOW-ID" -H "Authorization: Bearer {token}"

# Test SharePoint access
curl -X GET "{graph_api_url}/sites/YOUR-SITE-ID/lists/YOUR-LIST-ID" -H "Authorization: Bearer {token}"
```

## Security Considerations

1. **Client Secret**: Stored securely in Power Automate flow
2. **App Permissions**: Limited to Sites.ReadWrite.All
3. **Webhook Security**: URL contains signature for authentication
4. **Data Privacy**: Emails stored only in organization's SharePoint

## Production Deployment Requirements

### GitHub Secrets Configuration
For email subscriptions to work in production, you MUST configure the following GitHub Secrets:

1. **Navigate to GitHub Repository Settings**
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"

2. **Add Required Secrets**
   ```
   NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL = [Your Power Automate webhook URL]
   NEXT_PUBLIC_NEWSLETTER_ENABLED = true
   ```

3. **Optional Secrets**
   ```
   NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE = "Custom success message"
   NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE = "Custom error message"
   ```

4. **Verify Deployment**
   - Push any commit to trigger deployment
   - Check GitHub Actions for successful build
   - Test email subscription on live site

### Important Notes
- The GitHub Actions workflow is already configured to pass these secrets
- Without secrets, email subscriptions fall back to localStorage only
- Webhook URL must be the full URL from Power Automate
- Do NOT wrap the webhook URL in quotes in GitHub Secrets

## Future Enhancements

1. Add email confirmation workflow
2. Implement unsubscribe functionality
3. Add duplicate email checking
4. Create welcome email automation
5. Add analytics dashboard

## Related Documentation
- [Email Subscription Troubleshooting](./email-subscription-troubleshooting.md)
- [GitHub Secrets Setup](./github-secrets-setup.md)
- [Power Automate SharePoint Integration](./power-automate-sharepoint-integration.md)

---

## 📚 Quick Links

**[← Home](./home.md)** | **[Email Troubleshooting →](./email-subscription-troubleshooting.md)**

**Related Pages**: [Power Automate Integration](./power-automate-sharepoint-integration.md) | [Production Webhook Setup](./production-webhook-setup.md) | [Webhook Rotation Guide](./webhook-rotation-guide.md)