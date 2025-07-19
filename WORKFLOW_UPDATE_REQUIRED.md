# URGENT: GitHub Workflow Update Required for Email Functionality

## The Issue
Email subscriptions are not working on production because environment variables are not being passed during the build process.

## Required Fix
You need to manually update the GitHub Actions workflow file to pass environment variables during build.

### Steps:

1. Go to: https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/blob/main/.github/workflows/azure-static-web-apps-blue-desert-026b44d10.yml

2. Click the pencil icon to edit the file

3. Find the "Build" step (around line 35) and update it from:
```yaml
      - name: Build
        run: npm run build
```

To:
```yaml
      - name: Build
        run: npm run build
        env:
          NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL }}
          NEXT_PUBLIC_NEWSLETTER_ENABLED: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_ENABLED }}
          NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE }}
          NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE: ${{ secrets.NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE }}
```

4. Commit the changes directly to the main branch with message:
   "fix: Pass environment variables during build for email functionality"

## Alternative: Update Azure Static Web Apps Deploy Action

If the above doesn't work, also try updating the Deploy step (around line 38) by adding app_build_command:

```yaml
      - name: Deploy to Azure Static Web Apps
        id: builddeploy
        uses: Azure/static-web-apps-deploy@v1
        with:
          azure_static_web_apps_api_token: ${{ secrets.AZURE_STATIC_WEB_APPS_API_TOKEN_BLUE_DESERT_026B44D10 }}
          repo_token: ${{ secrets.GITHUB_TOKEN }}
          action: "upload"
          app_location: "/"
          output_location: "out"
          skip_app_build: false
          app_build_command: "NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL='${{ secrets.NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL }}' NEXT_PUBLIC_NEWSLETTER_ENABLED='${{ secrets.NEXT_PUBLIC_NEWSLETTER_ENABLED }}' NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE='${{ secrets.NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE }}' NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE='${{ secrets.NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE }}' npm run build"
```

## Verification
After deployment completes:
1. Visit https://garciafamilymedicine.care/test-email
2. Check if "Webhook URL: CONFIGURED" appears
3. Test the email subscription form
4. Check browser console for any errors

## Why This Manual Step is Required
GitHub requires special permissions to update workflow files via API. This must be done through the web interface.

## Temporary Workaround Applied
I've updated next.config.mjs to include environment variables in the build configuration, but this still requires the workflow to pass the values.