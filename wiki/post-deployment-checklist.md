# Post-Deployment Checklist

## Required Actions After Deployment

### 1. Add GitHub Secrets (CRITICAL)
The email integration will not work until these are added:
- [ ] Add `NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL` secret
- [ ] Add `NEXT_PUBLIC_NEWSLETTER_ENABLED` secret
- [ ] Add `NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE` secret
- [ ] Add `NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE` secret

See: [GitHub Secrets Setup Guide](./github-secrets-setup.md)

### 2. Verify Deployment
- [ ] Check GitHub Actions tab for successful build
- [ ] Ensure no build errors related to environment variables
- [ ] Confirm deployment completed to Azure Static Web Apps

### 3. Test Email Integration
- [ ] Visit live website
- [ ] Submit test email in newsletter form
- [ ] Check browser console for any errors
- [ ] Verify email appears in SharePoint list

### 4. Monitor Power Automate
- [ ] Check Power Automate run history
- [ ] Ensure flow is running successfully
- [ ] Verify all fields are populating correctly

### 5. Staff Training
- [ ] Show staff how to access SharePoint list
- [ ] Explain email fields and statuses
- [ ] Document any custom procedures

## Troubleshooting

### If emails aren't being collected:
1. Verify all GitHub secrets are added correctly
2. Check Power Automate flow is enabled
3. Test webhook URL directly with curl
4. Review browser console for errors

### Common Issues:
- **"Subscription processing failed"**: Check webhook URL in secrets
- **Fallback to localStorage**: Environment variables not set
- **No emails in SharePoint**: Power Automate flow may be paused

## Success Indicators
- ✅ Email form shows success message
- ✅ No console errors in browser
- ✅ Emails appear in SharePoint within seconds
- ✅ Power Automate shows successful runs