# Production Environment Setup for Email Integration

## Problem
The email integration isn't working in production because the environment variables are not being passed to the build process.

## Solution
Add the environment variables as GitHub Secrets and update the workflow to use them.

## Steps to Fix

### 1. Add GitHub Secrets
Go to your GitHub repository settings:
1. Navigate to: https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care
2. Click on "Settings" tab
3. In the left sidebar, click "Secrets and variables" → "Actions"
4. Click "New repository secret" for each of these:

#### Secret 1: NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL
```
https://default1b5ab773bfb5457caec39bf1b8da58.4a.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ecb3dbc92616416ba209fd546a09b200/triggers/manual/paths/invoke/?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=Oxqlvj0fNMJHAdTh5RRcJXGWnpx6eggZQk65OHTgy3M
```

#### Secret 2: NEXT_PUBLIC_NEWSLETTER_ENABLED
```
true
```

#### Secret 3: NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE
```
Thank you for subscribing! Check your email for confirmation.
```

#### Secret 4: NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE
```
We're having trouble processing your subscription. Please try again later or call us at 816-427-5320.
```

### 2. Workflow Update (Already Done)
The GitHub Actions workflow has been updated to pass these secrets as environment variables during the build process.

### 3. Trigger Deployment
After adding the secrets:
1. The workflow update will trigger a new deployment automatically
2. Or you can manually trigger it from Actions tab

## Verification Steps

### Test in Production
1. Visit your website
2. Try submitting an email in the newsletter form
3. Check the browser console for any errors
4. Verify the email appears in SharePoint

### Debug Information
To see what environment variables are available in production:
1. Temporarily add the EmailDebug component to a page
2. Check the console log for the debug output
3. Remove the debug component after verification

## Alternative: Azure Static Web Apps Configuration

If GitHub Secrets don't work, you can also set environment variables directly in Azure:

1. Go to Azure Portal
2. Navigate to your Static Web App resource
3. Go to "Configuration" → "Application settings"
4. Add the same environment variables there

## Important Notes
- Environment variables starting with `NEXT_PUBLIC_` are embedded at build time
- Changes to these variables require a new build/deployment
- Never commit the actual webhook URL to public repositories
- The workflow now properly passes these variables to the build process