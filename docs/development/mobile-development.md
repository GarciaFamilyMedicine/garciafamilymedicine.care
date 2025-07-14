# Mobile Development Guidelines

**Last Updated**: January 14, 2025

## Overview

This guide outlines mobile-first development practices and standards for the Garcia Family Medicine website, ensuring optimal user experience across all devices.

## 📱 Mobile-First Philosophy

### Core Principles
- **Touch-friendly interfaces** with proper target sizes
- **Performance optimization** for slower mobile connections
- **Accessibility compliance** for diverse user needs
- **Progressive enhancement** from mobile to desktop

### Design Approach
1. Start with mobile layout and interactions
2. Enhance for tablet and desktop
3. Optimize for touch and gesture navigation
4. Ensure fast loading and smooth animations

## 📏 Touch Target Standards

### Minimum Sizes (WCAG Compliance)
```css
/* ✅ Correct - 44px minimum touch targets */
.button {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 16px;
}

.touchTarget {
  min-height: var(--touch-target); /* 44px utility */
  min-width: var(--touch-target);
}

/* ❌ Incorrect - Too small for touch */
.smallButton {
  height: 32px; /* Below minimum */
  width: 32px;
}
```

### Interactive Element Spacing
```css
/* Ensure adequate spacing between touch targets */
.buttonGroup {
  display: flex;
  gap: 12px; /* Minimum 8px, recommended 12px+ */
}

.navigationList {
  list-style: none;
}

.navigationList li {
  margin-bottom: 8px; /* Prevent accidental taps */
}
```

## 🎨 Responsive Breakpoint System

### Standardized Breakpoints
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      screens: {
        'mobile': {'max': '768px'},        // Primary mobile
        'mobile-sm': {'max': '480px'},     // Small mobile
        'mobile-xs': {'max': '360px'},     // Extra small mobile
        'mobile-landscape': {              // Mobile landscape
          'max-height': '500px', 
          'orientation': 'landscape'
        },
      }
    }
  }
}
```

### CSS Media Query Usage
```css
/* Base styles - mobile first */
.component {
  padding: 1rem;
  font-size: 14px;
}

/* Standard mobile (up to 768px) */
@media (max-width: 768px) {
  .component {
    padding: 0.75rem;
  }
}

/* Small mobile (up to 480px) */
@media (max-width: 480px) {
  .component {
    padding: 0.5rem;
    font-size: 14px; /* Never below 14px */
  }
}

/* Extra small mobile (up to 360px) */
@media (max-width: 360px) {
  .component {
    padding: 0.25rem;
  }
}

/* Mobile landscape */
@media (max-height: 500px) and (orientation: landscape) {
  .component {
    padding: 0.5rem 1rem;
  }
}
```

## 🔤 Typography Standards

### Font Size Guidelines
```css
/* ✅ Minimum readable sizes */
.bodyText {
  font-size: 16px;     /* Ideal body text */
  line-height: 1.5;
}

.smallText {
  font-size: 14px;     /* Absolute minimum */
  line-height: 1.4;
}

.buttonText {
  font-size: 14px;     /* Minimum for interactive elements */
  font-weight: 600;
}

/* ❌ Avoid - Too small for mobile */
.tinyText {
  font-size: 12px;     /* Accessibility violation */
}
```

### Responsive Typography
```css
/* Mobile-first typography scaling */
.heading {
  font-size: 1.5rem;   /* 24px on mobile */
  line-height: 1.2;
}

@media (min-width: 768px) {
  .heading {
    font-size: 2rem;    /* 32px on tablet+ */
  }
}

@media (min-width: 1024px) {
  .heading {
    font-size: 2.5rem;  /* 40px on desktop */
  }
}
```

## 🎯 Touch Interaction Patterns

### Button Design
```jsx
// ✅ Mobile-optimized button
<button 
  className={styles.mobileButton}
  aria-label="Submit form"
  type="submit"
>
  Submit
</button>
```

```css
.mobileButton {
  min-height: 44px;
  min-width: 44px;
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  
  /* Touch feedback */
  transition: all 0.2s ease;
  transform: scale(1);
}

.mobileButton:active {
  transform: scale(0.98);
  background-color: var(--button-pressed);
}

/* Ensure button doesn't shrink */
.mobileButton {
  flex-shrink: 0;
}
```

### Form Controls
```jsx
// Mobile-optimized form inputs
<input
  type="email"
  className={styles.mobileInput}
  placeholder="Enter your email"
  autoComplete="email"
  inputMode="email"
/>
```

```css
.mobileInput {
  min-height: 44px;
  padding: 12px 16px;
  font-size: 16px; /* Prevents zoom on iOS */
  border-radius: 8px;
  border: 2px solid var(--border-color);
}

