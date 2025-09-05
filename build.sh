#!/bin/bash
echo "🚀 Static HTML Deployment for IELTS Chennai"
echo "📁 Preparing dist/ielts-chennai directory..."

# Create dist/ielts-chennai directory if it doesn't exist
mkdir -p dist/ielts-chennai

# Copy our static HTML to dist/ielts-chennai
echo "📄 Copying static HTML to dist/ielts-chennai/index.html"
cp index.html dist/ielts-chennai/index.html

# Copy all necessary assets
echo "🖼️ Copying assets..."
cp -r testimonial-images dist/ielts-chennai/ 2>/dev/null || true
cp -r trainer-images dist/ielts-chennai/ 2>/dev/null || true
cp kanan-ielts-3.png dist/ielts-chennai/ 2>/dev/null || true
cp kanan-ielts-3-optimized.webp dist/ielts-chennai/ 2>/dev/null || true
cp kanan-logo.svg dist/ielts-chennai/ 2>/dev/null || true
cp faviconV2.png dist/ielts-chennai/ 2>/dev/null || true
cp manifest.json dist/ielts-chennai/ 2>/dev/null || true
cp robots.txt dist/ielts-chennai/ 2>/dev/null || true
cp sitemap.xml dist/ielts-chennai/ 2>/dev/null || true

echo "✅ Static HTML deployment ready!"
echo "🌐 Will be accessible at join.kanan.co/ielts-chennai"
echo "📂 Files deployed to dist/ielts-chennai/"
ls -la dist/ielts-chennai/
exit 0
