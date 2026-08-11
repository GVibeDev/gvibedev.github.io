@echo off
setlocal
set "ROOT=public\apps\bw-survivors"
echo Checking B^&W Survivors runtime placement...
set ERR=0
for %%F in (index.html game.js style.css online-runtime.js online-runtime.css manifest.webmanifest) do (
  if not exist "%ROOT%\%%F" (
    echo [MISSING] %ROOT%\%%F
    set ERR=1
  ) else (
    echo [OK] %ROOT%\%%F
  )
)
if not exist "%ROOT%\gameassets\player\player.png" (
  echo [MISSING] %ROOT%\gameassets\player\player.png
  set ERR=1
) else (
  echo [OK] %ROOT%\gameassets\player\player.png
)
if "%ERR%"=="1" (
  echo.
  echo Runtime placement is NOT complete.
  exit /b 1
)
echo.
echo Runtime placement is complete.
echo Expected dev URL: http://localhost:4321/apps/bw-survivors/
exit /b 0
