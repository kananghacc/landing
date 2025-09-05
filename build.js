#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building Kanan.co Monorepo...\n');

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
      if (!fs.existsSync('dist')) {
        fs.mkdirSync('dist');
      }
      
      // Copy files to the correct location
      execSync(`cp -r ${sourceDir}/* ${targetDir}/`, { stdio: 'inherit' });
      console.log(`✅ ${app.toUpperCase()} app built successfully\n`);
    }
  } catch (error) {
    console.error(`❌ Failed to build ${app.toUpperCase()} app:`, error.message);
    process.exit(1);
  }
});

// Build the main app
console.log('📦 Building main app...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Main app built successfully\n');
} catch (error) {
  console.error('❌ Failed to build main app:', error.message);
  process.exit(1);
}

console.log('🎉 All apps built successfully!');
console.log('📁 Output directory: ./dist');
console.log('🌐 Ready for deployment to join.kanan.co');
