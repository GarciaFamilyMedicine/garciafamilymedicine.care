# Garcia Family Medicine - Project TODO List

## 🚀 Next Development Tasks

### 🔴 High Priority - SEO & Discovery
- [ ] **Install Next SEO** - Add proper meta tags for all pages
  - Install: `npm install next-seo`
  - Add SEO component to each page
  - Include Open Graph images
- [ ] **Setup Next Sitemap** - Auto-generate sitemap.xml
  - Install: `npm install next-sitemap`
  - Configure for static export
  - Add robots.txt
- [ ] **Create Missing Critical Images**
  - [ ] `/images/services/hero-doctor.jpg` - Main services page hero
  - [ ] `/images/doctor-consultation.jpg` - Services consultation image

### 🟡 Medium Priority - User Experience
- [ ] **Add Loading Progress Bar**
  - Install: `npm install nextjs-progressbar`
  - Add to root layout
  - Configure brand colors
- [ ] **Implement Service Search with Fuse.js**
  - Install: `npm install fuse.js`
  - Add search to header
  - Index all 15+ services
  - Include doctor search
- [ ] **Create Background Pattern**
  - [ ] `/images/pattern.png` - Used in multiple CSS files

### 🟢 Low Priority - Enhancements
- [ ] **Add React Error Boundary**
  - Install: `npm install react-error-boundary`
  - Wrap entire application
  - Custom error page
- [ ] **Create Service Enhancement Images**
  - [ ] `/images/services/carebridge/carebridge-tech.jpg`
  - [ ] `/images/services/clearroad-dot-exams/dot-exam-process.jpg`
  - [ ] `/images/services/valorlink-letter/valorlink-sample.jpg`
- [ ] **Blog Images (if blog is active)**
  - [ ] Create `/public/images/blog/` folder
  - [ ] `welcome-post.jpg`
  - [ ] `winter-wellness.jpg`
  - [ ] `telehealth-services.jpg`
- [ ] **RSVP Variant**
  - [ ] `/images/rsvp-booking-horizontal.png`

## ✅ Recently Completed (January 2025)

### Today's Accomplishments
- ✅ Redesigned services page with modern layout
- ✅ Removed tabs from telehealth page
- ✅ Updated cash pay page (removed pricing)
- ✅ Reorganized all images to proper folders
- ✅ Updated all payment image references
- ✅ Created comprehensive IMAGES_NEEDED.md
- ✅ Fixed all image path references

### Image Organization Complete
- ✅ All 9 homepage carousel images present
- ✅ All 13 service hero images in place
- ✅ Payment images moved to `/services/payment/`
- ✅ Service support images properly organized

## 🔧 Technical Debt
- [ ] Fix `/news` page useSearchParams Suspense boundary issue
- [ ] Resolve ESLint warnings about `<img>` tags in service pages
- [ ] Determine usage of `image11.jpg` in root images
- [ ] Clean up duplicate/backup files

## 📊 Project Health
- **Total Pages**: 40+
- **Services**: 15 specialized medical services
- **Images**: 40+ organized, 7-10 still needed
- **Performance**: Static export, optimized images
- **SEO**: Needs improvement (Next SEO recommended)

## 💡 Future Considerations
- [ ] Online appointment booking system
- [ ] Patient portal integration
- [ ] Newsletter functionality (backend exists)
- [ ] Blog activation (structure exists)
- [ ] Analytics integration
- [ ] Accessibility audit

## 📝 Notes
- Project uses Next.js 15.4.4 with App Router
- Static export configured for Azure Static Web Apps
- Power Automate webhooks ready for forms
- Mobile-first responsive design
- No PWA implementation (per client request)

Last Updated: January 2025