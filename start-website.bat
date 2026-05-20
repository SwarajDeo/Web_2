@echo off
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
  echo npm was not found.
  echo Install Node.js from https://nodejs.org/ and then run this file again.
  pause
  exit /b 1
)
if not exist node_modules (
  echo Installing project dependencies...
  npm install
  if errorlevel 1 (
    echo Dependency installation failed.
    pause
    exit /b 1
  )
)
echo Starting Sandhya portfolio at http://127.0.0.1:5173
npm run dev
pause
