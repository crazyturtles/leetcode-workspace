@"
@echo off
if "%1"=="" (
   echo Usage: new-problem.bat problem-name
   exit /b 1
)

set PROBLEM_DIR=problems\%1
mkdir "%PROBLEM_DIR%\test-cases"
copy lib\template.js "%PROBLEM_DIR%\solution.js"
copy lib\test.bat "%PROBLEM_DIR%\test.bat"

(
echo # Intuition
echo.
echo.
echo # Approach
echo.
echo.
echo # Complexity
echo - Time complexity: $$O(n)$$ - 
echo - Space complexity: $$O(1)$$ - 
echo.
echo # Code
echo ```
echo ```
) > "%PROBLEM_DIR%\README.md"

echo Created new problem structure in %PROBLEM_DIR%
echo Add test cases in %PROBLEM_DIR%\test-cases\
echo Edit solution in %PROBLEM_DIR%\solution.js
echo Complete documentation in %PROBLEM_DIR%\README.md
"@ | Set-Content -Path "lib\new-problem.bat"