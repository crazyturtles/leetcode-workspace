@echo off
if "%1"=="" (
   echo Usage: new-problem.bat problem-name
   exit /b 1
)

set PROBLEM_DIR=problems\%1
mkdir "%PROBLEM_DIR%\test-cases"
copy lib\template.js "%PROBLEM_DIR%\solution.js"
copy lib\test.bat "%PROBLEM_DIR%\test.bat"
type nul > "%PROBLEM_DIR%\test-cases\input1.txt"
type nul > "%PROBLEM_DIR%\test-cases\output1.txt"

echo # Intuition > "%PROBLEM_DIR%\README.md"
echo. >> "%PROBLEM_DIR%\README.md"
echo # Approach >> "%PROBLEM_DIR%\README.md"
echo. >> "%PROBLEM_DIR%\README.md"
echo # Complexity >> "%PROBLEM_DIR%\README.md"
echo - Time complexity: O(n) - >> "%PROBLEM_DIR%\README.md"
echo - Space complexity: O(1) - >> "%PROBLEM_DIR%\README.md"
echo. >> "%PROBLEM_DIR%\README.md"
echo # Code >> "%PROBLEM_DIR%\README.md"
echo ``` >> "%PROBLEM_DIR%\README.md"
echo ``` >> "%PROBLEM_DIR%\README.md"

echo Created new problem structure in %PROBLEM_DIR%
echo Add test cases in %PROBLEM_DIR%\test-cases\
echo Edit solution in %PROBLEM_DIR%\solution.js
echo Complete documentation in %PROBLEM_DIR%\README.md