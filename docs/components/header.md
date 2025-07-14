# Header Component System

**Last Updated**: January 14, 2025  
**Location**: `/components/header/`

## Overview

The header component system provides a responsive, accessible navigation system with dropdown menus, mobile optimization, and CTA functionality.

## 📁 Component Structure

```
components/header/
├── header.jsx                     # Main header component
├── header.module.css              # Header layout and styling
├── mobile.module.css              # Mobile-specific styles
├── dropdownmenu.jsx               # Reusable dropdown component
├── dropdownmenu.module.css        # Dropdown styling
├── dropdownmenu.mobile.module.css # Mobile dropdown styles
├── pillbutton.jsx                 # CTA pill button
├── pillbutton.module.css          # Pill button styling
├── pillbutton.mobile.module.css   # Mobile pill button styles
├── reclaimconfidenceflyout.jsx    # CTA flyout panel
├── reclaimconfidence.module.css   # Flyout styling
├── reclaimconfidence.mobile.module.css # Mobile flyout styles
└── navdata.js                     # Navigation data and configuration
```

## 🎯 Key Features

### Centralized Data Management
All navigation content is defined in `navdata.js`:
- Menu labels and links
- Dropdown structure and content
- Contact information
- Business hours

### Fully Modular Styling
Each component has dedicated CSS modules:
- **Scoped styles** prevent conflicts
- **Responsive design** with mobile-specific files
- **Accessibility** features built-in
- **Easy maintenance** and updates

### Three-Column Dropdown System
Uniform layout across all dropdowns:
- **Events**: News, upcoming events, calendar
- **Services**: Core and specialized services with contact info
- **Affiliates**: Partner organizations and partnership info

### Mobile-First Responsive Design
- **44px minimum touch targets** for accessibility
- **Hamburger menu** for mobile navigation
- **Touch-friendly interactions** throughout
- **Keyboard and screen reader** support

## 🔧 Usage Examples

### Basic Header Implementation
```jsx
import Header from '../components/header/header';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
```

### Updating Navigation Data
Edit `navdata.js` to modify menu structure:
```javascript
export const nav_links = [
  { href: '/new-page', label: 'New Page' },
  {
    label: 'Services',
    dropdown: {
      links: [
        {
          title: 'Core Services',
          items: [
            { label: 'Primary Care', href: '/care/primary' }
          ]
        }
      ]
    }
  }
];
```

## 📱 Mobile Optimization

### Touch Target Standards
All interactive elements meet **44px minimum** requirement:
- Navigation buttons
- Dropdown triggers
- Pill button
- Close buttons

### Responsive Breakpoints
```css
/* Standard mobile */
@media (max-width: 768px) { }

/* Small mobile */
@media (max-width: 480px) { }

/* Extra small mobile */
@media (max-width: 360px) { }

/* Mobile landscape */
@media (max-height: 500px) and (orientation: landscape) { }
```

### Font Size Standards
All text meets **14px minimum** for accessibility:
- Menu items: 14px+
- Button text: 14px+
- Contact info: 14px+

## ♿ Accessibility Features

### ARIA Attributes
- `aria-expanded` for dropdown states
- `aria-controls` for menu relationships
- `aria-label` for icon buttons
- `role` attributes for semantic structure

### Keyboard Navigation
- **Tab** navigation through all interactive elements
- **Enter/Space** to activate buttons and links
- **Escape** to close dropdowns and menus
- **Arrow keys** for dropdown navigation

### Screen Reader Support
- Semantic HTML structure
- Descriptive alt text for images
- Hidden text for context (`sr-only` class)
- Proper heading hierarchy

## 🎨 Styling Guidelines

### CSS Module Organization
```css
/* Component-specific variables */
.header {
  --header-height: 80px;
  --header-bg: var(--primary);
}

/* Base styles */
.navbar {
  /* Desktop styles */
}

/* Responsive overrides */
@media (max-width: 768px) {
  .navbar {
    /* Mobile styles */
  }
}
```

### Color System
Uses CSS custom properties from global theme:
- `var(--primary)` - Main brand color
- `var(--accent)` - CTA and highlight color
- `var(--text-color)` - Primary text
- `var(--border)` - Border colors

## 🔄 Update Procedures

### Adding New Menu Items
1. Edit `navdata.js` to add new links
2. Test dropdown structure
3. Verify mobile responsiveness
4. Check accessibility compliance

### Modifying Styles
1. Identify appropriate CSS module
2. Make changes in scoped file
3. Test across all breakpoints
4. Verify no style leakage

### Adding New Dropdown Sections
1. Update `navdata.js` structure
2. Ensure three-column layout compatibility
3. Test dropdown positioning
4. Verify mobile adaptation

## 🧪 Testing Checklist

### Functionality
- [ ] All navigation links work correctly
- [ ] Dropdowns open/close properly
- [ ] Mobile menu functions on touch devices
- [ ] Pill button triggers flyout
- [ ] Keyboard navigation works

### Responsive Design
- [ ] Header adapts to all screen sizes
- [ ] Touch targets meet 44px minimum
- [ ] Text remains readable at all sizes
- [ ] No horizontal scrolling occurs
- [ ] Mobile menu is easily accessible

### Accessibility
- [ ] Screen reader compatibility
- [ ] Keyboard-only navigation possible
- [ ] Color contrast meets WCAG standards
- [ ] Focus indicators are visible
- [ ] All interactive elements are labeled

## 🔗 Related Documentation
- [Mobile Development Guidelines](../development/mobile-development.md)
- [CSS Architecture](../architecture/css-architecture.md)
- [Accessibility Standards](../development/coding-standards.md#accessibility)
- [Component Testing](../development/testing.md#component-testing)