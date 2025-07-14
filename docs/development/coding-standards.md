# Coding Standards

**Last Updated**: January 14, 2025

## Overview

This document outlines the coding standards and best practices for the Garcia Family Medicine website project.

## 🎯 General Principles

### Code Quality
- **Readability**: Code should be self-documenting
- **Consistency**: Follow established patterns throughout the project
- **Maintainability**: Write code that's easy to modify and extend
- **Performance**: Optimize for user experience and loading times

### Project-Specific Guidelines
- Use **JSX only** (no TypeScript)
- Follow **Next.js App Router** conventions
- Implement **mobile-first** responsive design
- Maintain **accessibility compliance** (WCAG 2.1 AA)

## 📁 File Organization

### Directory Structure
```
app/                    # Next.js App Router pages
├── globals.css        # Global styles and CSS variables
├── layout.js          # Root layout component
├── page.jsx           # Homepage component
├── [route]/           # Individual page routes
│   ├── page.jsx       # Page component
│   └── route.module.css # Page-specific styles
components/            # Reusable components
├── [component]/       # Component directory
│   ├── component.jsx  # Main component file
│   ├── component.module.css # Desktop styles
│   └── mobile.module.css    # Mobile-specific styles
public/               # Static assets
└── docs/             # Documentation
```

### Naming Conventions

#### Files and Directories
```
# Pages (App Router)
app/page.jsx           ✅ Correct
app/home.jsx          ❌ Incorrect

# Components
components/header/header.jsx  ✅ Correct
components/Header.jsx         ❌ Incorrect

# CSS Modules
component.module.css          ✅ Correct
component-styles.css          ❌ Incorrect

# Mobile Styles
mobile.module.css             ✅ Correct
component.mobile.module.css   ✅ Also acceptable
```

#### Variables and Functions
```javascript
// Use camelCase for variables and functions
const userName = 'John';              ✅ Correct
const user_name = 'John';            ❌ Incorrect

// Use PascalCase for components
const HeaderComponent = () => {};     ✅ Correct
const headerComponent = () => {};     ❌ Incorrect

// Use UPPER_CASE for constants
const API_BASE_URL = 'https://...';   ✅ Correct
const apiBaseUrl = 'https://...';     ❌ Incorrect
```

## ⚛️ React/JSX Standards

### Component Structure
```jsx
'use client'; // Only when client-side features needed

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './component.module.css';
import mobileStyles from './mobile.module.css';

export default function ComponentName({ prop1, prop2 }) {
  // 1. Hooks
  const [state, setState] = useState(false);
  
  // 2. Event handlers
  const handleClick = () => {
    setState(true);
  };
  
  // 3. Helper functions
  const combineStyles = (...classNames) => 
    classNames.filter(Boolean).join(' ');
  
  // 4. Return JSX
  return (
    <section className={combineStyles(styles.component, mobileStyles.component)}>
      <h1>{prop1}</h1>
      <button onClick={handleClick}>{prop2}</button>
    </section>
  );
}
```

### Import Standards
```javascript
// ✅ Correct - Remove .jsx extensions
import Header from '../components/header/header';
import Footer from '../components/footer/footer';

// ❌ Incorrect - Don't include extensions
import Header from '../components/header/header.jsx';

// ✅ Correct - Use Next.js optimized components
import Image from 'next/image';
import Link from 'next/link';

// ❌ Incorrect - Don't use native HTML elements
import { img, a } from 'react';
```

### JSX Best Practices
```jsx
// ✅ Correct - Semantic HTML
<main>
  <section aria-label="Hero section">
    <h1>Page Title</h1>
  </section>
</main>

// ❌ Incorrect - Generic divs
<div>
  <div>
    <div>Page Title</div>
  </div>
</div>

// ✅ Correct - Accessible images
<Image
  src="/image.jpg"
  alt="Descriptive alt text"
  width={800}
  height={600}
  priority={isAboveFold}
/>

// ❌ Incorrect - Missing accessibility
<img src="/image.jpg" />
```

## 🎨 CSS Standards

### CSS Module Organization
```css
/* component.module.css */

/* 1. Component variables */
.component {
  --component-padding: 1rem;
  --component-bg: var(--primary);
}

/* 2. Base component styles */
.component {
  padding: var(--component-padding);
  background: var(--component-bg);
}

/* 3. Element styles */
.componentTitle {
  font-size: 2rem;
  margin-bottom: 1rem;
}

/* 4. State modifiers */
.component.active {
  opacity: 1;
}

/* 5. Responsive styles (if needed in same file) */
@media (max-width: 768px) {
  .component {
    padding: 0.5rem;
  }
}
```

### Mobile-First Responsive Design
```css
/* Base styles - mobile first */
.component {
  padding: 1rem;
  font-size: 14px; /* Minimum readable size */
}

/* Tablet and up */
@media (min-width: 768px) {
  .component {
    padding: 2rem;
    font-size: 16px;
  }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .component {
    padding: 3rem;
    font-size: 18px;
  }
}
```

