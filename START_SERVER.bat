@echo off
title MFC Event Registration Portal
color 0B

echo.
echo ========================================
echo   MFC - Event Registration Portal
echo ========================================
echo.
echo Starting local server...
echo.

REM Check if Python is available
python --version >nul 2>&1
if %errorlevel% == 0 (
    echo Using Python HTTP Server
    echo.
    echo Server running at: http://localhost:8000
    echo.
    echo Press Ctrl+C to stop the server
    echo ========================================
    echo.
    
    REM Open browser
    start http://localhost:8000
    
    REM Start Python server
    python -m http.server 8000
) else (
    echo Python not found. Opening file directly in browser...
    echo.
    echo Note: For best experience, use a local server
    echo ========================================
    echo.
    start index.html
    pause
)
