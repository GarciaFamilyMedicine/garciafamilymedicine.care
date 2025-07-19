# Security Incident - Exposed Webhook URL

## Incident Details
- **Date**: January 19, 2025
- **Severity**: Medium
- **Type**: Exposed API credentials in Git history

## What Happened
A Power Automate webhook URL was accidentally committed to the repository in commit `cc8e261` when attempting to fix production environment variable issues.

## Affected Commits
- `cc8e261`: Added webhook URL to next.config.mjs
- `6b1343b`: Removed the URL (but it remains in Git history)

## Immediate Actions Required

### 1. Rotate the Webhook URL
1. Go to Power Automate: https://make.powerautomate.com
2. Open the affected flow
3. Regenerate the webhook URL
4. Update the URL in Azure Portal configuration

### 2. Contact GitHub Support
Request removal of sensitive data from:
- Commit: cc8e2617a401ba27a95480863e28ce653427edd9
- File: next.config.mjs
- Repository: GarciaFamilyMedicine/garciafamilymedicine.care

### 3. Update Configuration
1. Never store webhook URLs in code
2. Use Azure Portal Configuration for environment variables
3. Document this incident in security procedures

## Prevention
- Always use environment variables for sensitive data
- Configure pre-commit hooks to scan for secrets
- Use `.env.local` for local development only
- Review all changes before committing

## Lessons Learned
- Azure Static Web Apps requires special handling for environment variables
- GitHub Secrets alone are not sufficient for build-time variables
- Always verify sensitive data is not exposed before pushing