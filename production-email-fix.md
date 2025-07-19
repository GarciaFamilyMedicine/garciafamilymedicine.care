# Production Email Integration Fix

## Issue
The email integration isn't working in production because environment variables are not available during the build process.

## Root Cause
Next.js embeds `NEXT_PUBLIC_*` environment variables at build time. Since the GitHub Actions workflow doesn't have access to these variables, they're undefined in production.

## Solution: Add GitHub Secrets

### Step 1: Add Repository Secrets
Go to your repository settings and add these secrets:

1. **Navigate to**: https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care
2. **Go to**: Settings → Secrets and variables → Actions
3. **Add these secrets**:

```
NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL
```
Value:
```
https://default1b5ab773bfb5457caec39bf1b8da58.4a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ecb3dbc92616416ba209fd546a09b200/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Oxqlvj0fNMJHAdTh5RRcJXGWnpx6eggZQk65OHTgy3M
```

```
NEXT_PUBLIC_NEWSLETTER_ENABLED
```
Value: `true`

```
NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE
```
Value: `Thank you for subscribing! Check your email for confirmation.`

```
NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE
```
Value: `We're having trouble processing your subscription. Please try again later or call us at 816-427-5320.`

### Step 2: Update GitHub Actions Workflow
The workflow needs to pass these secrets as environment variables during build.

Add this to your workflow's build step:
```yaml
- name: Build
  run: npm run build
  env:
    NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL }}
    NEXT_PUBLIC_NEWSLETTER_ENABLED: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_ENABLED }}
    NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE }}
    NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE }}
```

### Step 3: Alternative - Azure Static Web Apps Configuration
If you can't modify the workflow, add environment variables in Azure:

1. Go to Azure Portal
2. Navigate to your Static Web App
3. Go to Configuration → Application settings
4. Add the same environment variables

## Testing the Fix

### Debug Component
Use the `emaildebug.jsx` component to verify environment variables are loaded:

```jsx
import EmailDebug from '../components/EmailSubscription/emaildebug';

// Add temporarily to any page
<EmailDebug />
```

### Verify in Browser Console
Check for these values:
- `webhookUrl` should show your Power Automate URL
- `isValidWebhook` should be `true`
- `isEnabled` should be `true`

### Test Flow
1. Submit an email in the form
2. Check browser console for errors
3. Verify email appears in SharePoint list

## Important Notes
- Environment variables must be set BEFORE the build
- Changes require a new deployment
- The webhook URL is sensitive - never commit it directly
- Always use HTTPS URLs for webhooks