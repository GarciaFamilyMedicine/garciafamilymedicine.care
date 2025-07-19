# GitHub Secrets Setup for Email Integration

## Overview
The email integration requires environment variables to be set as GitHub Secrets for production deployment.

**IMPORTANT:** For Azure Static Web Apps, environment variables must be configured in the Azure Portal, not just as GitHub Secrets. The GitHub workflow cannot pass environment variables to the Next.js build process due to security restrictions.

## Required Secrets

### 1. NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL
The Power Automate webhook URL for processing email subscriptions.

**Value:** Get this from your Power Automate flow's HTTP trigger. It should start with `https://` and contain your environment ID.

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

## Azure Static Web Apps Configuration

Since Azure Static Web Apps builds don't have access to GitHub Secrets during the Next.js build process, you need to configure environment variables in the Azure Portal:

1. Go to the Azure Portal: https://portal.azure.com
2. Navigate to your Static Web App resource
3. Click on **Configuration** in the left menu
4. Click **+ Add** for each environment variable
5. Add all the NEXT_PUBLIC_* variables with their values
6. Click **Save** and wait for the app to restart

## Alternative Solution: Build-time Configuration

If Azure Portal configuration is not available, you can:
1. Use a build script that injects variables at build time
2. Use a configuration service that fetches settings at runtime
3. Store non-sensitive configuration in a public config file

## Troubleshooting

If emails aren't being collected:
- Verify all secret names are exact (case-sensitive)
- Check for extra spaces in values
- Use the `emaildebug.jsx` component to inspect loaded values
- Check Power Automate run history for webhook errors
- Verify environment variables are set in Azure Portal

## Security Notes
- Never commit webhook URLs directly to code
- Secrets are encrypted and only visible to repository admins
- The workflow safely references these without exposing values