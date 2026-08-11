@echo off
setlocal
cd /d "%~dp0"
set ERR=0

if exist "src\pages\apps\bw-survivors\index.html" (
  echo [OK] Astro route index exists.
) else (
  echo [FAIL] src\pages\apps\bw-survivors\index.html missing.
  set ERR=1
)

if exist "public\apps\bw-survivors\index.html" (
  echo [FAIL] public\apps\bw-survivors\index.html still exists and may collide at build time.
  set ERR=1
) else (
  echo [OK] No duplicate public index.
)

for %%F in (game.js style.css online-runtime.js online-runtime.css manifest.webmanifest) do (
  if exist "public\apps\bw-survivors\%%F" (
    echo [OK] %%F
  ) else (
    echo [FAIL] public\apps\bw-survivors\%%F missing.
    set ERR=1
  )
)

if "%ERR%"=="0" (
  echo.
  echo V0.8a2 route placement looks correct.
) else (
  echo.
  echo V0.8a2 verification FAILED.
)
exit /b %ERR%
