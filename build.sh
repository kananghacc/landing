#!/bin/bash
echo "🚀 Static HTML Deployment for IELTS Chennai & Vadodara"
echo "📁 Preparing dist directories..."

# Create dist directories if they don't exist
mkdir -p dist/ielts-chennai
mkdir -p dist/ielts-vadodara

# Copy our static HTML to both directories
echo "📄 Copying static HTML to dist/ielts-chennai/index.html"
cp ielts-chennai/index.html dist/ielts-chennai/index.html

echo "📄 Copying static HTML to dist/ielts-vadodara/index.html"
cp ielts-vadodara/index.html dist/ielts-vadodara/index.html

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

echo "✅ Static HTML deployment ready!"
echo "🌐 Chennai: join.kanan.co/ielts-chennai"
echo "🌐 Vadodara: join.kanan.co/ielts-vadodara"
echo "📂 Files deployed to dist/ielts-chennai/ and dist/ielts-vadodara/"
ls -la dist/ielts-chennai/ | head -5
echo "..."
ls -la dist/ielts-vadodara/ | head -5
exit 0
