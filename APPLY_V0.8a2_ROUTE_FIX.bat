@echo off
setlocal
cd /d "%~dp0"

echo ================================================
echo GVibeDev V0.8a2 - B^&W Survivors Astro Route Fix
echo ================================================
echo.

if not exist "src\pages\apps\bw-survivors\index.html" (
  echo [ERROR] Missing src\pages\apps\bw-survivors\index.html
  echo Extract this hotfix directly into the gvibedev.github.io repository root.
  exit /b 1
)

if exist "public\apps\bw-survivors\index.html" (
  del /q "public\apps\bw-survivors\index.html"
  if exist "public\apps\bw-survivors\index.html" (
    echo [ERROR] Could not remove public\apps\bw-survivors\index.html
    exit /b 1
  )
  echo [OK] Removed conflicting public runtime index.
) else (
  echo [OK] No public runtime index to remove.
)

echo [OK] Astro page route present:
echo      src\pages\apps\bw-survivors\index.html

echo [OK] Runtime assets remain in:
echo      public\apps\bw-survivors\
echo.
echo Next:
echo   npm run dev
echo   open http://localhost:4321/apps/bw-survivors/
echo.
exit /b 0
