# Garcia Family Medicine Website

**Professional healthcare website built with Next.js, featuring responsive design, accessibility compliance, and modern web standards.**

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.git

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📚 Documentation

- **[Getting Started](docs/development/getting-started.md)** - Setup and development guide
- **[Coding Standards](docs/development/coding-standards.md)** - Code style and best practices
- **[Mobile Development](docs/development/mobile-development.md)** - Mobile-first development guidelines
- **[Component Documentation](docs/components/)** - Individual component guides
- **[CHANGELOG.md](CHANGELOG.md)** - Complete project history

## 🏗️ Architecture

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS + CSS Modules
- **Deployment**: Azure Static Web Apps
- **Accessibility**: WCAG 2.1 AA compliant
- **Mobile-First**: Responsive design with 44px touch targets

## 📱 Mobile Optimization

- ✅ **Touch targets** meet 44px minimum requirement
- ✅ **Font sizes** comply with 14px readability standards
- ✅ **Responsive breakpoints** for all device sizes
- ✅ **Performance optimized** for mobile networks

## ♿ Accessibility Features

- **Screen reader** compatible navigation
- **Keyboard-only** interaction support
- **High contrast** mode support
- **Touch-friendly** interface design
- **Semantic HTML** structure throughout

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 15 | React framework with App Router |
| Tailwind CSS | Utility-first styling |
| CSS Modules | Component-scoped styles |
| React Icons | Icon library |
| Chart.js | Data visualization |

## 📦 Project Structure

```
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
├── public/             # Static assets
├── docs/               # Comprehensive documentation
├── CHANGELOG.md        # Project changelog
└── CLAUDE.md          # Claude Code instructions
```

## 🚀 Deployment

The website automatically deploys to Azure Static Web Apps when changes are pushed to the main branch.

## 📋 Development To‑Do List

## 🔲 Navigation & Layout
- [ ] **Flyout menu:** Add links to hashtag buttons (so they open relevant sections or external resources).
- [ ] **Flyout menu:** Improve mobile formatting (center content more vertically and horizontally).
- [ ] **Pill button (mobile):** Fix alignment for true flex centering between logo and sandwich/hamburger menu.
- [ ] **Header nav:** Add “News” button.
- [ ] **Header nav:** Combine News and Events buttons (with dropdown or column layout for both news and event links).
- [ ] **Header polish:** Finish layout, ensure buttons and links are consistent and functional.

## 🔲 Content & Features
- [ ] **Blog system:** Install and integrate a simple blogging/news system (consider options like MDX, Notion CMS, or Netlify CMS).
- [ ] **Patient docs:** Add section for New Patient & Established Patient documents (printable/downloadable before appointments).
- [ ] **Newsletter signup:** Connect input box to actual newsletter system (preferably Microsoft Forms/List or another integrated solution).
- [ ] **Input linking:** Wire up all relevant input boxes to backend or email notification as appropriate.

## 🔲 Internationalization & Accessibility
- [ ] **i18n:** Install and configure for Spanish (with language switcher).
- [ ] **Images with text:** Implement logic to swap images containing text based on selected translation.
- [ ] **SEO/Best practices:** Audit headers, meta tags, semantic HTML, and ARIA attributes.
- [ ] **Accessibility polish:** Keyboard navigation, color contrast, skip links, focus outlines, etc.

## 🔲 General Polish & Fixes
- [ ] **Button linking:** Ensure all buttons in header, flyout, and nav link to correct pages or perform correct actions.
- [ ] **General layout:** Continue polish, responsive improvements, and bug fixes as needed.
---
---
---
---
# Garcia Family Medicine Next.js Frontend Development Guide

