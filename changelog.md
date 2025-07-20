# Changelog

All notable changes to the Garcia Family Medicine website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.1.0] - 2025-01-20
### Added
- Landing page with faith-based welcome content at root (/)
- Main site moved to /home route with full carousel
- Email subscription troubleshooting guide in wiki
- Production deployment documentation for email setup

### Changed
- Carousel improvements:
  - Smooth continuous scrolling from start to finish
  - Proper height calculation accounting for header
  - Slower, smoother transitions (15s per slide)
  - Full viewport display on mobile
- Email subscription component:
  - Added hardcoded webhook fallback for resilience
  - Console logs only in development mode
  - Better error handling and messages
- Documentation consolidated to wiki directory
- Footer reorganized with affiliate logos below CTA

### Fixed
- Carousel images no longer cut off by header
- Mobile carousel height properly calculated
- Email subscriptions working with GitHub Secrets configuration
- GitHub Actions workflow updated to pass environment variables

### Removed
- 16 unused files and directories cleaned up:
  - Old webpack cache files
  - Unused pelvic health section components
  - Test email page
  - Duplicate documentation files
  - Unused SVG assets
  - Unused scripts directory
  - Unused canvas npm dependency

## [3.0.0] - 2025-01-19
### Added
- Complete Core Medical Services pages:
  - Wellness Exams with comprehensive health assessments
  - Chronic Disease Management for long-term conditions
  - Preventive Care services and screenings
  - Family Medicine for all ages
  - Women's Health comprehensive services
  - Men's Health specialized care
  - Pediatric Care from newborns to teens
- Faith & Family Medicine™ page with comprehensive spiritual care integration
- Trademarked service names in navigation:
  - Faith & Family Medicine™
  - ClearRoad™ DOT Exams
  - ValorView™ IME

### Fixed
- Email subscription system completely rebuilt:
  - Created new Power Automate flow with app-only authentication
  - Fixed SharePoint integration with correct site ID and column mappings
  - Emails now successfully saving to SharePoint list
  - No manual OAuth configuration required
- Updated webhook URLs in both local and production environments

### Changed
- Navigation structure updated with all new service pages
- Header navigation includes trademarked service names
- Claude.md documentation updated with working email integration details

### Security
- Rotated webhook URLs after security incident
- Generated fresh client secret for app registration (expires 2027)
- Verified no secrets exposed in documentation or wiki files

## [2.6.1] - 2025-01-18
### Fixed
- Add environment variables to GitHub Actions workflow for email integration
- Update workflow to pass newsletter webhook secrets to build process
- Rename files to follow lowercase naming convention

### Changed
- Consolidate documentation into wiki folder
- Clean up temporary files and folders
- Update git configuration for proper commit attribution

### Documentation
- Add GitHub Secrets setup guide to wiki
- Remove duplicate documentation files
- Consolidate all email integration guides

### Security
- Environment variables now properly configured for production builds
- Webhook URL no longer hardcoded in any files

## [2.6.0] - 2025-01-18
### Added
- Microsoft 365 email integration with SharePoint and Power Automate
- Reusable EmailSubscription component with webhook support
- SharePoint list integration for newsletter subscriber management
- Power Automate flow with app-only authentication (no manual OAuth required)
- HIPAA compliance documentation for current and future health data collection
- Comprehensive wiki documentation for email integration setup
- IP address tracking capability through Power Automate
- Unsubscribe token generation for each subscriber
- Environment variable configuration for webhook URL

### Changed
- Updated EmailSubscription component to support SharePoint integration
- Enhanced privacy considerations for potential health questionnaire use
- Improved error handling with fallback to localStorage when webhook unavailable
- Added placeholder for IP address collection (actual IP captured by Power Automate)

### Security
- Implemented HTTPS-only webhook communication
- Added validation for webhook URL configuration
- Prepared infrastructure for HIPAA-compliant health data collection
- Documented required safeguards for future PHI collection

### Documentation
- Created comprehensive HIPAA compliance analysis
- Added reusable integration guide for future projects
- Updated CLAUDE.md with Power Automate learnings
- Documented SharePoint column structure and requirements

## [2.5.0] - 2025-01-14
### Added
- Modular CSS architecture with organized file structure
- Global component library with reusable UI patterns
- Responsive grid system with auto-fit and three-column layouts
- Square card components with icon, title, and number patterns
- Enhanced button system with primary/secondary variants
- Fade-in animation utilities for smooth page transitions
- Common page layout patterns (hero sections, main content containers)

### Changed
- Restructured CSS from single globals.css into organized modules:
  - `styles/base.css` - Variables, reset, typography, element defaults
  - `styles/components.css` - Reusable UI components (cards, buttons, grids)
  - `styles/utilities.css` - Helper classes, animations, state styles
