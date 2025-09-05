#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building Kanan.co Monorepo...\n');

// Clean and create dist directory
console.log('🧹 Cleaning dist directory...');
if (fs.existsSync('dist')) {
  execSync('rm -rf dist', { stdio: 'inherit' });
}
fs.mkdirSync('dist');

// Build each app
const apps = ['ielts', 'gre', 'gmat'];

apps.forEach(app => {
  console.log(`📦 Building ${app.toUpperCase()} app...`);
  
  try {
    // Build the app
    execSync(`npm run build --workspace=apps/${app}`, { 
      stdio: 'inherit',
      cwd: process.cwd()
    });
    
    // Move the built files to the correct location in dist
    const sourceDir = path.join('apps', app, 'dist');
    const targetDir = path.join('dist', app);
    
    if (fs.existsSync(sourceDir)) {
      // Create target directory if it doesn't exist
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      
      // Copy files to the correct location
      execSync(`cp -r ${sourceDir}/* ${targetDir}/`, { stdio: 'inherit' });
      console.log(`✅ ${app.toUpperCase()} app built successfully\n`);
    } else {
      console.error(`❌ Build output directory not found for ${app}: ${sourceDir}`);
      process.exit(1);
    }
  } catch (error) {
    console.error(`❌ Failed to build ${app.toUpperCase()} app:`, error.message);
    process.exit(1);
  }
});

// Verify dist directory structure
console.log('🔍 Verifying build output...');
if (!fs.existsSync('dist')) {
  console.error('❌ Dist directory was not created!');
  process.exit(1);
}

const distContents = fs.readdirSync('dist');
console.log('📁 Dist directory contents:', distContents);

// Check if all apps are present
const expectedApps = ['ielts', 'gre', 'gmat'];
const missingApps = expectedApps.filter(app => !distContents.includes(app));

if (missingApps.length > 0) {
  console.error(`❌ Missing app directories in dist: ${missingApps.join(', ')}`);
  process.exit(1);
}

console.log('🎉 All apps built successfully!');
console.log('📁 Output directory: ./dist');
console.log('🌐 Ready for deployment to join.kanan.co');
