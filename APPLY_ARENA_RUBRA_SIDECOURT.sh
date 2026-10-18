#!/usr/bin/env sh
set -eu

echo "GVibeDev.cc - Arena Rubra SideCourt Playtest Integration"
echo "========================================================"

if [ ! -f package.json ]; then
  echo "ERROR: package.json not found. Run this script from the repository root."
  exit 1
fi

echo "Applying SideCourt block..."
node scripts/apply-arena-rubra-sidecourt.mjs

echo
echo "Running production build..."
npm run build

echo
echo "Patch and build completed successfully."
echo "Review with: git diff -- src/layouts/ArenaRubraDigitalLayout.astro"
echo 'Suggested commit: git add src/layouts/ArenaRubraDigitalLayout.astro && git commit -m "add Arena Rubra SideCourt playtest link"'
