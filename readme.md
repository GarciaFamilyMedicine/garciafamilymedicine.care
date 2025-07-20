# Garcia Family Medicine Website

[![Azure Static Web Apps CI/CD](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/workflows/Azure%20Static%20Web%20Apps%20CI/CD/badge.svg)](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/actions)
[![Next.js](https://img.shields.io/badge/Next.js-15.3.3-black?logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.10-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)

Modern, accessible healthcare website for Garcia Family Medicine - a Direct Primary Care practice serving Blue Springs, MO and the Kansas City metro area.

> **Important**: Email subscriptions require proper GitHub Secrets configuration. See [Email Setup](#-email-subscription-setup) below.

## 🚀 Quick Start

```bash
# Clone repository
git clone https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care.git
cd garciafamilymedicine.care

# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Start development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 📚 Documentation

For comprehensive documentation, visit our [GitHub Wiki](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki):

- [Getting Started](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki/Getting-Started)
- [Architecture Overview](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki/Architecture-Overview)
- [Development Guide](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki/Development-Guide)
- [Email Integration](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki/Email-Integration)
- [Power Automate SharePoint Integration](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki/Power-Automate-SharePoint-Integration)
- [HIPAA Compliance](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki/HIPAA-Compliance)

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.3 with App Router
- **Styling**: Tailwind CSS + CSS Modules
- **Hosting**: Azure Static Web Apps
- **Email**: Microsoft 365 Integration
- **UI**: React 19

## 📝 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run start    # Production server
npm run lint     # Code quality check
```

## 🔐 Environment Variables

For local development, create `.env.local` with:

```env
NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL=     # Power Automate webhook
NEXT_PUBLIC_NEWSLETTER_ENABLED=true     # Enable newsletter
NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE= # Success message
NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE=   # Error message
```

## 📧 Email Subscription Setup

**CRITICAL**: For email subscriptions to work in production, you MUST configure GitHub Secrets:

1. **Go to GitHub Repository Settings**
   - Navigate to Settings → Secrets and variables → Actions
   - Click "New repository secret"

2. **Add Required Secrets**
   - `NEXT_PUBLIC_NEWSLETTER_WEBHOOK_URL`: Your Power Automate webhook URL
   - `NEXT_PUBLIC_NEWSLETTER_ENABLED`: Set to `true` (optional, defaults to true)
   - `NEXT_PUBLIC_NEWSLETTER_SUCCESS_MESSAGE`: Custom success message (optional)
   - `NEXT_PUBLIC_NEWSLETTER_ERROR_MESSAGE`: Custom error message (optional)

3. **Verify Deployment**
   - Push any commit to trigger a new deployment
   - Check the Actions tab to ensure build completes
   - Test email subscription on the live site

> **Note**: The GitHub Actions workflow is already configured to pass these secrets during build. Without these secrets, email subscriptions will fall back to localStorage storage only.

## 🤝 Contributing

1. Create feature branch: `feature/your-feature`
2. Follow [coding standards](https://github.com/GarciaFamilyMedicine/garciafamilymedicine.care/wiki/coding-standards)
3. Test on mobile and desktop
4. Submit PR to `main`

## 📄 License

© 2025 Garcia Family Medicine. All rights reserved. Proprietary software.

## 📞 Contact

**Website**: [garciafamilymedicine.care](https://garciafamilymedicine.care)  
**Phone**: (816) 427-5320  
**Location**: Blue Springs, Missouri

---

<p align="center">
  Built with ❤️ for better healthcare accessibility
</p>