#!/bin/bash
echo "🚀 Static HTML Deployment for IELTS Chennai, Vadodara, Dubai & GRE"
echo "📁 Preparing dist directories..."

# Create dist directories if they don't exist
mkdir -p dist/ielts-chennai
mkdir -p dist/ielts-vadodara
mkdir -p dist/ielts-online
mkdir -p dist/dubai
mkdir -p dist/gre
mkdir -p dist/us

# Copy our static HTML to all directories
echo "📄 Copying static HTML to dist/ielts-chennai/index.html"
cp ielts-chennai/index.html dist/ielts-chennai/index.html

echo "📄 Copying static HTML to dist/ielts-vadodara/index.html"
cp ielts-vadodara/index.html dist/ielts-vadodara/index.html

echo "📄 Copying static HTML to dist/ielts-online/index.html"
cp ielts-online/index.html dist/ielts-online/index.html

echo "📄 Copying static HTML to dist/dubai/index.html"
cp dubai/index.html dist/dubai/index.html

echo "📄 Copying static HTML to dist/gre/index.html"
cp gre/index.html dist/gre/index.html

echo "📄 Copying static HTML to dist/us/index.html"
cp us/index.html dist/us/index.html

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

# Copy all necessary assets to Online directory
echo "🖼️ Copying assets to Online directory..."
cp -r testimonial-images dist/ielts-online/ 2>/dev/null || true
cp -r ielts-online/trainer-images dist/ielts-online/ 2>/dev/null || true
cp kanan-ielts-3.png dist/ielts-online/ 2>/dev/null || true
cp kanan-ielts-3-optimized.webp dist/ielts-online/ 2>/dev/null || true
cp kanan-logo.svg dist/ielts-online/ 2>/dev/null || true
cp faviconV2.png dist/ielts-online/ 2>/dev/null || true
cp ielts-online/manifest.json dist/ielts-online/ 2>/dev/null || true
cp ielts-online/robots.txt dist/ielts-online/ 2>/dev/null || true
cp ielts-online/sitemap.xml dist/ielts-online/ 2>/dev/null || true

# Copy all necessary assets to Dubai directory
echo "🖼️ Copying assets to Dubai directory..."
cp -r dubai/assets dist/dubai/ 2>/dev/null || true
cp -r dubai/images dist/dubai/ 2>/dev/null || true
cp dubai/kanan-logo.svg dist/dubai/ 2>/dev/null || true
cp dubai/favicon.ico dist/dubai/ 2>/dev/null || true
cp dubai/manifest.json dist/dubai/ 2>/dev/null || true
cp dubai/robots.txt dist/dubai/ 2>/dev/null || true
cp dubai/sitemap.xml dist/dubai/ 2>/dev/null || true

# Copy all necessary assets to GRE directory
echo "🖼️ Copying assets to GRE directory..."
cp -r gre/testimonial-images dist/gre/ 2>/dev/null || true
cp -r gre/trainer-images dist/gre/ 2>/dev/null || true
cp gre/GRE-hero-image.jpg dist/gre/ 2>/dev/null || true
cp gre/GRE-hero-image-2.jpg dist/gre/ 2>/dev/null || true
cp gre/GRE-hero-image-3.png dist/gre/ 2>/dev/null || true
cp gre/kanan-logo.svg dist/gre/ 2>/dev/null || true
cp gre/faviconV2.png dist/gre/ 2>/dev/null || true
cp gre/manifest.json dist/gre/ 2>/dev/null || true
cp gre/robots.txt dist/gre/ 2>/dev/null || true
cp gre/sitemap.xml dist/gre/ 2>/dev/null || true

# Copy all necessary assets to US directory
echo "🖼️ Copying assets to US directory..."
cp -r us/testimonial-images dist/us/ 2>/dev/null || true
cp -r us/trainer-images dist/us/ 2>/dev/null || true
cp -r us/trainers dist/us/ 2>/dev/null || true
cp -r us/uty-logos dist/us/ 2>/dev/null || true
cp -r us/images dist/us/ 2>/dev/null || true
cp us/study-in-usa-hero-image.jpg dist/us/ 2>/dev/null || true
cp us/kanan-logo.svg dist/us/ 2>/dev/null || true
cp us/faviconV2.png dist/us/ 2>/dev/null || true
cp us/manifest.json dist/us/ 2>/dev/null || true
cp us/robots.txt dist/us/ 2>/dev/null || true
cp us/sitemap.xml dist/us/ 2>/dev/null || true

echo "✅ Static HTML deployment ready!"
echo "🌐 Chennai: join.kanan.co/ielts-chennai"
echo "🌐 Vadodara: join.kanan.co/ielts-vadodara"
echo "🌐 Online: join.kanan.co/ielts-online"
echo "🌐 Dubai: join.kanan.co/dubai"
echo "🌐 GRE: join.kanan.co/gre"
echo "🌐 US: join.kanan.co/us"
echo "📂 Files deployed to dist/ielts-chennai/, dist/ielts-vadodara/, dist/ielts-online/, dist/dubai/, dist/gre/, and dist/us/"
ls -la dist/ielts-chennai/ | head -5
echo "..."
ls -la dist/ielts-vadodara/ | head -5
echo "..."
ls -la dist/ielts-online/ | head -5
echo "..."
ls -la dist/dubai/ | head -5
echo "..."
ls -la dist/gre/ | head -5
echo "..."
ls -la dist/us/ | head -5
exit 0
