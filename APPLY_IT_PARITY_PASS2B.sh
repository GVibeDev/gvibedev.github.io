#!/usr/bin/env sh
set -eu

echo "Applying Italian Parity Pass 2B shared-layout transformations..."
node scripts/apply-it-parity-pass2b.mjs

echo
sh CLEANUP_IT_PARITY_PASS2B.sh

echo
echo "Pass 2B apply step completed. Run npm run build."