- Optimized pelvic health page to use global component patterns
- Updated contact page to leverage shared styling systems
- Reduced CSS duplication by approximately 60% across pages

### Fixed
- Restored lost styling on pelvic health page after initial refactoring
- Eliminated redundant CSS patterns between contact and pelvic health pages
- Consolidated similar hero section, grid, and card styling patterns
- Improved maintainability by centralizing common responsive breakpoints

### Removed
- Duplicate CSS patterns for hero sections, buttons, and grid layouts
- Redundant responsive styles now handled by global base styles
- Page-specific implementations of common UI patterns

## [2.4.0] - 2025-01-14
### Added
- Client-side newsletter form with email validation (localStorage only)
- Local browser storage for email collection (requires backend integration for actual subscriptions)
- Duplicate email detection and user feedback

### Changed
- Standardized all import statements by removing .jsx extensions across codebase
- Optimized component organization and file structure
- Enhanced coding standards compliance throughout application

### Fixed
- Removed all console.log statements from production code
- Eliminated unused FloatingDots component file
- Replaced newsletter TODO with client-side email collection (needs backend for real functionality)
- Standardized React component patterns and JSX structure

### Removed
- Development console statements that were polluting production builds
- Unused floatingdots.jsx component file

## [2.3.0] - 2025-01-14
### Added
- Industry-standard changelog format with chronological order (newest first)
- Pre-deployment documentation workflow with automated checks
- GitHub Actions workflow for documentation validation
- Pre-commit git hooks to enforce documentation standards
- Comprehensive pre-deployment checklist with quality gates
- Setup script for git hooks configuration
- Documentation workflow integration with development process

### Changed
- CHANGELOG.md restructured to proper chronological order per industry standards
- Documentation standards updated in CLAUDE.md for future consistency
- Getting started guide enhanced with documentation workflow
- Changelog automation guide updated with correct formatting

### Fixed
- CHANGELOG.md location corrected to root directory (not docs/)
- Documentation structure now follows Keep a Changelog standards exactly
- Version ordering now properly chronological (newest entries first)

## [2.2.0] - 2025-01-14
### Added
- Comprehensive documentation system with industry-standard structure
- Standardized CHANGELOG.md with complete project history
- Component documentation for header system architecture
- Mobile development guidelines with accessibility standards
- Getting started guide with development workflow
- Changelog automation and best practices documentation

### Changed
- Updated README.md with modern project overview and documentation links
- Enhanced project structure documentation

### Removed
- Legacy notes/ folder in favor of structured docs/ directory

## [2.1.0] - 2025-01-14
### Fixed
- Mobile accessibility compliance: All touch targets now meet 44px minimum requirement
- Font size standards: Eliminated all fonts below 14px for better readability
- Carousel navigation: Standardized touch targets to 44px across all breakpoints
- Pill button sizing: Consistent accessibility standards on all screen sizes
- Header top bar: Proper touch targets and readable font sizes

### Added
- Enhanced Tailwind config with mobile-sm (480px), mobile-xs (360px), mobile-landscape breakpoints
- Touch-target utilities for consistent mobile development
- Responsive utilities with min-height and min-width touch-target classes

### Changed
- Mobile breakpoint system standardized to single consistent system
- CSS architecture improved with mobile-first responsive design patterns

## [2.0.0] - 2025-01-14
### Added
- Next.js Image optimization: Replaced all `<img>` tags with optimized `Image` components
- Font loading optimization using Next.js Google Fonts API
- Enhanced CSS variables with comprehensive color and spacing system
- Build performance optimization with bundle splitting and chunk management

### Fixed
- Component organization: Consolidated duplicate `/app/components` and `/components` directories
- Import consistency: Removed `.jsx` extensions from all component imports
- Production console logs: Removed development artifacts from production builds
- CSS organization: Cleaned redundant font imports and improved theming

### Changed
- Font system migrated from CSS imports to Next.js font optimization
- Image performance: All images now use Next.js optimization with proper sizing
- Component structure improved for modularity and maintainability

### Removed
- Redundant Google Fonts CSS replaced with Next.js font loading
- Unused imports: Cleaned unused React and component imports
- Duplicate components: Consolidated component directory structure

## [1.9.0] - 2024-12-15

### Added
- **Pelvic Health Recovery Event Page**: Complete event page with carousel and content sections
- **CoreLift Carousel**: Interactive image carousel for CoreLift program showcasing
- **Enhanced Mobile Navigation**: Improved touch interactions and responsive design

### Fixed
- **Mobile Carousel Layout**: Fixed positioning and navigation for mobile devices
- **Image Organization**: Proper folder structure for event and service images

