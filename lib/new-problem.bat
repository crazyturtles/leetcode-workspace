@echo off
if "%1"=="" (
    echo Usage: new-problem.bat problem-name
    exit /b 1
)

set PROBLEM_DIR=problems\%1
mkdir "%PROBLEM_DIR%\test-cases"
copy lib\template.js "%PROBLEM_DIR%\solution.js"
copy lib\test.bat "%PROBLEM_DIR%\test.bat"

echo Created new problem structure in %PROBLEM_DIR%
echo Add test cases in %PROBLEM_DIR%\test-cases\
echo Edit solution in %PROBLEM_DIR%\solution.js
