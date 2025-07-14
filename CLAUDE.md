# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm install` - Install dependencies
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build static export for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Testing
No test framework is currently configured in this project.

## Architecture Overview

This is a **Next.js 15** application using the **App Router** (`/app` directory) for Garcia Family Medicine's website. The application is configured for **static export** (`output: 'export'`) targeting Azure Static Web Apps deployment.

### Key Technologies
- **Framework**: Next.js 15.3.3 with App Router
- **Styling**: Tailwind CSS v3.4.10 + CSS Modules
- **UI Components**: React 19 with React Icons
- **Charts**: Chart.js with react-chartjs-2
- **Icons**: Lucide React, React Icons (Font Awesome)

### Project Structure
```
app/                        # Next.js App Router pages
├── globals.css            # Global styles with Tailwind imports
├── layout.js              # Root layout with font loading and smooth scroll
├── page.jsx               # Homepage with carousel
├── care/pelvichealth/     # Specialized care pages
├── contact/               # Contact page
├── events/                # Event pages (current, past, specific events)
├── meetthedoctor/         # Doctor biography page
└── services/              # Service pages

components/                 # Reusable React components
├── header/                # Navigation header with dropdowns and mobile menu
├── footer/                # Footer with partner logos
└── calendar/              # Event calendar system

public/images/             # Static assets organized by section
```

### Styling Architecture
- **Global styles**: `app/globals.css` with Tailwind directives and CSS custom properties
- **CSS Modules**: Component-specific styles (e.g., `header.module.css`, `mobile.module.css`)
- **Tailwind config**: Custom breakpoints, colors using CSS variables, and typography plugin
- **Font loading**: Geist font via Next.js Google Fonts with CSS variables

### Component Patterns
- **Client components**: Most components use `'use client'` directive for interactivity
- **Mobile-first responsive**: Custom mobile breakpoint (max: 768px) with separate mobile stylesheets
- **State management**: React hooks (useState, useEffect, useRef) for local component state
- **Navigation**: Complex header with dropdown menus, flyouts, and mobile hamburger menu

### Data Management
- **Static data**: Navigation links and calendar events stored in JavaScript modules
- **No backend**: Static site with no API routes or server-side functionality
- **Event system**: Calendar events managed via `calendar-events.js` with recurring event support

## Development Notes

### Known Issues
- **CSS Modules + Tailwind**: Careful management needed to avoid style conflicts
- **Mobile navigation**: Complex state management for responsive menu behaviors
- **Static export**: Images must use `unoptimized: true` in next.config.mjs

### Performance Optimizations
- Webpack bundle splitting configured for vendor and common chunks
- Console logs removed in production builds
- Font loading optimized with `display: 'swap'`
- Smooth scrolling utility for hash navigation

### File Naming Conventions
- **Pages**: `page.jsx` (App Router convention)
- **Layouts**: `layout.js`
- **Components**: `componentname.jsx`
- **Styles**: `componentname.module.css` for CSS Modules, `mobile.module.css` for mobile-specific styles
- **Utilities**: lowercase with hyphens (e.g., `smoothscroll.js`)

### Content Organization
- **Healthcare pages**: Organized by service type (`/care`, `/services`)
- **Events**: Temporal organization (`/events/current`, `/events/past`)
- **Images**: Structured by page/section in `/public/images`
- **Mobile styles**: Separate stylesheets for mobile-specific styling