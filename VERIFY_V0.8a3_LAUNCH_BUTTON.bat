@echo off
setlocal
set FAIL=0

findstr /C:"launchPath: /apps/bw-survivors/" src\data\projects\bw-survivors.md >nul || (echo [FAIL] launchPath missing in project data & set FAIL=1)
findstr /C:"launchPath: z.string().optional()" src\content.config.ts >nul || (echo [FAIL] launchPath missing in content schema & set FAIL=1)
findstr /C:"data.launchPath" src\layouts\BiggityKotProjectLayout.astro >nul || (echo [FAIL] BiggityKot layout does not render launchPath & set FAIL=1)
if exist src\pages\apps\bw-survivors\index.html (echo [OK] runtime route exists) else (echo [FAIL] runtime route missing & set FAIL=1)

if "%FAIL%"=="0" (
  echo [OK] V0.8a3 launch button wiring present.
  exit /b 0
) else (
  echo [FAIL] V0.8a3 verification failed.
  exit /b 1
)
