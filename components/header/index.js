/**
 * Header Component Barrel Export
 * 
 * Clean import path for the header component and its sub-components
 * Provides both named and default exports for flexibility
 */

// Main header component (default export)
export { default } from './header';
export { default as Header } from './header';

// Sub-components (named exports)
export { default as DropdownMenu } from './dropdownmenu';
export { default as PillButton } from './pillbutton';
export { default as ReclaimConfidenceFlyout } from './reclaimconfidenceflyout';

// Data exports
export { top_buttons, nav_links } from './navdata';