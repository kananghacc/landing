#!/bin/bash
echo "🚀 Static HTML Deployment for IELTS Chennai, Vadodara & Dubai"
echo "📁 Preparing dist directories..."

# Create dist directories if they don't exist
mkdir -p dist/ielts-chennai
mkdir -p dist/ielts-vadodara
mkdir -p dist/dubai

# Copy our static HTML to all directories
echo "📄 Copying static HTML to dist/ielts-chennai/index.html"
cp ielts-chennai/index.html dist/ielts-chennai/index.html

echo "📄 Copying static HTML to dist/ielts-vadodara/index.html"
cp ielts-vadodara/index.html dist/ielts-vadodara/index.html

echo "📄 Copying static HTML to dist/dubai/index.html"
cp dubai/index.html dist/dubai/index.html

# Copy all necessary assets to Chennai directory
echo "🖼️ Copying assets to Chennai directory..."
cp -r testimonial-images dist/ielts-chennai/ 2>/dev/null || true
cp -r ielts-chennai/trainer-images dist/ielts-chennai/ 2>/dev/null || true
cp kanan-ielts-3.png dist/ielts-chennai/ 2>/dev/null || true
cp kanan-ielts-3-optimized.webp dist/ielts-chennai/ 2>/dev/null || true
cp kanan-logo.svg dist/ielts-chennai/ 2>/dev/null || true
cp faviconV2.png dist/ielts-chennai/ 2>/dev/null || true
cp manifest.json dist/ielts-chennai/ 2>/dev/null || true
cp robots.txt dist/ielts-chennai/ 2>/dev/null || true
cp sitemap.xml dist/ielts-chennai/ 2>/dev/null || true

# Copy all necessary assets to Vadodara directory
echo "🖼️ Copying assets to Vadodara directory..."
cp -r testimonial-images dist/ielts-vadodara/ 2>/dev/null || true
cp -r ielts-vadodara/trainer-images dist/ielts-vadodara/ 2>/dev/null || true
cp kanan-ielts-3.png dist/ielts-vadodara/ 2>/dev/null || true
cp kanan-ielts-3-optimized.webp dist/ielts-vadodara/ 2>/dev/null || true
cp kanan-logo.svg dist/ielts-vadodara/ 2>/dev/null || true
cp faviconV2.png dist/ielts-vadodara/ 2>/dev/null || true
cp manifest.json dist/ielts-vadodara/ 2>/dev/null || true
cp robots.txt dist/ielts-vadodara/ 2>/dev/null || true
cp sitemap.xml dist/ielts-vadodara/ 2>/dev/null || true

# Copy all necessary assets to Dubai directory
echo "🖼️ Copying assets to Dubai directory..."
cp -r dubai/assets dist/dubai/ 2>/dev/null || true
cp -r dubai/images dist/dubai/ 2>/dev/null || true
cp dubai/kanan-logo.svg dist/dubai/ 2>/dev/null || true
cp dubai/favicon.ico dist/dubai/ 2>/dev/null || true
cp dubai/manifest.json dist/dubai/ 2>/dev/null || true
cp dubai/robots.txt dist/dubai/ 2>/dev/null || true
cp dubai/sitemap.xml dist/dubai/ 2>/dev/null || true

echo "✅ Static HTML deployment ready!"
echo "🌐 Chennai: join.kanan.co/ielts-chennai"
echo "🌐 Vadodara: join.kanan.co/ielts-vadodara"
echo "🌐 Dubai: join.kanan.co/dubai"
echo "📂 Files deployed to dist/ielts-chennai/, dist/ielts-vadodara/, and dist/dubai/"
ls -la dist/ielts-chennai/ | head -5
echo "..."
ls -la dist/ielts-vadodara/ | head -5
echo "..."
ls -la dist/dubai/ | head -5
exit 0
