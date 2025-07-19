# Development Guide

Comprehensive development workflow and best practices for the Garcia Family Medicine website.

## 🔄 Development Workflow

### Feature Branch Process

We use a streamlined feature branch workflow where developers work on feature branches created from `main`.

#### 1. Start New Feature

```bash
# Ensure you're on main and up-to-date
git checkout main
git pull origin main

# Create feature branch
git checkout -b feature/development-yourname

# Push branch to remote
git push -u origin feature/development-yourname
```

#### 2. Development Cycle

```bash
# Start development server
npm run dev

# Make changes and test locally...

# Stage changes
git add .

# Commit with descriptive message
git commit -m "feat: add new component for patient portal"

# Push changes
git push origin feature/development-yourname
```

#### 3. Pull Request Process

**Using GitHub CLI (Recommended):**
```bash
gh pr create --base main --head feature/development-yourname --title "Add patient portal component" --body "- Added new patient portal component
- Implemented responsive design
- Added accessibility features"
```

**Using GitHub Web Interface:**
1. Navigate to the repository
2. Click "Pull requests" → "New pull request"
3. Select your feature branch → main
4. Add descriptive title and detailed description

### Commit Message Guidelines

Follow conventional commit format:

```
type(scope): description

Examples:
feat: add veterans healthcare page
fix: resolve mobile navigation bug
docs: update component documentation
style: improve button hover animations
refactor: reorganize CSS architecture
test: add unit tests for header component
```

**Types:**
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation updates
- `style`: Code formatting (not visual changes)
- `refactor`: Code restructuring
- `test`: Adding/updating tests
- `chore`: Maintenance tasks

## 🏗️ Project Architecture

### Next.js App Router Structure

```
app/
├── globals.css              # Global styles + Tailwind
├── layout.js                # Root layout
├── page.jsx                 # Homepage
├── care/                    # Medical service pages
│   ├── pelvichealth/        # Specialized care pages
│   ├── veterans/            # Veterans healthcare
│   ├── medicare/            # Medicare services
│   ├── mental-health/       # Mental health services
│   ├── pain-management/     # Pain management
│   ├── telehealth/          # Virtual care
│   └── weight-management/   # Weight management
├── contact/                 # Contact page
├── events/                  # Event system
│   ├── current/             # Current events
│   ├── past/                # Past events
│   └── [specific-events]/   # Individual events
├── meetthedoctor/           # Doctor biography
└── services/                # General services
    └── corelift/            # CoreLift program
```

### Component Architecture

```
components/
├── header/                  # Navigation system
│   ├── header.jsx           # Main header component
│   ├── header.module.css    # Header styles
│   ├── mobile.module.css    # Mobile-specific styles
│   └── navdata.js           # Navigation data
├── footer/                  # Site footer
│   ├── footer.jsx           # Footer component
│   └── footer.module.css    # Footer styles
└── calendar/                # Event calendar
    ├── calendar.jsx         # Calendar component
    └── calendar-events.js   # Event data
```

## 🎨 Styling Architecture

### CSS Organization

**Global Styles (`app/globals.css`):**
```css
/* Tailwind directives */
@tailwind base;
@tailwind components; 
@tailwind utilities;

/* CSS custom properties */
:root {
  --primary-color: #1e40af;
  --secondary-color: #059669;
  /* ... */
}

/* Global component patterns */
.btn-primary { /* ... */ }
.card-pattern { /* ... */ }
```

**CSS Modules Pattern:**
```css
/* components/header/header.module.css */
.header {
  /* Component-specific styles */
}

.navigation {
  /* Scoped navigation styles */
}
```

### Tailwind Configuration

**Custom Configuration (`tailwind.config.js`):**
```javascript
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        sans: ['Geist', 'sans-serif'],
      },
      screens: {
        'mobile': {'max': '768px'},
      },
    },
  },
}
```

### Design System Guidelines

**Color Palette:**
- **Primary Blue**: `#1e40af` - Main brand color
- **Secondary Green**: `#059669` - Healthcare/wellness
- **Red Accent**: `#dc2626` - Emergency/urgent care
- **Purple**: `#7c3aed` - Mental health
- **Orange**: `#ea580c` - Veterans services

**Typography:**
- **Headings**: Bold, hierarchical (h1: 3rem, h2: 2.5rem, etc.)
- **Body**: 1rem base, 1.6 line-height for readability
- **Small Text**: 0.875rem minimum for accessibility

**Spacing:**
- **Sections**: 4rem vertical padding
- **Cards**: 2rem internal padding
- **Grid Gaps**: 2rem standard spacing

## 📱 Responsive Development

### Mobile-First Approach

Always start with mobile design and enhance for larger screens:

```css
/* Mobile-first (default) */
.component {
  flex-direction: column;
  padding: 1rem;
}

/* Desktop enhancement */
@media (min-width: 768px) {
  .component {
    flex-direction: row;
    padding: 2rem;
  }
}
```

### Breakpoint Strategy

