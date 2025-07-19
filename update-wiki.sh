#!/bin/bash
# Script to update GitHub Wiki with documentation

echo "GitHub Wiki Update Script"
echo "========================"
echo ""
echo "IMPORTANT: Before running this script, you must initialize the wiki:"
echo "1. Go to https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki"
echo "2. Click 'Create the first page'"
echo "3. Save any content (can be temporary)"
echo ""
read -p "Have you initialized the wiki? (y/n): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]
then
    echo "Please initialize the wiki first, then run this script again."
    exit 1
fi

# Clone wiki repository
echo "Cloning wiki repository..."
rm -rf wiki-temp
git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.wiki.git wiki-temp

if [ $? -ne 0 ]; then
    echo "Failed to clone wiki repository. Make sure the wiki is initialized."
    exit 1
fi

cd wiki-temp

# Copy all wiki files
echo "Copying documentation files..."
cp ../wiki/*.md .

# Rename files to match GitHub Wiki conventions
echo "Renaming files for GitHub Wiki..."
mv home.md Home.md 2>/dev/null || true
mv getting-started.md Getting-Started.md 2>/dev/null || true
mv architecture-overview.md Architecture-Overview.md 2>/dev/null || true
mv development-guide.md Development-Guide.md 2>/dev/null || true
mv email-integration.md Email-Integration.md 2>/dev/null || true
mv github-secrets-setup.md GitHub-Secrets-Setup.md 2>/dev/null || true
mv hipaa-compliance.md HIPAA-Compliance.md 2>/dev/null || true
mv post-deployment-checklist.md Post-Deployment-Checklist.md 2>/dev/null || true
mv production-webhook-setup.md Production-Webhook-Setup.md 2>/dev/null || true
mv reusable-integration-guide.md Reusable-Integration-Guide.md 2>/dev/null || true
mv webhook-rotation-guide.md Webhook-Rotation-Guide.md 2>/dev/null || true
mv changelog.md Changelog.md 2>/dev/null || true

# Create sidebar navigation
echo "Creating sidebar navigation..."
cat > _Sidebar.md << 'EOF'
## Navigation

### Getting Started
* [[Home]]
* [[Getting Started]]
* [[Architecture Overview]]
* [[Development Guide]]

### Integration Guides
* [[Email Integration]]
* [[GitHub Secrets Setup]]
* [[Reusable Integration Guide]]
* [[Production Webhook Setup]]
* [[Webhook Rotation Guide]]

### Compliance & Documentation
* [[HIPAA Compliance]]
* [[Post Deployment Checklist]]
* [[Changelog]]

### Quick Links
* [Main Repository](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care)
* [Live Site](https://garciafamilymedicine.care)
* [Azure Portal](https://portal.azure.com)
EOF

# Add all files and commit
echo "Committing changes..."
git add .
git commit -m "Update wiki documentation from main repository

- Added all documentation files
- Created sidebar navigation
- Formatted for GitHub Wiki conventions"

# Push to GitHub
echo "Pushing to GitHub..."
git push origin master

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Wiki updated successfully!"
    echo "View at: https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki"
else
    echo ""
    echo "❌ Failed to push changes. Please check your permissions."
fi

# Cleanup
cd ..
rm -rf wiki-temp

echo ""
echo "Done!"