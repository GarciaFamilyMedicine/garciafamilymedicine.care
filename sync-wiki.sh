#!/bin/bash

# Sync Wiki Script for Garcia Family Medicine
# This script copies wiki files from the repository to GitHub Wiki

echo "🔄 Syncing wiki files to GitHub Wiki..."

# Clone the wiki repository if it doesn't exist
if [ ! -d "wiki-github" ]; then
    echo "📥 Cloning GitHub wiki repository..."
    git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.wiki.git wiki-github
fi

# Navigate to wiki repository
cd wiki-github

# Pull latest changes
echo "📥 Pulling latest wiki changes..."
git pull

# Copy all markdown files from wiki folder
echo "📋 Copying wiki files..."
cp ../wiki/*.md .

# Rename home.md to Home.md (GitHub Wiki convention)
if [ -f "home.md" ]; then
    mv home.md Home.md
fi

# Create sidebar with all pages
echo "📝 Creating sidebar..."
cat > _Sidebar.md << EOF
## Navigation

* [Home](Home)
* [Getting Started](getting-started)
* [Architecture Overview](architecture-overview)
* [Development Guide](development-guide)

### Integration Guides
* [Email Integration](email-integration)
* [GitHub Secrets Setup](github-secrets-setup)
* [Reusable Integration Guide](reusable-integration-guide)
* [Production Webhook Setup](production-webhook-setup)
* [Webhook Rotation Guide](webhook-rotation-guide)

### Documentation
* [HIPAA Compliance](hipaa-compliance)
* [Post Deployment Checklist](post-deployment-checklist)
* [Changelog](changelog)
EOF

# Add and commit changes
echo "💾 Committing changes..."
git add .
git commit -m "Update wiki from repository $(date +%Y-%m-%d)"

# Push to GitHub
echo "🚀 Pushing to GitHub Wiki..."
git push

echo "✅ Wiki sync complete!"
echo "View at: https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki"