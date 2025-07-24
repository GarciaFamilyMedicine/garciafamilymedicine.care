# Webhook Rotation Guide

## Manual Steps Required in Power Automate

Since the webhook URL was exposed in Git history, you should rotate it for security:

1. **Open Power Automate**
   - Go to https://make.powerautomate.com
   - Sign in with your Microsoft account

2. **Find Your Flow**
   - Navigate to "My flows"
   - Find the newsletter signup flow

3. **Regenerate Webhook**
   - Edit the flow
   - Click on the HTTP trigger (first step)
   - Delete the current trigger
   - Add a new "When a HTTP request is received" trigger
   - Copy the new HTTP POST URL

4. **Update Azure Configuration**
   ```bash
   # Update with new webhook URL
   az staticwebapp appsettings set --name garciafamilymedicine-care --resource-group GFMWebsites --setting-names NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL="YOUR_NEW_WEBHOOK_URL_HERE"
   ```

5. **Verify It's Working**
   - Wait for deployment to complete (5-10 minutes)
   - Test email signup on production site
   - Check Power Automate run history
   - Verify emails appear in SharePoint

## Security Status
- ✅ Azure app settings configured via CLI
- ✅ Hardcoded webhook removed from code
- ⚠️ Old webhook URL still active (needs manual rotation)

## Why Manual Rotation?
Power Automate doesn't allow programmatic webhook regeneration for security reasons. This prevents unauthorized changes to webhook URLs and maintains audit trails.