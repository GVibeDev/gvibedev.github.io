#!/usr/bin/env sh
set -eu

echo 'Removing legacy Italian HTML routes migrated in IT Parity Pass 1...'
rm -f 'src/pages/it/index.html'
rm -f 'src/pages/it/about/index.html'
rm -f 'src/pages/it/biggitykot/index.html'
rm -f 'src/pages/it/contact/index.html'
rm -f 'src/pages/it/manifesto/index.html'
rm -f 'src/pages/it/projects/index.html'
rm -f 'src/pages/it/tools/index.html'
rm -f 'src/pages/it/web-apps/index.html'
rm -f 'src/pages/it/worlds/index.html'
echo 'Done.'
