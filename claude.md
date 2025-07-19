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
├── news/                  # Blog system (main listing and individual posts)
│   ├── page.jsx           # Blog listing with category filtering
│   └── [slug]/            # Dynamic blog post pages
├── care/                  # Specialized care service pages
│   ├── pelvichealth/      # Pelvic health services
│   ├── medicare/          # Medicare services
│   ├── mental-health/     # Mental health services
│   ├── veteran-services/  # Veteran healthcare
│   ├── weight-management/ # Weight management
│   ├── telehealth/        # Telehealth services
│   ├── pain-management/   # Pain management
│   ├── dot-certifications/# DOT medical exams
│   └── independent-medical-examinations/ # IME services
├── contact/               # Contact page
├── events/                # Event pages (current, past, specific events)
├── meetthedoctor/         # Doctor biography page
└── services/              # Service pages
    └── corelift/          # CoreLift™ program

components/                 # Reusable React components
├── header/                # Navigation header with dropdowns and mobile menu
├── footer/                # Footer with comprehensive CTA and partner logos
├── calendar/              # Event calendar system
└── blog/                  # Blog data management and utilities

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
- **Blog system**: Static blog posts managed via `components/blog/blog-data.js` with filtering and navigation
- **Email collection**: Client-side email signup with localStorage fallback for static deployment

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
- **STRICT RULE**: ALL files and directories MUST use lowercase naming only
- **Pages**: `page.jsx` (App Router convention)
- **Layouts**: `layout.js`
- **Components**: `componentname.jsx` (lowercase only)
- **Directories**: `emailsubscription`, `smoothscroll` (lowercase only, no capitals)
- **Styles**: `componentname.module.css` for CSS Modules, `mobile.module.css` for mobile-specific styles
- **Utilities**: lowercase with hyphens (e.g., `smooth-scroll.js`)
- **Documentation**: `readme.md`, `changelog.md`, `claude.md` (lowercase only)
- **Wiki files**: lowercase with hyphens (e.g., `github-secrets-setup.md`)

### Content Organization
- **Healthcare pages**: Organized by service type (`/care`, `/services`)
- **Events**: Temporal organization (`/events/current`, `/events/past`)
- **Blog/News**: Integrated blog system at `/news` with dynamic content in navigation
- **Images**: Structured by page/section in `/public/images`
- **Mobile styles**: Separate stylesheets for mobile-specific styling

## Recent Architectural Changes (January 2025)

### CTA Consolidation
- **Removed**: Individual CTA sections from all service pages (medicare, mental-health, veterans, etc.)
- **Added**: Comprehensive CTA section in footer with contact methods and key features
- **Benefits**: Improved efficiency, consistent messaging, reduced code duplication

### Blog System Integration
- **Added**: Complete blog system at `/news` with category filtering and featured posts
- **Dynamic routing**: Individual post pages at `/news/[slug]` with generateStaticParams
- **Navigation integration**: Recent blog posts displayed in News & Events dropdown
- **Design**: Professional typography with serif fonts and previous/next navigation

### Footer Enhancements
- **CTA section**: Comprehensive call-to-action with phone, text, and online scheduling
- **Partner logos**: Consolidated all partner logos including gigiSafeHouse into unified section
- **Navigation**: Updated footer links to include all available pages and Core Medical Service placeholders
- **Email collection**: Enhanced newsletter signup with proper validation and localStorage

### Navigation Updates
- **Core Medical Services**: Added placeholders for Primary Care, Wellness Exams, Chronic Disease, etc.
- **Specialized Care**: Maintained existing structure with proper categorization
- **Blog integration**: Recent posts dynamically populated in News & Events dropdown
- **Responsive design**: Improved mobile navigation with better touch targets

## Documentation Standards

### CHANGELOG.md Requirements
- **Location**: Root directory (NOT in docs/) - industry standard
- **Format**: Chronological order with NEWEST entries first
- **Structure**: `## [Version] - YYYY-MM-DD` with Added/Fixed/Changed/Removed subsections
- **Versioning**: Semantic versioning (MAJOR.MINOR.PATCH)
- **Updates**: MUST be updated before every deployment for significant changes
- **Automation**: Pre-commit hooks enforce documentation standards

### Documentation Workflow
- Always update CHANGELOG.md for feat:, fix:, and breaking changes
- Use chronological order: newest versions at top
- Group changes within versions by type (Added/Fixed/Changed/Removed)
- Run `./scripts/setup-git-hooks.sh` after initial setup
- Pre-commit hooks will verify documentation compliance

### Important Instructions
- NEVER create files unless absolutely necessary for achieving goals
- ALWAYS prefer editing existing files over creating new ones
- Documentation files should only be created when explicitly requested
- CHANGELOG.md is critical and must be maintained for all significant changes

## Power Automate Integration Guide

### What Works ✅

#### Creating Power Automate Flows via Terminal
- **Azure CLI with Power Automate API**: Successfully creates flows
- **Required**: `az login` first to get authentication token
- **API Endpoint**: `https://api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/{environment}/flows?api-version=2016-11-01`
- **Method**: POST with JSON flow definition

