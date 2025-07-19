# Email Integration - Complete Implementation Guide

## Overview
Garcia Family Medicine website now has a fully automated email newsletter signup system that saves subscriber emails directly to SharePoint without any manual intervention.

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
- **Flow ID**: c3dd0e28-c63b-4c29-be2e-04086f616de5
- **Type**: HTTP Request trigger
- **Authentication**: App-only (no manual OAuth required)

### 3. Azure AD App Registration
- **Name**: GarciaNewsletterApp
- **App ID**: 53ca6956-0a2d-498a-bbb6-0e025d652905
- **Permissions**: Microsoft Graph - Sites.ReadWrite.All
- **Client Secret**: Stored in flow (secure)

### 4. SharePoint List
- **Site**: https://garciafamilymedicine.sharepoint.com/sites/marketing
- **List Name**: Newsletter Subscribers
- **List ID**: 2BC93255-8AC1-41E4-BE25-066CF2941D0D
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
curl -X GET "{flow_api_url}/flows/{flowId}" -H "Authorization: Bearer {token}"

# Test SharePoint access
curl -X GET "{graph_api_url}/sites/{site}/lists/{list}" -H "Authorization: Bearer {token}"
```

## Security Considerations

1. **Client Secret**: Stored securely in Power Automate flow
2. **App Permissions**: Limited to Sites.ReadWrite.All
3. **Webhook Security**: URL contains signature for authentication
4. **Data Privacy**: Emails stored only in organization's SharePoint

## Future Enhancements

1. Add email confirmation workflow
2. Implement unsubscribe functionality
3. Add duplicate email checking
4. Create welcome email automation
5. Add analytics dashboard