### Tailwind CSS Usage
```jsx
// ✅ Correct - Use utility classes effectively
<div className="flex flex-col gap-4 p-6 bg-white rounded-lg shadow-md">
  <h2 className="text-2xl font-bold text-gray-900">Title</h2>
  <p className="text-gray-600 leading-relaxed">Content</p>
</div>

// ✅ Correct - Combine with CSS modules when needed
<div className={`${styles.customComponent} flex flex-col gap-4`}>
  <span className={styles.specialElement}>Special styling</span>
</div>

// ❌ Incorrect - Don't use arbitrary values when utilities exist
<div className="p-[13px]">   // Use p-3 instead
<div className="text-[15px]"> // Use text-base instead
```

## ♿ Accessibility Standards

### Touch Targets
```css
/* ✅ Correct - Minimum 44px touch targets */
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

/* ❌ Incorrect - Too small for mobile */
.button {
  height: 32px;
  padding: 4px 8px;
}
```

### Font Sizes
```css
/* ✅ Correct - Readable font sizes */
.text {
  font-size: 14px; /* Minimum */
}

.smallText {
  font-size: 14px; /* Never below 14px */
}

/* ❌ Incorrect - Too small */
.tinyText {
  font-size: 10px; /* Accessibility violation */
}
```

### ARIA and Semantic HTML
```jsx
// ✅ Correct - Proper ARIA usage
<button
  aria-expanded={isOpen}
  aria-controls="menu-id"
  aria-label="Open navigation menu"
>
  Menu
</button>

<nav role="navigation" aria-label="Main navigation">
  <ul id="menu-id">
    <li><Link href="/about">About</Link></li>
  </ul>
</nav>

// ✅ Correct - Semantic structure
<main>
  <header>
    <h1>Page Title</h1>
  </header>
  <section aria-label="Content section">
    <h2>Section Title</h2>
  </section>
</main>
```

## 🚀 Performance Standards

### Image Optimization
```jsx
// ✅ Correct - Next.js Image component
<Image
  src="/hero-image.jpg"
  alt="Hero image description"
  width={1920}
  height={1080}
  priority // For above-the-fold images
  placeholder="blur" // When possible
  blurDataURL="data:image/jpeg;base64,..." // Inline blur
/>

// ✅ Correct - Responsive images
<Image
  src="/image.jpg"
  alt="Description"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className="object-cover"
/>
```

### Code Splitting
```javascript
// ✅ Correct - Dynamic imports for large components
import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function MyComponent() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}
```

### Bundle Optimization
```javascript
// ✅ Correct - Import only what you need
import { useState } from 'react';
import { FaUser } from 'react-icons/fa';

// ❌ Incorrect - Importing entire libraries
import * as React from 'react';
import * as Icons from 'react-icons/fa';
```

## 🧪 Testing Standards

### Component Testing Checklist
- [ ] Component renders without errors
- [ ] All props are handled correctly
- [ ] Event handlers function properly
- [ ] Responsive design works across breakpoints
- [ ] Accessibility requirements are met
- [ ] Performance is optimized

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Testing
- [ ] Screen reader compatibility
- [ ] Keyboard-only navigation
- [ ] Color contrast ratios (WCAG AA)
- [ ] Touch target sizes (44px minimum)
- [ ] Focus indicators visible

## 📝 Documentation Standards

### Code Comments
```javascript
// ✅ Correct - Explain why, not what
// Cache user preferences to avoid repeated API calls
const userPreferences = useMemo(() => {
  return computePreferences(userData);
}, [userData]);

// ❌ Incorrect - Obvious comments
// Set the state to true
setState(true);
```

### Component Documentation
```jsx
/**
 * Header component with responsive navigation
 * 
 * Features:
 * - Dropdown menus for complex navigation
 * - Mobile hamburger menu
 * - Accessibility compliant
 * 
 * @param {Object} props - Component props
 * @param {boolean} props.showSearch - Whether to show search functionality
 */
export default function Header({ showSearch = false }) {
  // Component implementation
}
```

## 🔄 Version Control Standards

### Commit Messages
```
feat: Add mobile navigation drawer component
fix: Resolve carousel touch interaction issues
docs: Update component documentation
style: Improve button hover animations
refactor: Simplify dropdown menu logic
test: Add accessibility tests for header
chore: Update build dependencies
```

### Branch Naming
```
feature/mobile-navigation     ✅ Correct
fix/carousel-touch-issues     ✅ Correct
docs/component-updates        ✅ Correct

MobileNavigation              ❌ Incorrect
fix_carousel                  ❌ Incorrect
```

## 🔗 Related Documentation
- [Mobile Development Guidelines](mobile-development.md)
- [Testing Guidelines](testing.md)
- [Component Documentation](../components/)
- [Architecture Overview](../architecture/project-structure.md)