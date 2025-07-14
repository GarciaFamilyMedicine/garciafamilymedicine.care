# Getting Started

**Last Updated**: January 14, 2025

## Prerequisites

- **Node.js** 18.17 or later
- **npm** 9.0 or later
- **Git** for version control
- **VS Code** (recommended) with suggested extensions

## 🚀 Quick Setup

### 1. Clone the Repository
```bash
git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.git
cd garciafamilymedicine.care
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```

The development server will start at `http://localhost:3000`.

### 4. Setup Git Hooks (Required)
```bash
# Setup documentation enforcement hooks
./scripts/setup-git-hooks.sh
```

### 5. Build for Production
```bash
npm run build
```

## 📁 Project Structure Overview

```
garciafamilymedicine.care/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.js          # Root layout component
│   ├── page.jsx           # Homepage
│   └── [routes]/          # Page routes
├── components/            # Reusable components
│   ├── header/           # Header navigation system
│   ├── footer/           # Footer component
│   └── calendar/         # Calendar components
├── public/               # Static assets
│   └── images/          # Organized by page/section
├── docs/                # Documentation (you are here)
├── CHANGELOG.md         # Project changelog
├── CLAUDE.md           # Claude Code instructions
└── README.md           # Project overview
```

## 🛠️ Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🔧 VS Code Setup

### Recommended Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense"
  ]
}
```

### VS Code Settings
```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  },
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "html"
  }
}
```

## 🎨 Development Workflow

### 1. Start Development
```bash
# Start the development server
npm run dev

# Open in browser
open http://localhost:3000
```

### 2. Make Changes
- Edit files in `app/` for pages
- Edit files in `components/` for reusable components
- Add styles in corresponding `.module.css` files
- Add mobile styles in `mobile.module.css` files

### 3. Test Changes
- Check responsive design at different breakpoints
- Test mobile touch interactions
- Verify accessibility with screen readers
- Run linting: `npm run lint`

### 4. Update Documentation
```bash
# Update CHANGELOG.md with your changes
# Format: newest entries first, chronological order
# Add to [Unreleased] section:
## [Unreleased]
### Added
- New feature description
### Fixed  
- Bug fix description
```

### 5. Build and Deploy
```bash
# Test production build
npm run build

# Commit changes (git hooks will verify documentation)
git add .
git commit -m "feat: Add new feature"
git push
```

**Note**: Git hooks will automatically check that:
- CHANGELOG.md is updated for significant changes
- Documentation links are valid
- Lint checks pass
- Proper chronological order is maintained

## 🏗️ Architecture Overview

### Next.js App Router
- Uses the new App Router architecture
- File-based routing in `/app` directory
- Server and client components as needed
- Static export configuration for Azure deployment

### Styling System
- **Tailwind CSS** for utility classes
- **CSS Modules** for component-specific styles
- **CSS Custom Properties** for theming
- **Mobile-first** responsive design

### Component Organization
- Components grouped by functionality
- Each component has its own directory
- Separate mobile CSS files for responsive design
- Centralized data in configuration files

## 📱 Mobile-First Development

### Breakpoint System
```javascript
// Tailwind breakpoints
'mobile': {'max': '768px'}      // Primary mobile
'mobile-sm': {'max': '480px'}   // Small mobile
'mobile-xs': {'max': '360px'}   // Extra small mobile
```

### Development Process
1. **Start with mobile design** (320px width)
2. **Test touch interactions** (44px minimum targets)
3. **Enhance for larger screens** progressively
4. **Verify accessibility** at each breakpoint

## 🧪 Testing Guidelines

### Local Testing
```bash
# Lint code
npm run lint

# Build for production
npm run build

# Test build locally
npm run start
```

### Browser Testing
- **Chrome DevTools** - Mobile simulation
- **Firefox** - Responsive design mode
- **Safari** - iOS testing
- **Real devices** - Final verification

### Accessibility Testing
- **Screen reader** navigation
- **Keyboard-only** interaction
- **Color contrast** verification
- **Touch target** sizing

## 🚀 Deployment Process

### Automatic Deployment
- Push to `main` branch triggers Azure Static Web Apps deployment
- Build process runs automatically
- Site updates within minutes

### Manual Verification
1. Check build logs in Azure portal
2. Test deployed site functionality
3. Verify mobile responsiveness
4. Confirm accessibility compliance

## 🔧 Common Tasks

### Adding a New Page
1. Create directory in `/app/[route-name]/`
2. Add `page.jsx` file
3. Create `route-name.module.css` for styles
4. Add mobile styles if needed
5. Update navigation in `components/header/navdata.js`

### Adding a New Component
1. Create directory in `/components/[component-name]/`
2. Add main component file: `component-name.jsx`
3. Add styles: `component-name.module.css`
4. Add mobile styles: `mobile.module.css`
5. Export from component directory

### Updating Navigation
1. Edit `components/header/navdata.js`
2. Add new links to appropriate sections
3. Test dropdown functionality
4. Verify mobile navigation

### Adding Images
1. Place in appropriate `/public/images/[section]/` directory
2. Use Next.js `Image` component
3. Specify proper `width` and `height`
4. Add descriptive `alt` text
5. Use `priority` for above-fold images

## 🐛 Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try building again
npm run build
```

#### Style Not Applying
- Check CSS module naming (camelCase in JSX)
- Verify import paths
- Ensure mobile styles are imported separately
- Check Tailwind class conflicts

#### Mobile Issues
- Verify touch target sizes (44px minimum)
- Check viewport meta tag in layout
- Test on actual devices
- Validate responsive breakpoints

### Getting Help
1. Check [documentation](../README.md)
2. Review [component docs](../components/)
3. Look at [coding standards](coding-standards.md)
4. Check [CHANGELOG.md](../../CHANGELOG.md) for recent changes

## 🔗 Related Documentation
- [Coding Standards](coding-standards.md)
- [Mobile Development](mobile-development.md)
- [Component Documentation](../components/)
- [Architecture Overview](../architecture/project-structure.md)