# Email Subscription Troubleshooting Guide

## Common Issues and Solutions

### 1. Email Subscriptions Not Working on Production

**Symptoms:**
- Email subscription form shows success but no emails are received
- Subscriptions are only saved to browser localStorage
- Console shows "usingFallback: true"

**Solution:**
1. Ensure GitHub Secrets are properly configured:
   ```
   NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL = [Your Power Automate webhook URL]
   NEXT_PUBLIC_NEWSLETTER_ENABLED = true
   ```

2. Verify the workflow file includes environment variables:
   ```yaml
   - name: Build
     run: npm run build
     env:
       NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL }}
       NEXT_PUBLIC_NEWSLETTER_ENABLED: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_ENABLED }}
   ```

3. Trigger a new deployment by pushing any commit

### 2. Power Automate Webhook Returns 4xx/5xx Errors

**Common Causes:**
- Webhook URL has expired
- Power Automate flow is turned off
- Authentication issues

**Solution:**
1. Log into Power Automate
2. Check if the flow is enabled
3. Regenerate the webhook URL if needed
4. Update the GitHub Secret with the new URL

### 3. Testing Email Subscriptions

**Local Development:**
1. Add webhook URL to `.env.local`
2. Run `npm run dev`
3. Test at http://localhost:3000

**Production:**
1. Open browser developer console
2. Submit an email subscription
3. Check Network tab for webhook request
4. Verify 200/202 response status

### 4. Fallback Behavior

When webhook is not configured or fails, the component:
- Stores subscriptions in localStorage
- Shows success message to user
- Logs configuration in development mode

To check stored subscriptions:
```javascript
// In browser console
JSON.parse(localStorage.getItem('newsletter_subscriptions'))
```

### 5. Verifying Configuration

**Check if secrets are passed during build:**
1. Go to GitHub Actions
2. View the latest workflow run
3. Expand the "Build" step
4. Look for environment variables being set

**Check deployed configuration:**
1. Visit the deployed site
2. Open browser console
3. Submit a test email
4. Look for configuration logs (development mode only)

### 6. Common Mistakes

- **Missing NEXT_PUBLIC_ prefix**: All client-side env vars must start with `NEXT_PUBLIC_`
- **Quotes in secrets**: Don't wrap webhook URL in quotes in GitHub Secrets
- **Wrong secret names**: Ensure exact matching of secret names
- **Old deployments**: Always push a new commit after updating secrets

## Need More Help?

1. Check [Email Integration Guide](./email-integration.md)
2. Review [Power Automate Setup](./power-automate-sharepoint-integration.md)
3. Verify [GitHub Secrets Setup](./github-secrets-setup.md)