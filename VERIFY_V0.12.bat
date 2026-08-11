@echo off
setlocal
set FAIL=0

echo === GVibeDev V0.12 verification ===

call :check "src\data\shared\arena-rubra.ts"
call :check "src\components\arena-rubra\ArenaRubraFactionGrid.astro"
call :check "src\components\arena-rubra\ArenaRubraEcosystemLinks.astro"
call :check "src\layouts\BoardGameProjectLayout.astro"
call :check "src\data\projects\arena-rubra-board-game.md"

for %%F in (nexus exordium liberti agathoi fabeot) do (
  call :check "public\assets\projects\arena-rubra\shared\factions\%%F.webp"
  call :check "public\assets\projects\arena-rubra\shared\textures\%%F.webp"
)

if "%FAIL%"=="1" (
  echo.
  echo V0.12 VERIFY: FAILED
  exit /b 1
)

echo.
echo V0.12 VERIFY: FILE PLACEMENT OK
echo Next: npm run dev
exit /b 0

:check
if exist %1 (
  echo [OK] %~1
) else (
  echo [MISSING] %~1
  set FAIL=1
)
exit /b 0
