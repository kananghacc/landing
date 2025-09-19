#!/bin/bash
echo "🚀 Static HTML Deployment for all landing pages"
echo "📁 Syncing landing folders into dist/..."

set -e

LANDING_DIRS=(
  "ielts-chennai"
  "ielts-vadodara"
  "ielts-online"
  "dubai"
  "gre"
  "us"
  "sat"
  "uk"
  "canada"
  "australia"
)

mkdir -p dist

for d in "${LANDING_DIRS[@]}"; do
  echo "➡️  Building dist/$d"
  mkdir -p "dist/$d"
  # Mirror the entire folder (includes index.html, thank-you.html, assets, images, etc.)
  rsync -a --delete "$d/" "dist/$d/"
done

echo "✅ Static HTML deployment ready!"
for d in "${LANDING_DIRS[@]}"; do
  echo "📂 $(ls -1 "dist/$d" | wc -l) files in dist/$d"
done
exit 0
