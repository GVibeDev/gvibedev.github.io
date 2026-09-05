@echo off
setlocal

echo Removing legacy Italian HTML routes migrated in IT Parity Pass 1...
if exist "src/pages/it/index.html" del /q "src/pages/it/index.html"
if exist "src/pages/it/about/index.html" del /q "src/pages/it/about/index.html"
if exist "src/pages/it/biggitykot/index.html" del /q "src/pages/it/biggitykot/index.html"
if exist "src/pages/it/contact/index.html" del /q "src/pages/it/contact/index.html"
if exist "src/pages/it/manifesto/index.html" del /q "src/pages/it/manifesto/index.html"
if exist "src/pages/it/projects/index.html" del /q "src/pages/it/projects/index.html"
if exist "src/pages/it/tools/index.html" del /q "src/pages/it/tools/index.html"
if exist "src/pages/it/web-apps/index.html" del /q "src/pages/it/web-apps/index.html"
if exist "src/pages/it/worlds/index.html" del /q "src/pages/it/worlds/index.html"

echo Done.
