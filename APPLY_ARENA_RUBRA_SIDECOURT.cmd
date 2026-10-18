@echo off
setlocal

echo GVibeDev.cc - Arena Rubra SideCourt Playtest Integration
echo ========================================================

if not exist package.json (
  echo ERROR: package.json not found. Run this script from the repository root.
  exit /b 1
)

echo Applying SideCourt block...
node scripts\apply-arena-rubra-sidecourt.mjs
if errorlevel 1 exit /b 1

echo.
echo Running production build...
call npm run build
if errorlevel 1 (
  echo.
  echo ERROR: build failed. Review the output before committing.
  exit /b 1
)

echo.
echo Patch and build completed successfully.
echo Review with: git diff -- src/layouts/ArenaRubraDigitalLayout.astro
echo Suggested commit:
echo   git add src/layouts/ArenaRubraDigitalLayout.astro
echo   git commit -m "add Arena Rubra SideCourt playtest link"
