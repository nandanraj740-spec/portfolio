@echo off
title Pushing Portfolio to GitHub Pages...
color 0b
echo ========================================================
echo   Pushing Portfolio Website to GitHub
echo   Repository: https://github.com/nandanraj740-spec/portfolio
echo ========================================================
echo.

cd /d "%~dp0"

echo 1. Checking git status...
git status -s

echo.
echo 2. Pushing to GitHub (main branch)...
echo If a GitHub login window opens, please sign in or approve.
echo.
git push -u origin main

echo.
echo ========================================================
if %ERRORLEVEL% EQU 0 (
    color 0a
    echo [SUCCESS] Code pushed successfully to GitHub!
    echo.
    echo Your website will be live in 1-2 minutes at:
    echo https://nandanraj740-spec.github.io/portfolio/
) else (
    color 0c
    echo [ERROR] Push failed. Please check the error above.
)
echo ========================================================
echo.
pause
