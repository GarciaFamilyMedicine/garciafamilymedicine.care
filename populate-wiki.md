# How to Populate GitHub Wiki

Since GitHub Wiki requires manual initialization, here's how to populate it:

## Step 1: Initialize the Wiki
1. Go to https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki
2. Click "Create the first page"
3. Title it "Home"
4. Add any content and save

## Step 2: Clone the Wiki Repository
Once initialized, run these commands in a new terminal:

```bash
# Clone the wiki repository
git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.wiki.git

# Navigate to the wiki repository
cd garciafamilymedicine.care.wiki
```

## Step 3: Copy Wiki Files
Run these commands to copy all wiki files:

```bash
# Copy all markdown files from the main repo's wiki folder
cp ../garciafamilymedicine.care/wiki/*.md .

# Rename files to match GitHub Wiki conventions
mv home.md Home.md
mv getting-started.md Getting-Started.md
mv architecture-overview.md Architecture-Overview.md
mv development-guide.md Development-Guide.md
mv email-integration.md Email-Integration.md
mv github-secrets-setup.md GitHub-Secrets-Setup.md
mv hipaa-compliance.md HIPAA-Compliance.md
mv post-deployment-checklist.md Post-Deployment-Checklist.md
mv production-webhook-setup.md Production-Webhook-Setup.md
mv reusable-integration-guide.md Reusable-Integration-Guide.md
mv webhook-rotation-guide.md Webhook-Rotation-Guide.md
mv changelog.md Changelog.md

# Create a sidebar for navigation
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

# Add and commit all files
git add .
git commit -m "Populate wiki with documentation from main repository"

# Push to GitHub
git push origin master
```

## Alternative: Use the sync-wiki.sh Script

I've created a `sync-wiki.sh` script in your repository that automates this process. After initializing the wiki:

```bash
chmod +x sync-wiki.sh
./sync-wiki.sh
```

This script will:
- Clone the wiki repository
- Copy all documentation
- Create proper navigation
- Push changes to GitHub