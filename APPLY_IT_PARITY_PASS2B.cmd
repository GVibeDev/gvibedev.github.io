@echo off
setlocal
echo Applying Italian Parity Pass 2B shared-layout transformations...
node scripts\apply-it-parity-pass2b.mjs
if errorlevel 1 (
  echo.
  echo ERROR: Pass 2B shared-layout transformation failed.
  exit /b 1
)
echo.
echo Removing obsolete Italian snapshot files and localization bridge...
call CLEANUP_IT_PARITY_PASS2B.cmd
if errorlevel 1 exit /b 1
echo.
echo Pass 2B apply step completed. Run npm run build.
