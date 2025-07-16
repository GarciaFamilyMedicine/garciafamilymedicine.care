# Getting Started

Welcome to Garcia Family Medicine website development! This guide will get you up and running quickly with the development environment.

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.git

# Navigate to project directory
cd garciafamilymedicine.care

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see the website.

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js**: Version 18.17.0 or later ([Download](https://nodejs.org/))
- **Git**: For version control ([Download](https://git-scm.com/))
- **Visual Studio Code**: Recommended editor ([Download](https://code.visualstudio.com/))
- **GitHub CLI (`gh`)**: For pull requests ([Download](https://cli.github.com/))

### Quick Installation (Windows 11)

Using `winget` package manager:

```powershell
winget install --id Git.Git -e --silent; winget install --id OpenJS.NodeJS.LTS -e --silent; winget install --id Microsoft.VisualStudioCode -e --silent; winget install --id GitHub.cli -e --silent
```

### Verify Installation

Check that everything is installed correctly:

```powershell
git --version
node -v
npm -v
code --version
gh --version
```

Each command should return a version number.

## ⚙️ Environment Setup

### Fix PowerShell Execution Policy (Windows)

If npm scripts are blocked:

1. Open PowerShell as Administrator
2. Check current policy: `Get-ExecutionPolicy`
3. If `Restricted`, run: `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`
4. Type `Y` to confirm

### Configure Git

Set your Git identity:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Authenticate GitHub CLI

```bash
gh auth login
```

Follow the prompts to authenticate with your GitHub account.

## 🌿 Branch Workflow

We use a feature branch workflow:

### 1. Clone and Setup

```bash
# Clone main repository
git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.git
cd garciafamilymedicine.care

# Install dependencies
npm install
```

### 2. Create Feature Branch

```bash
# Fetch latest changes
git fetch origin

# Switch to main
git checkout main

# Create feature branch
git checkout -b feature/development-yourname
```

**Branch naming**: Use `feature/development-<yourname>` format (e.g., `feature/development-joseph`)

### 3. Development Cycle

```bash
# Start development server
npm run dev

# Make your changes...

# Test your changes
npm run build
npm run lint

# Commit changes
git add .
git commit -m "Descriptive commit message"

# Push to repository
git push origin feature/development-yourname
```

### 4. Create Pull Request

**Option 1: GitHub CLI (Recommended)**
```bash
gh pr create --base main --head feature/development-yourname --title "Your PR Title" --body "Description of changes"
```

**Option 2: GitHub Web Interface**
1. Go to the repository on GitHub
2. Click **Pull requests** > **New pull request**
3. Select your feature branch → main
4. Add title and description

## 📁 Project Structure

```
garciafamilymedicine.care/
├── app/                        # Next.js App Router pages
│   ├── globals.css            # Global styles with Tailwind
│   ├── layout.js              # Root layout with fonts
│   ├── page.jsx               # Homepage
│   ├── care/                  # Medical service pages
│   │   ├── pelvichealth/      # Pelvic health program
│   │   ├── veterans/          # Veterans healthcare
│   │   ├── medicare/          # Medicare services
│   │   └── ...                # Other specialized care
│   ├── contact/               # Contact page
│   ├── events/                # Event pages
│   ├── meetthedoctor/         # Doctor biography
│   └── services/              # General services
├── components/                 # Reusable React components
│   ├── header/                # Navigation header
│   ├── footer/                # Site footer
│   └── calendar/              # Event calendar
├── public/                     # Static assets
│   └── images/                # Image assets by section
├── wiki/                       # Documentation (this wiki)
├── CLAUDE.md                   # Claude Code instructions
├── CHANGELOG.md                # Project changelog
└── README.md                   # Project overview
```

## 🛠️ Development Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🌐 Local Development

### Development Server
- **URL**: http://localhost:3000
- **Hot Reload**: Automatically refreshes on file changes
- **Error Overlay**: Shows compilation errors in browser

### File Watching
The development server watches these directories:
- `/app` - Pages and layouts
- `/components` - React components  
- `/public` - Static assets
- CSS and JavaScript files

### Environment Variables
Create `.env.local` for local environment variables:
```bash
# Example environment variables
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 🔍 Next Steps

After getting started:

1. **Read the [Development Guide](Development-Guide)** - Detailed workflow and best practices
2. **Review [Architecture Overview](Architecture-Overview)** - Understand the system design
3. **Check [Component Documentation](Component-Documentation)** - Learn about available components
4. **Follow [Code Standards](Code-Standards)** - Maintain code quality

## ❓ Common Issues

### Build Errors
If you encounter build errors:
```bash
# Clean and reinstall
rm -rf node_modules
rm package-lock.json
npm install
```

### Port Already in Use
If port 3000 is busy:
```bash
# Kill processes on port 3000
npx kill-port 3000

# Or start on different port
npm run dev -- -p 3001
```

### Authentication Issues
If GitHub CLI authentication fails:
```bash
# Re-authenticate
gh auth logout
gh auth login
```

## 🆘 Need Help?

- **Troubleshooting**: See [Troubleshooting Guide](Troubleshooting)
- **Component Issues**: Check [Component Documentation](Component-Documentation)  
- **Build Problems**: Review [Deployment Guide](Deployment-Guide)
- **Code Questions**: Follow [Code Standards](Code-Standards)

---

**Ready to start developing?** Follow the [Development Guide](Development-Guide) for detailed workflow instructions.