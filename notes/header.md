## **Header Component Structure (2025 Clean Edition)**

### **Directory: `/components/header/`**

Your header is built for clarity, modularity, and maintainability. **All styling is local, all data is centralized, and every UI element is a focused, reusable component.**

---

### **File & Component Overview**

| File                           | Purpose                                                                                           |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| `header.jsx`                   | Main header/nav bar: includes logo, navigation links, dropdowns, mobile hamburger, CTA pill, etc. |
| `header.module.css`            | Header-wide styling (nav layout, logo position, mobile rules, bar color, spacing).                |
| `dropdownmenu.jsx`             | Multi-use dropdown menu component (used for Events, Services, Affiliates).                        |
| `dropdownmenu.module.css`      | Styling for dropdown menus (3-column layout, section headers, hover, responsive, etc).            |
| `navdata.js`                   | All nav and dropdown structure, text, contact, and submenu info lives here (pure data, no UI).    |
| `pillbutton.jsx`               | "Reclaim Your Confidence!" call-to-action button.                                                 |
| `pillbutton.module.css`        | Styles for the pill button (color, size, alignment, hover, mobile tweaks).                        |
| `reclaimconfidenceflyout.jsx`  | Special CTA flyout for the orange pill button.                                                    |
| `reclaimconfidence.module.css` | Scoped styles for the CTA flyout.                                                                 |

---

### **Key Header Features**

* **Centralized Data**:
  All navigation and dropdown content is defined in `navdata.js`—no “hardcoding” in components. Change labels, links, contact info, or hours in a single file.

* **Fully Modular/Scoped Styling**:
  Each part (header, dropdown, pill, flyout) has its own `.module.css`, so changes never leak elsewhere. Responsive and accessibility tweaks are easy and safe.

* **Three Uniform Dropdown Menus**:

  * Each dropdown is a **3-column layout**.

    * **Events:** News links, upcoming events (center), calendar and “Past Highlights” link.
    * **Services:** Core and specialized services (including nested submenus, e.g., “The Royal Tingle”), plus a contact/info card.
    * **Affiliates:** Partner orgs (links) and partnership/contact info.
  * All dropdown logic lives in a single, reusable `DropdownMenu` component—never repeated.

* **Mobile Responsive**:

  * Hamburger icon toggles the menu for small screens.
  * “Reclaim Your Confidence!” CTA stays visible (pillbutton centered on mobile, right-aligned on desktop).
  * Touch/keyboard navigation is supported.

* **Accessibility/UX**:

  * All menu items and buttons are keyboard and screen-reader friendly.
  * Focus/active states are clear for every element.
  * Layout stays clean at all widths, with columns and cards adapting as needed.

---

### **How to Update the Header**

* **Add/Edit menu items:**
  Update `navdata.js`. Structure new dropdowns or links using the same conventions.

* **Change styles/layout:**
  Adjust only the relevant `.module.css` file—safe, fast, no side-effects.

* **Update logic or interactivity:**
  Edit the relevant `.jsx` file (e.g., header.jsx for top-level behaviors, dropdownmenu.jsx for menu specifics).

---

### **Sample Folder Tree**

```
components/header/
│
├── dropdownmenu.jsx
├── dropdownmenu.module.css
├── header.jsx
├── header.module.css
├── navdata.js
├── pillbutton.jsx
├── pillbutton.module.css
├── reclaimconfidence.module.css
└── reclaimconfidenceflyout.jsx
```

---

**Summary:**

> Your header is now a future-proof, modular system.
> Add pages, tweak hours, or rebrand in minutes—no risk of breakage.
> Everything is separated, well-documented, and scalable.

---
