#!/bin/bash
# Setup git hooks for documentation enforcement

echo "🔧 Setting up git hooks for documentation enforcement..."

# Create scripts directory if it doesn't exist
mkdir -p scripts

# Configure git to use custom hooks directory
git config core.hooksPath .githooks

# Make hooks executable
chmod +x .githooks/pre-commit

echo "✅ Git hooks configured successfully!"
echo ""
echo "The following checks will now run before each commit:"
echo "  - CHANGELOG.md exists and is properly formatted"
echo "  - Documentation links are valid"
echo "  - Lint checks pass"
echo "  - Chronological order maintained in CHANGELOG.md"
echo ""
echo "To bypass hooks in emergency (not recommended):"
echo "  git commit --no-verify -m \"emergency fix\""