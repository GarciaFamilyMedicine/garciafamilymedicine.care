const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const CAROUSEL_IMAGES_DIR = path.join(__dirname, '../public/images/homepage');
const OUTPUT_DIR = path.join(__dirname, '../public/images/homepage/optimized');
const DESKTOP_WIDTH = 1920;
const MOBILE_WIDTH = 768;
const QUALITY = 85;

async function ensureDir(dirPath) {
  try {
    await fs.mkdir(dirPath, { recursive: true });
  } catch (error) {
    console.error('Error creating directory:', error);
  }
}

async function optimizeImage(inputPath, filename) {
  const basename = path.basename(filename, path.extname(filename));
  
  try {
    // Create desktop version (WebP)
    await sharp(inputPath)
      .resize(DESKTOP_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY })
      .toFile(path.join(OUTPUT_DIR, `${basename}-desktop.webp`));
    
    // Create desktop version (JPEG fallback)
    await sharp(inputPath)
      .resize(DESKTOP_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(path.join(OUTPUT_DIR, `${basename}-desktop.jpg`));
    
    // Create mobile version (WebP)
    await sharp(inputPath)
      .resize(MOBILE_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY - 5 })
      .toFile(path.join(OUTPUT_DIR, `${basename}-mobile.webp`));
    
    // Create mobile version (JPEG fallback)
    await sharp(inputPath)
      .resize(MOBILE_WIDTH, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: QUALITY - 5, progressive: true })
      .toFile(path.join(OUTPUT_DIR, `${basename}-mobile.jpg`));
    
    // Get file sizes
    const originalStats = await fs.stat(inputPath);
    const desktopWebpStats = await fs.stat(path.join(OUTPUT_DIR, `${basename}-desktop.webp`));
    const desktopJpgStats = await fs.stat(path.join(OUTPUT_DIR, `${basename}-desktop.jpg`));
    
    const savings = Math.round((1 - desktopWebpStats.size / originalStats.size) * 100);
    
    console.log(`✅ ${filename}:`);
    console.log(`   Original: ${(originalStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Desktop WebP: ${(desktopWebpStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Desktop JPEG: ${(desktopJpgStats.size / 1024 / 1024).toFixed(2)} MB`);
    console.log(`   Savings: ${savings}%`);
    
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error);
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');
  
  // Ensure output directory exists
  await ensureDir(OUTPUT_DIR);
  
  // Get all PNG files
  const files = await fs.readdir(CAROUSEL_IMAGES_DIR);
  const pngFiles = files.filter(file => file.endsWith('.png') && file.includes('homepage-banner'));
  
  console.log(`Found ${pngFiles.length} carousel images to optimize\n`);
  
  // Process each image
  for (const file of pngFiles) {
    const inputPath = path.join(CAROUSEL_IMAGES_DIR, file);
    await optimizeImage(inputPath, file);
  }
  
  console.log('\n✨ Image optimization complete!');
  console.log('\nNext steps:');
  console.log('1. Update the carousel component to use optimized images');
  console.log('2. Implement <picture> element for responsive images');
  console.log('3. Add lazy loading for better performance');
}

// Run the script
main().catch(console.error);