@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Installing dependencies...
call npm install
if %errorlevel% neq 0 (
    echo.
    echo Error: npm install failed. Please make sure Node.js and npm are installed.
    echo You can download Node.js from: https://nodejs.org/
    pause
    exit /b 1
)
echo.
echo Dependencies installed successfully!
echo.
echo To start the development server, run: npm run dev
pause