## [1.8.0] - 2024-12-10

### Added
- **Meet the Doctor Page**: Comprehensive doctor biography with career timeline
- **Gradient System**: Enhanced color gradients and visual consistency
- **Component Architecture**: Improved component modularity and reusability

### Fixed
- **Color Theme**: Restored and refined original blue theme across all components
- **Deployment Issues**: Resolved build and deployment configuration problems

## [1.7.0] - 2024-11-25

### Added
- **Current Events Page**: Dynamic event listing with calendar integration
- **Past Events Page**: Historical event archive with navigation
- **Monthly Health Themes**: Calendar integration with health awareness themes
- **Event Pages**: Juneteenth and Independence Day dedicated event pages

### Enhanced
- **Dropdown Navigation**: Clickable headers and optimized footer links
- **Calendar System**: Improved event processing and duplicate elimination
- **Event Processing**: Streamlined event management and display logic

## [1.6.0] - 2024-11-15

### Added
- **Mobile Navigation Redesign**: Complete expandable submenu system
- **Responsive Header Styles**: Reorganized mobile navigation architecture
- **Mobile Flyout Menu**: Enhanced mobile user experience

### Fixed
- **Desktop Flyout Bug**: Resolved desktop menu interaction issues
- **Mobile Header Styling**: Improved responsive design consistency

## [1.5.0] - 2024-11-05

### Added
- **Contact Page**: Comprehensive contact information and form
- **Page Templates**: Standardized templates for consistent page creation
- **Enhanced Navigation**: Improved link structure and organization

### Changed
- **Contact Information**: Updated email from info@ to hello@garciafamilymedicine.care
- **Priority Care Line**: Renamed from emergency line with proper tel: extension
- **Doctor References**: Standardized to "Dr. Tess" throughout the site

### Fixed
- **Telephone Links**: Converted all phone numbers to proper tel: links
- **Meet the Doctor**: Fixed page linking and body text styling

## [1.4.0] - 2024-10-20

### Added
- **Dynamic Calendar System**: Auto-generating event and link management
- **Calendar Events**: Centralized event definitions and rendering
- **Navigation Controls**: Current and next month navigation with highlighting
- **Event Tooltips**: Enhanced event information display

### Enhanced
- **Calendar Rendering**: Unified event logic and simplified management
- **Event Management**: Dynamic generation from easy-to-edit table format
- **Calendar Styling**: Improved visual hierarchy and maintainability

## [1.3.0] - 2024-10-10

### Added
- **Header Component System**: Modular navigation with dropdown menus
- **Reclaim Confidence Flyout**: Interactive CTA button with sliding panel
- **Mobile Header**: Responsive hamburger menu with touch interactions
- **Calendar Integration**: Event calendar in navigation dropdown

### Enhanced
- **Dropdown Menus**: Three-column layout for Events, Services, and Affiliates
- **Mobile Responsiveness**: Touch-friendly navigation and interactions
- **Accessibility**: Keyboard and screen reader support

## [1.2.0] - 2024-09-25

### Added
- **Pelvic Health Page**: Comprehensive content with sections and styling
- **Hero Carousel**: Interactive image carousel for homepage
- **Footer Enhancement**: Partner logos, map integration, and newsletter signup

### Enhanced
- **Mobile Formatting**: Improved carousel responsiveness
- **Static Export**: Optimized Next.js configuration for Azure deployment
- **Component Structure**: Separated header and footer as independent components

## [1.1.0] - 2024-09-10

### Added
- **Homepage Framework**: Initial page structure with hero section
- **Component Architecture**: Header and footer component system
- **Azure Deployment**: Static Web Apps configuration and workflow
- **Favicon and Assets**: Brand assets and placeholder content

### Enhanced
- **Build System**: Next.js static export configuration
- **Deployment Pipeline**: Azure Static Web Apps integration
- **Directory Structure**: Organized component and asset folders

## [1.0.0] - 2024-08-15

### Added
- **Initial Release**: Garcia Family Medicine Next.js website
- **Next.js Framework**: Modern React-based architecture
- **Tailwind CSS**: Utility-first styling system
- **Azure Integration**: Cloud hosting and deployment setup
- **Basic Components**: Foundation layout and styling

---

## Development Guidelines

### Commit Message Format
```
type(scope): description

- bullet points for details
- more details if needed

🤖 Generated with [Claude Code](https://claude.ai/code)

Co-Authored-By: Claude <noreply@anthropic.com>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

### Breaking Changes
Breaking changes should be documented with `BREAKING CHANGE:` in the commit body.

### Versioning
- **MAJOR**: Breaking changes
- **MINOR**: New features (backwards compatible)
- **PATCH**: Bug fixes (backwards compatible)