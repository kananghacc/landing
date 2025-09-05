#!/bin/bash
echo "🚀 Static HTML Deployment for IELTS"
echo "📁 Preparing dist/ielts directory..."

# Create dist/ielts directory if it doesn't exist
mkdir -p dist/ielts

# Copy our static HTML to dist/ielts
echo "📄 Copying static HTML to dist/ielts/index.html"
cp index.html dist/ielts/index.html

# Copy all necessary assets
echo "🖼️ Copying assets..."
cp -r testimonial-images dist/ielts/ 2>/dev/null || true
cp -r trainer-images dist/ielts/ 2>/dev/null || true
cp kanan-ielts-3.png dist/ielts/ 2>/dev/null || true
cp kanan-ielts-3-optimized.webp dist/ielts/ 2>/dev/null || true
cp kanan-logo.svg dist/ielts/ 2>/dev/null || true
cp faviconV2.png dist/ielts/ 2>/dev/null || true
cp manifest.json dist/ielts/ 2>/dev/null || true
cp robots.txt dist/ielts/ 2>/dev/null || true
cp sitemap.xml dist/ielts/ 2>/dev/null || true

echo "✅ Static HTML deployment ready!"
echo "🌐 Will be accessible at join.kanan.co/ielts"
echo "📂 Files deployed to dist/ielts/"
ls -la dist/ielts/
exit 0