#### Example Working Commands:
```bash
# Get token
TOKEN=$(az account get-access-token --resource "https://service.flow.microsoft.com" --query accessToken -o tsv)

# Create flow
curl -X POST "https://api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/Default-1b5ab773-bfb5-457c-aec3-9bf1b8da584a/flows?api-version=2016-11-01" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d '{...flow definition...}'

# Get webhook URL
curl -X POST "{flow-uri}/triggers/manual/listCallbackUrl?api-version=2016-11-01" \
  -H "Authorization: Bearer $TOKEN"
```

### What Doesn't Work ❌

#### SharePoint/Email Connections
- **Cannot create programmatically**: Requires OAuth consent
- **Manual step required**: User must authorize in Power Automate UI
- **API limitation**: `$authentication` parameter cannot be provided programmatically

#### Failed Approaches:
1. **PowerShell modules**: Installation issues in bash environment
2. **M365 CLI**: Requires interactive setup
3. **Power Platform CLI**: Needs MSI installation
4. **Direct connection creation**: OAuth2 consent flow blocks automation

### Key Environment Details
- **Tenant ID**: 1b5ab773-bfb5-457c-aec3-9bf1b8da584a
- **Environment**: Default-1b5ab773-bfb5-457c-aec3-9bf1b8da584a
- **SharePoint Site**: https://garciafamilymedicine.sharepoint.com/sites/marketing
- **SharePoint List ID**: 2BC93255-8AC1-41E4-BE25-066CF2941D0D

### Flow Structure That Works
1. HTTP Request trigger (webhook)
2. Data processing actions (Compose, Initialize Variable)
3. Response action
4. SharePoint/Email must be added manually in UI

### Current Implementation Status
- **Power Automate Flow**: Created and running (ID: 81f5aae6-c489-4fcd-9a1b-40cc2e6bf492)
- **Webhook**: Rotated and secured (January 19, 2025)
- **SharePoint List**: Created (ID: 2BC93255-8AC1-41E4-BE25-066CF2941D0D)
- **Azure App Settings**: Configured with new webhook URL
- **Missing**: SharePoint action (requires manual OAuth authorization)

### Alternative Approaches Tested
- **Azure Logic Apps**: Successfully created but requires AD permissions for SharePoint
- **Direct Graph API**: Requires application registration and admin consent
- **Power Platform Connectors**: Still require OAuth consent

### Conclusion
Due to Microsoft security requirements, SharePoint connections CANNOT be fully automated. The manual step is unavoidable but takes only 5 minutes to complete in the Power Automate UI.

## Power Apps CLI Installation Issues

### Installation Methods Attempted
1. **WinGet**: `winget install Microsoft.PowerAppsCLI` - Installs successfully but pac.exe location unclear
2. **Direct MSI**: Downloads from Microsoft but installation path not standard

### Known Issues
- PowerApps CLI 1.0 MSI doesn't follow standard installation patterns
- No clear documentation on default installation directory
- Path not automatically added to system PATH
- May require manual PATH configuration after installation

### Alternative: Use Power Automate Management API
Instead of Power Apps CLI, use direct API calls with Azure CLI:
```bash
# This approach works reliably
TOKEN=$(az account get-access-token --resource "https://service.flow.microsoft.com" --query accessToken -o tsv)
curl -X POST "https://api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/{env}/flows?api-version=2016-11-01" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d @flow-definition.json
```

## ✅ WORKING EMAIL INTEGRATION SOLUTION

### Complete Automated SharePoint Integration (NO Manual Steps)

#### Created Resources:
- **App Registration**: GarciaNewsletterApp (ID: 53ca6956-0a2d-498a-bbb6-0e025d652905)
- **Power Automate Flow**: Garcia Newsletter FINAL WORKING (ID: c3dd0e28-c63b-4c29-be2e-04086f616de5)
- **Webhook URL**: Active in .env.local

#### How It Works:
1. Website form submits to webhook
2. Power Automate flow receives data
3. Flow gets app-only token using client credentials
4. Flow writes directly to SharePoint via Graph API
5. Email saved successfully - verified working!

#### Key Commands:
```bash
# Create flow
TOKEN=$(az account get-access-token --resource "https://service.flow.microsoft.com" --query accessToken -o tsv)
curl -X POST "https://unitedstates.api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/{env}/flows?api-version=2016-11-01" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d @flow-definition.json

# Get webhook URL
curl -X POST "https://unitedstates.api.flow.microsoft.com/providers/Microsoft.ProcessSimple/environments/{env}/flows/{flowId}/triggers/manual/listCallbackUrl?api-version=2016-11-01" \
  -H "Authorization: Bearer $TOKEN" \
  -H "Content-Type: application/json" \
  -d "{}" | jq -r '.response.value'
```

#### SharePoint List Details:
- **Site**: https://garciafamilymedicine.sharepoint.com/sites/marketing
- **List**: Newsletter Subscribers
- **List ID**: 2BC93255-8AC1-41E4-BE25-066CF2941D0D
- **Verified**: Emails ARE being saved successfully