```css
/* Tailwind breakpoints */
sm:   640px  /* Small tablets */
md:   768px  /* Tablets */  
lg:   1024px /* Laptops */
xl:   1280px /* Desktops */
2xl:  1536px /* Large screens */

/* Custom mobile breakpoint */
mobile: max-width 768px
```

### Touch Targets

Ensure all interactive elements meet 44px minimum:

```css
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 1rem 2rem;
}
```

## ♿ Accessibility Guidelines

### Semantic HTML

```jsx
// Good: Semantic structure
<header>
  <nav aria-label="Main navigation">
    <ul role="list">
      <li><a href="/care">Patient Care</a></li>
    </ul>
  </nav>
</header>

<main>
  <section aria-labelledby="services-heading">
    <h2 id="services-heading">Our Services</h2>
  </section>
</main>
```

### ARIA Labels

```jsx
// Interactive elements
<button aria-label="Open mobile menu" onClick={toggleMenu}>
  <HamburgerIcon aria-hidden="true" />
</button>

// Form controls
<input 
  type="email" 
  id="email"
  aria-describedby="email-help"
  required
/>
<div id="email-help">We'll never share your email</div>
```

### Color Contrast

Ensure WCAG 2.1 AA compliance:
- **Normal text**: 4.5:1 minimum ratio
- **Large text**: 3:1 minimum ratio
- **Non-text elements**: 3:1 minimum ratio

### Keyboard Navigation

```css
/* Focus indicators */
.focusable:focus {
  outline: 2px solid #1e40af;
  outline-offset: 2px;
}

/* Skip links */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #1e40af;
  color: white;
  padding: 8px;
  text-decoration: none;
  z-index: 1000;
}

.skip-link:focus {
  top: 6px;
}
```

## 🧪 Testing Strategy

### Manual Testing Checklist

**Before committing:**
- [ ] Test on mobile (Chrome DevTools)
- [ ] Test on tablet viewport
- [ ] Test on desktop
- [ ] Verify keyboard navigation
- [ ] Check color contrast
- [ ] Test with screen reader simulation

**Browser Testing:**
- [ ] Chrome (primary)
- [ ] Safari (mobile)
- [ ] Firefox
- [ ] Edge

### Build Testing

```bash
# Test production build
npm run build

# Check for errors
npm run lint

# Test static export
npm run start
```

## 🔧 Development Tools

### VS Code Extensions

Recommended extensions:
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Auto Rename Tag
- Prettier - Code formatter
- ESLint
- GitLens

### VS Code Settings

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.includeLanguages": {
    "javascript": "javascript",
    "html": "HTML"
  },
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

### Browser DevTools

**Chrome DevTools Tips:**
- Use device emulation for mobile testing
- Lighthouse audit for performance/accessibility
- Network tab for loading performance
- Console for JavaScript debugging

## 🚀 Performance Optimization

### Image Optimization

```jsx
// Next.js Image component
import Image from 'next/image'

<Image
  src="/images/hero-image.jpg"
  alt="Garcia Family Medicine clinic"
  width={800}
  height={600}
  priority // For above-the-fold images
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### Code Splitting

```jsx
// Dynamic imports for large components
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>
})
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run build
npm run analyze
```

## 🔒 Security Best Practices

### Input Sanitization

```jsx
// Sanitize user input
import DOMPurify from 'dompurify'

const sanitizedHTML = DOMPurify.sanitize(userInput)
```

### Environment Variables

```bash
# .env.local (never commit)
NEXT_PUBLIC_API_URL=https://api.example.com
SECRET_API_KEY=your-secret-key

# Use in code
const apiUrl = process.env.NEXT_PUBLIC_API_URL
```

## 📊 Monitoring & Analytics

### Performance Monitoring

```jsx
// Core Web Vitals tracking
export function reportWebVitals(metric) {
  // Send to analytics service
  console.log(metric)
}
```

### Error Tracking

```jsx
// Error boundary for React errors
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log error to service
    console.error('Error caught:', error, errorInfo)
  }
}
```

## 🔄 Keeping Dependencies Updated

### Regular Maintenance

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Security audit
npm audit
npm audit fix
```

### Major Version Updates

Test thoroughly when updating major versions:
- Next.js framework updates
- React version updates  
- Tailwind CSS updates

## 📋 Code Review Guidelines

### PR Review Checklist

**Code Quality:**
- [ ] Follows coding standards
- [ ] No console.logs in production code
- [ ] Proper error handling
- [ ] Performance considerations

**Functionality:**
- [ ] Feature works as intended
- [ ] No breaking changes
- [ ] Mobile responsive
- [ ] Accessible design

**Documentation:**
- [ ] Code is well-commented
- [ ] README updated if needed
- [ ] Component docs updated

## 🆘 Common Issues & Solutions

### Build Failures

**Tailwind CSS Issues:**
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

**TypeScript Errors:**
```bash
# Check TypeScript configuration
npx tsc --noEmit
```

### Performance Issues

**Large Bundle Size:**
- Use dynamic imports
- Optimize images
- Remove unused dependencies

**Slow Development Server:**
- Restart dev server
- Clear Next.js cache: `rm -rf .next`

---

**Next Steps:** Review [Architecture Overview](Architecture-Overview) for detailed system design information.