.mobileInput:focus {
  border-color: var(--focus-color);
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.1);
}
```

## 🖼️ Image Optimization

### Responsive Images
```jsx
// Mobile-optimized images with Next.js
<Image
  src="/hero-mobile.jpg"
  alt="Garcia Family Medicine - Mobile optimized"
  width={768}
  height={400}
  priority
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  className={styles.responsiveImage}
/>
```

```css
.responsiveImage {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

/* Mobile-specific image container */
@media (max-width: 768px) {
  .imageContainer {
    margin: 0 -1rem; /* Full-bleed on mobile */
  }
  
  .responsiveImage {
    border-radius: 0; /* Remove rounded corners */
  }
}
```

### Loading Optimization
```jsx
// Progressive image loading
<Image
  src="/large-image.jpg"
  alt="Description"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
  loading="lazy" // For below-fold images
/>
```

## 🎪 Mobile Navigation Patterns

### Hamburger Menu Implementation
```jsx
export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger trigger */}
      <button
        className={styles.hamburgerButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      {/* Mobile menu overlay */}
      {isOpen && (
        <div
          className={styles.mobileOverlay}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
      >
        {/* Menu content */}
      </nav>
    </>
  );
}
```

### Menu Styling
```css
.hamburgerButton {
  display: none;
  background: none;
  border: none;
  width: 44px;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
}

.hamburgerLine {
  width: 24px;
  height: 2px;
  background-color: currentColor;
  transition: all 0.3s ease;
}

/* Show hamburger on mobile */
@media (max-width: 768px) {
  .hamburgerButton {
    display: flex;
  }
}

.mobileMenu {
  position: fixed;
  top: 0;
  right: -100%;
  width: 280px;
  height: 100vh;
  background: var(--menu-bg);
  transition: right 0.3s ease;
  z-index: 1000;
}

.mobileMenu.open {
  right: 0;
}

.mobileOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999;
}
```

## 🎛️ Performance Optimization

### Lazy Loading
```jsx
// Lazy load heavy components
import { lazy, Suspense } from 'react';

const HeavyMobileComponent = lazy(() => 
  import('./HeavyMobileComponent')
);

function MobileApp() {
  return (
    <Suspense fallback={<MobileLoader />}>
      <HeavyMobileComponent />
    </Suspense>
  );
}
```

### Touch Event Optimization
```jsx
// Optimize touch events
useEffect(() => {
  const handleTouchStart = (e) => {
    // Handle touch start
  };

  const handleTouchMove = (e) => {
    // Throttle touch move events
    if (Date.now() - lastMoveTime < 16) return; // ~60fps
    lastMoveTime = Date.now();
    // Handle touch move
  };

  // Use passive listeners for better performance
  element.addEventListener('touchstart', handleTouchStart, { passive: true });
  element.addEventListener('touchmove', handleTouchMove, { passive: true });

  return () => {
    element.removeEventListener('touchstart', handleTouchStart);
    element.removeEventListener('touchmove', handleTouchMove);
  };
}, []);
```

## ♿ Mobile Accessibility

### Screen Reader Support
```jsx
// Mobile-optimized screen reader content
<nav aria-label="Mobile navigation">
  <button
    aria-expanded={isMenuOpen}
    aria-controls="mobile-menu-list"
    aria-label="Main navigation menu"
  >
    Menu
  </button>
  
  <ul id="mobile-menu-list" aria-hidden={!isMenuOpen}>
    <li>
      <Link href="/about" aria-current={pathname === '/about' ? 'page' : undefined}>
        About
      </Link>
    </li>
  </ul>
</nav>
```

### Focus Management
```jsx
// Manage focus for mobile interactions
const focusTrap = useRef(null);

useEffect(() => {
  if (isMenuOpen) {
    // Focus first interactive element
    const firstFocusable = focusTrap.current?.querySelector(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    firstFocusable?.focus();
  }
}, [isMenuOpen]);
```

## 🧪 Mobile Testing Checklist

### Device Testing
- [ ] iPhone (various sizes: SE, 12, 14 Pro Max)
- [ ] Android phones (various screen sizes)
- [ ] Tablets (iPad, Android tablets)
- [ ] Different orientations (portrait/landscape)

### Interaction Testing
- [ ] Touch targets are easily tappable (44px minimum)
- [ ] Gestures work properly (swipe, pinch, scroll)
- [ ] Forms are easy to fill on mobile keyboards
- [ ] Navigation is thumb-friendly
- [ ] No accidental trigger of actions

### Performance Testing
- [ ] Page loads quickly on 3G/4G
- [ ] Images are appropriately sized
- [ ] Animations are smooth (60fps)
- [ ] No layout shift during loading
- [ ] Touch interactions have immediate feedback

### Accessibility Testing
- [ ] Screen reader navigation works
- [ ] Voice control functionality
- [ ] High contrast mode support
- [ ] Large text scaling works
- [ ] Color-blind friendly design

## 📊 Mobile Analytics

### Key Metrics to Track
- **Core Web Vitals** on mobile devices
- **Touch interaction success rate**
- **Mobile conversion rates**
- **Page load times** on mobile networks
- **User engagement** metrics

### Implementation
```javascript
// Track mobile-specific events
const trackMobileInteraction = (action, element) => {
  if ('ontouchstart' in window) {
    analytics.track('mobile_interaction', {
      action,
      element,
      screenSize: window.innerWidth,
      touchDevice: true
    });
  }
};
```

## 🔧 Development Tools

### Mobile Testing Tools
- **Chrome DevTools** - Device simulation
- **Firefox Responsive Design Mode** - Multi-device testing
- **BrowserStack** - Real device testing
- **LambdaTest** - Cross-browser mobile testing

### Performance Tools
- **Lighthouse Mobile** - Performance auditing
- **PageSpeed Insights** - Mobile speed testing
- **WebPageTest** - Mobile network simulation

## 🔗 Related Documentation
- [Coding Standards](coding-standards.md)
- [Responsive Design Architecture](../architecture/responsive-design.md)
- [Component Testing](testing.md)
- [Performance Guidelines](../architecture/performance.md)