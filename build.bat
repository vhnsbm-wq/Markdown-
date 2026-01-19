@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo Building for production...
call npm run build
if %errorlevel% neq 0 (
    echo.
    echo Build failed!
    pause
    exit /b 1
)
echo.
echo Build completed successfully!
echo Output directory: dist/
pause

