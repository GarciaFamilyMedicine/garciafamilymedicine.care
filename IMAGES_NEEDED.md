# Garcia Family Medicine - Images Needed List

## 🔴 CRITICAL - Missing Images (13 total)

### 1. Homepage Carousel Images (8 images)
**Location:** `/public/images/homepage/`
**Referenced in:** `app/home/page.jsx`
**Status:** ❌ MISSING

These carousel images need to be created (PNG format, already have banner-01):
- [ ] `homepage-banner-02.png` - Second carousel slide
- [ ] `homepage-banner-03.png` - Third carousel slide  
- [ ] `homepage-banner-04.png` - Fourth carousel slide
- [ ] `homepage-banner-05.png` - Fifth carousel slide
- [ ] `homepage-banner-06.png` - Sixth carousel slide
- [ ] `homepage-banner-07.png` - Seventh carousel slide
- [ ] `homepage-banner-08.png` - Eighth carousel slide
- [ ] `homepage-banner-09.png` - Ninth carousel slide

**Note:** Optimized versions in `/optimized/` folder DO exist but base PNG files are missing

### 2. Payment Provider Logos (2 images)
**Location:** `/public/images/payment/`
**Referenced in:** `app/services/payment-plans/payment-options.jsx`
**Status:** ❌ MISSING

- [ ] `carecredit-logo.png` - CareCredit logo (SVG exists, PNG needed)
- [ ] `cherry-logo.png` - Cherry payment logo (SVG exists, PNG needed)

### 3. Service Page Support Images (4 images)
**Location:** `/public/images/services/`
**Status:** ❌ MISSING

- [ ] `hero-doctor.jpg` - Doctor hero image for main services page
  - **Referenced in:** `app/services/page.jsx:143`
  
- [ ] `carebridge-tech.jpg` - Technology image for CareBridge
  - **Location:** `/public/images/services/carebridge/`
  - **Referenced in:** `app/services/carebridge/page.jsx:197`
  
- [ ] `dot-exam-process.jpg` - DOT exam process illustration
  - **Location:** `/public/images/services/clearroad-dot-exams/`
  - **Referenced in:** `app/services/clearroad-dot-exams/page.jsx:150`
  
- [ ] `valorlink-sample.jpg` - Sample letter image
  - **Location:** `/public/images/services/valorlink-letter/`
  - **Referenced in:** `app/services/valorlink-letter/page.jsx:191`

### 4. General Site Images (3 images)
**Status:** ❌ MISSING

- [ ] `doctor-consultation.jpg` - Doctor consultation image
  - **Location:** `/public/images/`
  - **Referenced in:** `app/services/page.jsx:317`
  
- [ ] `pattern.png` - Background pattern
  - **Location:** `/public/images/`
  - **Referenced in:** Multiple CSS files
  
- [ ] `rsvp-booking-horizontal.png` - Horizontal RSVP booking image
  - **Location:** `/public/images/`
  - **Referenced in:** `app/services/valorview-ime/page.tsx:434`

### 5. Blog Images (3 images)
**Location:** `/public/images/blog/`
**Status:** ❌ MISSING (from previous requirements)

- [ ] `welcome-post.jpg` - Welcome blog post image
- [ ] `winter-wellness.jpg` - Winter wellness blog image
- [ ] `telehealth-services.jpg` - Telehealth services blog image

## ✅ Existing Images (Properly Organized)

### Service Hero Images (All Present)
All service pages have their hero images in correct folders:
- ✅ `/images/services/carebridge/hero.jpg`
- ✅ `/images/services/cash-pay/hero.jpg`
- ✅ `/images/services/clearroad-dot-exams/hero.jpg`
- ✅ `/images/services/corelift/hero.jpg`
- ✅ `/images/services/faith-family-medicine/hero.jpg`
- ✅ `/images/services/medicare/hero.jpg`
- ✅ `/images/services/myclinic365/hero.jpg`
- ✅ `/images/services/nourish-thrive-journey/hero.jpg`
- ✅ `/images/services/peacewithin-life-coaching/hero.jpg`
- ✅ `/images/services/telehealth/hero.jpg`
- ✅ `/images/services/truerelief-therapy/hero.jpg`
- ✅ `/images/services/valorlink-letter/hero.jpg`
- ✅ `/images/services/valorview-ime/hero.jpg`

### Other Existing Images
- ✅ `/images/logo.png`
- ✅ `/images/meetthedoctor/doctor-tess-garcia-blue-springs.jpg`
- ✅ `/images/payment/carecredit-card.png`
- ✅ `/images/rsvp-booking.png`
- ✅ `/images/corelift-brunch.png`
- ✅ `/images/homepage/homepage-banner-01.png`

## 📁 Proper Folder Structure

```
public/
└── images/
    ├── homepage/           # Homepage carousel images
    │   └── optimized/     # WebP/JPEG versions
    ├── services/          # Service-specific images
    │   ├── carebridge/
    │   ├── cash-pay/
    │   ├── clearroad-dot-exams/
    │   ├── corelift/
    │   ├── faith-family-medicine/
    │   ├── medicare/
    │   ├── myclinic365/
    │   ├── nourish-thrive-journey/
    │   ├── peacewithin-life-coaching/
    │   ├── telehealth/
    │   ├── truerelief-therapy/
    │   ├── valorlink-letter/
    │   └── valorview-ime/
    ├── payment/           # Payment provider images
    ├── events/            # Event-specific images
    ├── footer/            # Footer partner logos
    ├── meetthedoctor/     # Doctor bio images
    ├── blog/              # Blog post images
    └── [root level]       # General site images

```

## 🎯 Priority Order

1. **Homepage carousel images** (8) - Critical for homepage functionality
2. **Payment logos** (2) - Needed for payment options page
3. **Pattern.png** (1) - Used across multiple pages as background
4. **Blog images** (3) - Fix 404 errors on blog pages
5. **Service support images** (4) - Enhance service page content
6. **RSVP horizontal variant** (1) - Alternative layout option

## 📝 Image Specifications

### Homepage Carousel
- **Format:** PNG
- **Recommended Size:** 1920x600px (desktop), 768x800px (mobile)
- **Note:** Optimized versions should be generated in WebP and JPEG formats

### Service Images
- **Format:** JPEG
- **Recommended Size:** 800x600px minimum
- **Compression:** Optimize for web (under 200KB if possible)

### Logos
- **Format:** PNG with transparent background
- **Size:** 200x100px minimum

### Pattern
- **Format:** PNG
- **Type:** Seamless repeating pattern
- **Size:** 200x200px minimum

### Blog Images
- **Format:** JPEG
- **Size:** 1200x630px (optimal for social sharing)
- **Style:** Abstract healthcare visualizations

## 🚀 Next Steps

1. Source or create the 16 missing images
2. Ensure all images are optimized for web
3. Place images in their proper folders according to the structure above
4. Test all pages to verify images load correctly
5. Consider creating WebP versions for better performance

## 📊 Summary

- **Total Images Needed**: 16
- **Total Images Existing**: 22
- **Critical Missing**: Homepage carousel (8), Payment logos (2), Pattern (1)
- **Enhancement Missing**: Blog (3), Service support (4), RSVP variant (1)

Last Updated: January 2025