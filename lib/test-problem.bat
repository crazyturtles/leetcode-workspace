@echo off
if "%1"=="" (
    echo Usage: test-problem problem-name
    exit /b 1
)

set PROBLEM_DIR=problems\%1
if not exist "%PROBLEM_DIR%" (
    echo Problem directory not found: %PROBLEM_DIR%
    exit /b 1
)

cd %PROBLEM_DIR%
call test.bat
cd ..\..
