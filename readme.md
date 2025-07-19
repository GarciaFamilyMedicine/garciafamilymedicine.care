# Garcia Family Medicine Website

[![Azure Static Web Apps CI/CD](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/workflows/Azure%20Static%20Web%20Apps%20CI/CD/badge.svg)](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.10-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

Modern, accessible healthcare website for Garcia Family Medicine - a Direct Primary Care practice serving Blue Springs, MO and the Kansas City metro area.

## 🏥 About

Garcia Family Medicine provides personalized, faith-driven healthcare with a focus on accessibility and patient-centered care. This website serves as the digital front door to our practice, offering patients easy access to information, services, and care options.

### ✨ Key Features

- 📱 **Responsive Design** - Mobile-first approach with optimized touch targets
- ♿ **WCAG 2.1 AA Compliant** - Full accessibility for all users
- 🔒 **HIPAA-Ready Infrastructure** - Secure email collection with Microsoft 365 integration
- 📅 **Interactive Calendar** - Dynamic event management system
- 📰 **Blog/News System** - Content management with category filtering
- 🚀 **Lightning Performance** - Static generation with Next.js 15
- 🌐 **SEO Optimized** - Structured data and meta tags

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 15.3.3](https://nextjs.org/) | React framework with App Router |
| [Tailwind CSS 3.4.10](https://tailwindcss.com/) | Utility-first styling |
| [CSS Modules](https://github.com/css-modules/css-modules) | Component-scoped styles |
| [React 19](https://react.dev/) | UI library |
| [Azure Static Web Apps](https://azure.microsoft.com/en-us/services/app-service/static/) | Hosting platform |
| [Microsoft 365](https://www.microsoft.com/en-us/microsoft-365) | Email integration |

## 📊 Developer Stats

### GitHub Activity
![GitHub Stats](https://github-readme-stats.vercel.app/api?username=donniedice&show_icons=true&theme=dark&hide_border=true)

### Languages Used
![Top Languages](https://github-readme-stats.vercel.app/api/top-langs/?username=donniedice&layout=compact&theme=dark&hide_border=true)

### Contribution Graph
![GitHub Streak](https://github-readme-streak-stats.herokuapp.com/?user=donniedice&theme=dark&hide_border=true)

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17.0 or higher
- npm 9.x or higher
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.git
cd garciafamilymedicine.care

# Install dependencies
npm install

# Copy environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## 📦 Project Structure

```
garciafamilymedicine.care/
├── app/                        # Next.js App Router
│   ├── care/                  # Medical service pages
│   ├── events/                # Event pages
│   ├── news/                  # Blog system
│   │   ├── [slug]/           # Dynamic blog posts
│   │   └── page.jsx          # Blog listing
│   └── services/             # Service pages
├── components/                # React components
│   ├── EmailSubscription/    # Newsletter signup
│   ├── blog/                 # Blog utilities
│   ├── calendar/             # Event calendar
│   ├── header/               # Navigation
│   └── footer/               # Footer with CTAs
├── public/                   # Static assets
├── styles/                   # Global styles
├── wiki/                     # Documentation
└── .github/                  # CI/CD workflows
```

## 📝 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Build production-ready static files |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code quality |

## 📚 Documentation

Comprehensive documentation is available in the [wiki](wiki/) directory:

- [Architecture Overview](wiki/Architecture-Overview.md) - System design and patterns
- [Development Guide](wiki/Development-Guide.md) - Setup and best practices
- [Email Integration](wiki/Email-Integration.md) - Microsoft 365 setup
- [HIPAA Compliance](wiki/HIPAA-Compliance.md) - Security considerations
- [GitHub Secrets Setup](wiki/GitHub-Secrets-Setup.md) - Environment configuration
- [Changelog](CHANGELOG.md) - Version history

## 📰 Blog System

The integrated blog system supports:

- Dynamic routing with static generation
- Category filtering (Health Tips, Practice News, Service Updates)
- Featured posts and recent posts widgets
- SEO-friendly URLs and meta tags
- Newsletter integration

### Managing Blog Content

Blog posts are managed in `components/blog/blog-data.js`:

```javascript
{
  id: 4,
  slug: 'your-post-slug',
  title: 'Post Title',
  excerpt: 'Brief description',
  content: '<p>Full HTML content...</p>',
  author: 'Dr. Tess Garcia',
  publishedDate: '2025-01-19',
  category: 'Health Tips',
  tags: ['wellness', 'prevention'],
  featured: false,
  image: '/images/blog/image.jpg'
}
```

## 🔐 Environment Variables

Required for production deployment:

```env
NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL=     # Power Automate webhook
NEXT_PUBLIC_NEWSLETTER_ENABLED=true     # Enable newsletter
NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE= # Success message
NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE=   # Error message
```

See [GitHub Secrets Setup](wiki/GitHub-Secrets-Setup.md) for configuration details.

## 🚀 Deployment

### Automatic Deployment

The site automatically deploys via GitHub Actions when changes are pushed to `main`.

### Manual Build

```bash
# Build static files
npm run build

# Files are output to 'out' directory
# Deploy this directory to any static hosting service
```

## 🤝 Contributing

### Workflow

1. Create feature branch: `feature/your-feature-name`
2. Make changes following our [coding standards](docs/development/coding-standards.md)
3. Test thoroughly on mobile and desktop
4. Submit pull request to `main`

### Code Style

- Use lowercase filenames (e.g., `emailsubscription.jsx`)
- Follow existing patterns and conventions
- Run `npm run lint` before committing
- Write meaningful commit messages

### Commit Format

```
feat: Add new feature
fix: Fix bug
docs: Update documentation
style: Format code
refactor: Refactor code
test: Add tests
chore: Update dependencies
```

## 📱 Mobile Optimization

- ✅ 44px minimum touch targets
- ✅ 14px minimum font size
- ✅ Responsive breakpoints for all devices
- ✅ Performance optimized for 3G networks
- ✅ Progressive enhancement approach

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Screen reader** optimized
- **Keyboard navigation** throughout
- **High contrast** mode support
- **Focus indicators** on all interactive elements

## 🔒 Security

- HIPAA-compliant infrastructure ready
- Secure email collection via Microsoft 365
- No sensitive data in repository
- Environment variables for secrets
- Regular security updates

## 📄 License

© 2025 Garcia Family Medicine. All rights reserved.

This is proprietary software. Unauthorized copying, modification, or distribution is prohibited.

## 👥 Team

**Lead Developer**: Donnie Dice ([@donniedice](https://github.com/donniedice))  
**Medical Director**: Dr. Tess Garcia  
**Practice**: Garcia Family Medicine

## 📞 Contact

**Website**: [garciafamilymedicine.care](https://garciafamilymedicine.care)  
**Phone**: (816) 427-5320  
**Text**: (816) 708-2719  
**Location**: Blue Springs, Missouri

---

<p align="center">
  Built with ❤️ for better healthcare accessibility
</p>