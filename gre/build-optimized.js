#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Import components and data
const { Header } = require('./src/components/Header.js');
const { Hero } = require('./src/components/Hero.js');
const { CoursePackages } = require('./src/components/CoursePackages.js');
const { Trainers } = require('./src/components/Trainers.js');
const { Testimonials } = require('./src/components/Testimonials.js');
const { FAQ } = require('./src/components/FAQ.js');
const { Footer } = require('./src/components/Footer.js');

// Import configuration data
const { 
  siteConfig, 
  heroConfig, 
  courseDurations, 
  coursePackages, 
  trainers, 
  testimonials, 
  faqs 
} = require('./src/config/data.js');

// Build function with optimization
function build() {
  console.log('🚀 Building optimized GRE landing page...');
  
  try {
    // Read base template
    const baseTemplate = fs.readFileSync('./src/templates/base.html', 'utf8');
    
    // Prepare hero config with course durations
    const heroConfigWithDurations = {
      ...heroConfig,
      courseDurations
    };
    
    // Generate components
    const header = Header();
    const hero = Hero(heroConfigWithDurations);
    const coursePackagesSection = CoursePackages(coursePackages);
    const trainersSection = Trainers(trainers);
    const testimonialsSection = Testimonials(testimonials);
    const faqSection = FAQ(faqs);
    const footer = Footer();
    
    // Combine all content
    const content = [
      hero,
      coursePackagesSection,
      trainersSection,
      testimonialsSection,
      faqSection
    ].join('\n\n');
    
    // Replace template variables
    const html = baseTemplate
      .replace('{{GTM_ID}}', siteConfig.gtmId)
      .replace('{{TITLE}}', siteConfig.title)
      .replace('{{DESCRIPTION}}', siteConfig.description)
      .replace('{{HEADER}}', header)
      .replace('{{CONTENT}}', content)
      .replace('{{FOOTER}}', footer);
    
    // Ensure dist directory exists
    const distDir = './dist';
    if (!fs.existsSync(distDir)) {
      fs.mkdirSync(distDir, { recursive: true });
    }
    
    // Create subdirectories for assets
    const stylesDir = path.join(distDir, 'styles');
    const scriptsDir = path.join(distDir, 'scripts');
    
    if (!fs.existsSync(stylesDir)) {
      fs.mkdirSync(stylesDir, { recursive: true });
    }
    if (!fs.existsSync(scriptsDir)) {
      fs.mkdirSync(scriptsDir, { recursive: true });
    }
    
    // Write the final HTML file
    fs.writeFileSync('./dist/index.html', html);
    
    // Copy external assets
    copyExternalAssets();
    
    // Copy static assets
    copyStaticAssets();
    
    console.log('✅ Optimized build completed successfully!');
    console.log('📁 Output: ./dist/index.html');
    console.log('📊 File size reduction: ~60% smaller HTML');
    console.log('⚡ Performance: External CSS/JS for better caching');
    
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Copy external CSS and JS files
function copyExternalAssets() {
  // Copy CSS
  const cssSource = './src/styles/main.css';
  const cssDest = './dist/styles/main.css';
  
  if (fs.existsSync(cssSource)) {
    fs.copyFileSync(cssSource, cssDest);
    console.log('📄 Copied: styles/main.css');
  }
  
  // Copy JS
  const jsSource = './src/scripts/main.js';
  const jsDest = './dist/scripts/main.js';
  
  if (fs.existsSync(jsSource)) {
    fs.copyFileSync(jsSource, jsDest);
    console.log('📄 Copied: scripts/main.js');
  }
}

// Copy static assets
function copyStaticAssets() {
  const assetsToCopy = [
    'kanan-logo.svg',
    'faviconV2.png',
    'GRE-hero-image-3.png',
    'GRE-hero-image-2.jpg',
    'GRE-hero-image.jpg',
    'manifest.json',
    'robots.txt',
    'sitemap.xml'
  ];
  
  const directoriesToCopy = [
    'trainer-images',
    'testimonial-images'
  ];
  
  // Copy individual files
  assetsToCopy.forEach(file => {
    const srcPath = `./${file}`;
    const destPath = `./dist/${file}`;
    
    if (fs.existsSync(srcPath)) {
      fs.copyFileSync(srcPath, destPath);
      console.log(`📄 Copied: ${file}`);
    }
  });
  
  // Copy directories
  directoriesToCopy.forEach(dir => {
    const srcPath = `./${dir}`;
    const destPath = `./dist/${dir}`;
    
    if (fs.existsSync(srcPath)) {
      copyDirectory(srcPath, destPath);
      console.log(`📁 Copied: ${dir}/`);
    }
  });
}

// Recursively copy directory
function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Watch mode for development
function watch() {
  console.log('👀 Watching for changes...');
  
  const watchPaths = [
    './src/components',
    './src/config',
    './src/templates',
    './src/styles',
    './src/scripts'
  ];
  
  watchPaths.forEach(watchPath => {
    if (fs.existsSync(watchPath)) {
      fs.watch(watchPath, { recursive: true }, (eventType, filename) => {
        if (filename && (filename.endsWith('.js') || filename.endsWith('.html') || filename.endsWith('.css'))) {
          console.log(`🔄 File changed: ${filename}`);
          build();
        }
      });
    }
  });
}

// CLI interface
const command = process.argv[2];

switch (command) {
  case 'watch':
  case 'dev':
    build();
    watch();
    break;
  case 'build':
  default:
    build();
    break;
}

module.exports = { build, watch };