Welcome to the `garciafamilymedicine.care` repository! This is a Next.js-based frontend application for [garciafamilymedicine.care](https://garciafamilymedicine.care), delivering a compassionate, faith-driven healthcare experience for patients in Blue Springs, MO, and the Kansas City metro area. Built with modern web technologies, it’s designed for deployment to Azure Static Web Apps.

## Overview

- **Framework**: Next.js 15.2.1
- **Frontend**: React 19
- **Styling**: Tailwind CSS (v3.4.10, with custom configuration)
- **Deployment**: Planned for Azure Static Web Apps (serverless mode using `.next`)
- **Repository**: [github.com/GarciaFamilyMedicine/garciafamilymedicine.care](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care)

## Workflow

We use a feature branch workflow where each developer works on their own feature branch created from `main`. Changes are merged into `main` via pull requests after review and approval. This streamlined process eliminates the need for forking or a separate `development` branch.

### Feature Branch Naming Convention
Create feature branches using the format `feature/development-<yourname>`, where `<yourname>` is your identifier (e.g., `feature/development-joseph` for Joseph). This helps track who is working on which feature.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js**: Version 18.17.0 or later ([Download](https://nodejs.org/))
- **Git**: For version control ([Download](https://git-scm.com/))
- **Visual Studio Code (VS Code)**: Recommended code editor ([Download](https://code.visualstudio.com/))
- **GitHub CLI (`gh`)**: For submitting pull requests from the command line ([Download](https://cli.github.com/))

## Setting Up the Development Environment

This section guides you through setting up your development environment on Windows 11 Pro.

### Install Required Tools

You’ll need Git, Node.js (with npm), Visual Studio Code (VS Code), and the GitHub CLI (`gh`). Here’s how to install them efficiently.

#### Option 1: One-Liner Installation with winget (Recommended)
Windows 11 Pro includes `winget`, a package manager that simplifies installations. Use this single command to install everything:

1. Open PowerShell (search "PowerShell" in the Start menu).
2. Run:
   ```powershell
   winget install --id Git.Git -e --silent; winget install --id OpenJS.NodeJS.LTS -e --silent; winget install --id Microsoft.VisualStudioCode -e --silent; winget install --id GitHub.cli -e --silent
   ```
   - This installs Git, Node.js LTS, VS Code, and GitHub CLI (`gh`) silently without prompts.

#### Option 2: Manual Installation
If `winget` isn’t available or you prefer manual setup:
- **Git**: Download from [git-scm.com](https://git-scm.com/download/win) and install with default settings.
- **Node.js**: Get the LTS version from [nodejs.org](https://nodejs.org/en/download/) and install.
- **VS Code**: Download from [code.visualstudio.com](https://code.visualstudio.com/download) and install.
- **GitHub CLI (`gh`)**: Download from [cli.github.com](https://cli.github.com/) and install.

### Verify Installations
Open a new PowerShell window and check:
```powershell
git --version
node -v
npm -v
code --version
gh --version
```
Each command should return a version number (e.g., `git version 2.43.0.windows.1`, `gh version 2.20.0`). If any fail, reinstall that tool.

### Fix PowerShell Execution Policy

Windows may block npm scripts due to a restrictive execution policy. Adjust it as follows:

1. Open PowerShell as Administrator (right-click Start > Windows PowerShell (Admin)).
2. Check the current policy:
   ```powershell
   Get-ExecutionPolicy
   ```
   - If it says `Restricted`, proceed.
3. Allow local scripts:
   ```powershell
   Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
   ```
4. Type `Y` and press Enter to confirm.
5. Test npm:
   ```powershell
   npm --version
   ```
   - You should see a version number (e.g., `10.2.3`).

### Configure Git

Set your Git identity for commits:
```powershell
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```
- Replace with your actual name and email (use the same email as your GitHub account).

### Authenticate with GitHub CLI

To use `gh` for submitting pull requests, log in to your GitHub account:

1. In PowerShell, run:
   ```powershell
   gh auth login
   ```
2. Follow the prompts:
   - Select **GitHub.com**.
   - Choose your preferred authentication method (e.g., **Browser**).
   - Open the link provided in your browser, enter the code, and authorize `gh`.

## Cloning the Repository

1. **Clone the Main Repository**:
   - In PowerShell, navigate to your desired folder (e.g., `cd C:\Projects`) and run:
     ```powershell
     git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.git
     cd garciafamilymedicine.care
     ```
   - Enter your GitHub username and a [Personal Access Token](https://github.com/settings/tokens) (generate one with `repo` scope) when prompted.
   - **Note**: You need write access to the main repository to push your feature branches. If you don’t have access, contact the repository admin.

## Setting Up the Feature Branch Workflow

1. **Fetch Latest Changes**:
   ```powershell
   git fetch origin
   ```

2. **Switch to `main`**:
   ```powershell
   git checkout main
   ```

3. **Create a Feature Branch**:
   - From `main`:
     ```powershell
     git checkout main
     git checkout -b feature/development-joseph
     ```
   - Replace `joseph` with your identifier if different.

## Working on the Code

1. **Install Dependencies**:
   - In the project folder, run:
     ```powershell
     npm install
     ```
   - This downloads all Next.js and Tailwind CSS dependencies listed in `package.json`.

2. **Start the Development Server**:
   - Run:
     ```powershell
     npm run dev
     ```
   - Visit `http://localhost:3000` in your browser to see the app.

3. **Project Structure**:
   Below is the directory structure of the repository as of May 13, 2025:
   ```
   garciafamilymedicine.care/
   ├── .github/                    # GitHub Actions workflows
   ├── .next/                      # Next.js build output
   ├── app/                        # Next.js App Router pages
   │   ├── pelvichealth/           # Pelvic health page
   │   │   ├── page.jsx            # Pelvic health page component
   │   │   └── pelvichealth.css    # Page-specific styles
   │   ├── globals.css             # Global styles with Tailwind
   │   ├── layout.js               # Root layout
   │   └── page.js                 # Homepage
   ├── components/                 # Reusable React components
   │   ├── footer/                 # Footer component
   │   │   ├── footer.jsx          # Footer logic
   │   │   └── footer.module.css   # Footer-specific styles
   │   └── header/                 # Header component
   │       ├── header.jsx          # Header logic
   │       └── header.module.css   # Header-specific styles
   ├── public/                     # Static assets
   │   ├── images/                 # Image assets
   │   │   └── logo.png            # Site logo
   │   ├── partners/               # Partner logos
   │   │   ├── aafp.png            # AAFP logo
   │   │   ├── dpc-alliance.png    # DPC Alliance logo
   │   │   ├── independence-chamber.png # Independence Chamber logo
   │   │   ├── mo-academy.png      # MO Academy logo
   │   │   └── obesity-medicine.png # Obesity Medicine logo
   │   ├── favicon.ico             # Site favicon
   │   ├── file.svg                # SVG asset
   │   ├── gigisafehouse.png       # Placeholder image
   │   ├── globe.svg               # SVG asset
   │   ├── next.svg                # Next.js logo
   │   ├── placeholder-logo.svg    # Placeholder logo
   │   ├── vercel.svg              # Vercel logo
   │   └── window.svg              # SVG asset
   ├── .gitattributes              # Git attributes
   ├── .gitignore                  # Git ignore rules
   ├── eslint.config.mjs           # ESLint configuration
   ├── jsconfig.json               # JavaScript configuration
   ├── next.config.mjs             # Next.js configuration
   ├── package-lock.json           # npm lockfile
   ├── package.json                # Project dependencies
   ├── postcss.config.mjs          # PostCSS configuration
   ├── README.md                   # Project documentation
   └── tailwind.config.js          # Tailwind CSS configuration
   ```

4. **Edit and Test**:
   - Modify files (e.g., `/app/page.js`, `/components/header/header.jsx`) in VS Code.
   - Test locally with `npm run dev`.

## Submitting a Pull Request

1. **Commit Changes**:
   - Stage:
     ```powershell
     git add .
     ```
   - Commit:
     ```powershell
     git commit -m "Update homepage content"
     ```

2. **Push to the Main Repository**:
   ```powershell
   git push origin feature/development-joseph
   ```

3. **Create a Pull Request**:
   - **Option 1: Using GitHub CLI** (Recommended):
     ```powershell
     gh pr create --base main --head feature/development-joseph --title "Update homepage content" --body "Description of the changes"
     ```
   - **Option 2: Using GitHub Web Interface**:
     - Go to [github.com/GarciaFamilyMedicine/garciafamilymedicine.care](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care).
     - Click **Pull requests** > **New pull request**.
     - Select your feature branch (e.g., `feature/development-joseph`) as the source and `main` as the target.
     - Add a title and description, then submit.

## Keeping Your Feature Branch Updated

To avoid merge conflicts, regularly pull changes from `main` into your feature branch:
```powershell
git pull origin main
```

## Tailwind CSS Setup and Notes

### Current Setup
- **Version**: Tailwind CSS v3.4.10 (stable, compatible with Next.js 15.2.1).
- **Configuration**: Defined in `tailwind.config.js`, with content paths (`./app/**/*`, `./components/**/*`) and extended theme for colors (`background`, `foreground`) and fonts (`sans`, `sumana`).
- **PostCSS**: Configured in `postcss.config.mjs` with `tailwindcss` and `autoprefixer` plugins.
- **Styles**:
  - `/app/globals.css`: Uses Tailwind directives (`@tailwind base`, `@components`, `@utilities`) with custom CSS for fonts (Sumana, Argentum Sans) and variables (`--page-bg`, `--text-color`).
  - `/app/pelvichealth/pelvichealth.css`: Page-specific styles for the pelvic health page.
  - `/components/*/module.css`: CSS Modules for `header` and `footer` components.

### Known Issues
- **Build Errors**: Builds previously failed due to a reference to `@tailwindcss/postcss`, a non-existent package. This was resolved by removing it from `package.json` and ensuring correct PostCSS setup in `postcss.config.mjs`.
- **npx Issues**: Early `npx tailwindcss init` failures were due to npm environment issues. If `npx` fails, use:
  ```powershell
  .\node_modules\.bin\tailwindcss init
  ```
- **Tailwind v4 Caution**: Avoid upgrading to Tailwind v4 (experimental) as it may break compatibility with Next.js 15.2.1.
- **CSS Modules**: The use of CSS Modules (`header.module.css`, `footer.module.css`) alongside Tailwind in `globals.css` requires careful management to avoid style conflicts.

### Recommendations
- Verify `node_modules/tailwindcss`, `postcss`, and `autoprefixer` exist after `npm install`.
- If build errors occur, clean the project:
  ```powershell
  Remove-Item -Recurse -Force node_modules
  Remove-Item -Force package-lock.json
  npm install
  ```
- Run `npm ls tailwindcss postcss autoprefixer` to check for dependency conflicts.
- Use `npm audit fix` cautiously, avoiding `--force` to prevent unwanted dependency changes.
- Prefer Tailwind classes in JSX for component styles, reserving `globals.css` and CSS Modules for global or complex styles.
- Ensure `next.config.mjs` is minimal to avoid interfering with Tailwind/PostCSS processing.

## Important Notes
- **Node.js Version**: Use Node.js 18.17.0 or later to avoid compatibility issues.
- **Next.js App Router**: The project uses the App Router (`/app` directory), not the older Pages Router.
- **Deployment**: Plan for Azure Static Web Apps deployment. Ensure `next.config.mjs` is compatible with serverless mode.
- **Styling Consistency**: Combine Tailwind classes with CSS Modules carefully, testing for conflicts in development.
- **Debugging**: If errors persist, check npm cache logs (e.g., `C:\Users\<YourUser>\AppData\Local\npm-cache\_logs`) and share with the team.
- **Assets**: The `/public` directory contains partner logos and a placeholder `gigisafehouse.png`, which should be replaced with relevant Garcia Family Medicine assets.

## License

[MIT License]  
© 2025 Garcia Family Medicine
