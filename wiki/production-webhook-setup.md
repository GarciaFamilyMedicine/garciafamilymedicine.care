# Production Webhook Setup for Email Signup

## Current Status
The email signup is working but currently saves to browser localStorage instead of SharePoint because the webhook URL is not configured in production.

## To Enable SharePoint Integration

### Option 1: Azure Portal Configuration (Recommended)
1. Go to Azure Portal: https://portal.azure.com
2. Navigate to your Static Web App resource
3. Click on **Configuration** → **Application settings**
4. Add these environment variables:
   - `NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL`: Your Power Automate webhook URL
   - `NEXT_PUBLIC_NEWSLETTER_ENABLED`: `true`
   - `NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE`: `Thank you for subscribing! Check your email for confirmation.`
   - `NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE`: `Something went wrong. Please try again or contact us at (816) 427-5320.`
5. Save and restart the app

### Option 2: GitHub Secrets with Modified Workflow
If you have workflow permissions:
1. The secrets are already configured in GitHub
2. Modify `.github/workflows/azure-static-web-apps-blue-desert-026b44d10.yml`
3. Add environment variables to the build step:
```yaml
- name: Build
  run: npm run build
  env:
    NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL }}
    NEXT_PUBLIC_NEWSLETTER_ENABLED: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_ENABLED }}
    NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE }}
    NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE }}
```

### Option 3: Temporary Hardcoding (Not Recommended)
Only for testing - creates security risk:
1. Add to `next.config.mjs` in the env section
2. Immediately rotate webhook after testing
3. Remove before committing

## How Email Signup Currently Works
1. User enters email
2. Component checks for webhook configuration
3. If configured → Sends to SharePoint via Power Automate
4. If not configured → Saves to browser localStorage
5. Shows appropriate success message

## Verifying It's Working
1. Open browser console (F12)
2. Try to sign up with an email
3. Look for "Newsletter Debug:" message
4. If webhookUrl shows "not configured", environment variables aren't set
5. Check localStorage: `localStorage.getItem('newsletter_subscriptions')`

## Next Steps
1. Configure webhook URL in Azure Portal
2. Test email signup on production site
3. Verify emails appear in SharePoint list
4. Remove debug console.log from component