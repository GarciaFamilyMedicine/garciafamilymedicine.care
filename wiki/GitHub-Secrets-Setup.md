# GitHub Secrets Setup for Email Integration

## Overview
The email integration requires environment variables to be set as GitHub Secrets for production deployment.

## Required Secrets

### 1. NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL
The Power Automate webhook URL for processing email subscriptions.

**Value:**
```
https://default1b5ab773bfb5457caec39bf1b8da58.4a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ecb3dbc92616416ba209fd546a09b200/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Oxqlvj0fNMJHAdTh5RRcJXGWnpx6eggZQk65OHTgy3M
```

### 2. NEXT_PUBLIC_NEWSLETTER_ENABLED
Controls whether the newsletter signup is enabled.

**Value:** `true`

### 3. NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE
Success message shown after successful subscription.

**Value:** `Thank you for subscribing! Check your email for confirmation.`

### 4. NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE
Error message shown when subscription fails.

**Value:** `We're having trouble processing your subscription. Please try again later or call us at 816-427-5320.`

## How to Add Secrets

1. Navigate to your repository: https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care
2. Click **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** for each secret above
4. Enter the name and value exactly as shown
5. Click **Add secret**

## Verification

After adding all secrets:
1. The next push to main will trigger a deployment with these variables
2. Check the Actions tab to ensure the build succeeds
3. Test the email form on the live site
4. Verify emails appear in the SharePoint list

## Troubleshooting

If emails aren't being collected:
- Verify all secret names are exact (case-sensitive)
- Check for extra spaces in values
- Use the `emaildebug.jsx` component to inspect loaded values
- Check Power Automate run history for webhook errors

## Security Notes
- Never commit webhook URLs directly to code
- Secrets are encrypted and only visible to repository admins
- The workflow safely references these without exposing values