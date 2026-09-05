@echo off
setlocal

echo Removing legacy Italian HTML routes already replaced by Astro...
if exist "src/pages/it/index.html" del /q "src/pages/it/index.html"
if exist "src/pages/it/about/index.html" del /q "src/pages/it/about/index.html"
if exist "src/pages/it/biggitykot/index.html" del /q "src/pages/it/biggitykot/index.html"
if exist "src/pages/it/contact/index.html" del /q "src/pages/it/contact/index.html"
if exist "src/pages/it/manifesto/index.html" del /q "src/pages/it/manifesto/index.html"
if exist "src/pages/it/projects/index.html" del /q "src/pages/it/projects/index.html"
if exist "src/pages/it/tools/index.html" del /q "src/pages/it/tools/index.html"
if exist "src/pages/it/web-apps/index.html" del /q "src/pages/it/web-apps/index.html"
if exist "src/pages/it/worlds/index.html" del /q "src/pages/it/worlds/index.html"
if exist "src/pages/it/projects/unum-sunt-sprite-studio/index.html" del /q "src/pages/it/projects/unum-sunt-sprite-studio/index.html"
if exist "src/pages/it/projects/rubra-packager/index.html" del /q "src/pages/it/projects/rubra-packager/index.html"
if exist "src/pages/it/projects/arena-rubra-card-composer/index.html" del /q "src/pages/it/projects/arena-rubra-card-composer/index.html"
if exist "src/pages/it/projects/manuale-llm/index.html" del /q "src/pages/it/projects/manuale-llm/index.html"
if exist "src/pages/it/projects/rubra-image-forge/index.html" del /q "src/pages/it/projects/rubra-image-forge/index.html"
if exist "src/pages/it/projects/bw-survivors/index.html" del /q "src/pages/it/projects/bw-survivors/index.html"

echo Cleanup complete.
