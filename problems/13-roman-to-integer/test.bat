@echo off
setlocal EnableDelayedExpansion

echo Running tests...
echo.

set /a testnum=1
set /a passed=0
set /a total=0

for %%f in (test-cases\input*.txt) do (
    set "input=%%f"
    set "output=test-cases\output!testnum!.txt"
    
    echo [Test Case #!testnum!]
    echo Input:
    type !input!
    echo.
    echo Expected Output:
    type !output!
    echo.
    echo Actual Output:
    node solution.js < !input! > temp_output
    type temp_output
    echo.
    
    fc /w /n !output! temp_output > nul
    if !errorlevel! == 0 (
        echo [✓] Test Case #!testnum! PASSED
        set /a passed+=1
    ) else (
        echo [✗] Test Case #!testnum! FAILED
    )
    set /a total+=1
    echo ========================================
    echo.
    set /a testnum+=1
)

del temp_output
echo Final Results: !passed!/!total! test cases passed
if !passed! == !total! (
    echo All tests passed successfully!
) else (
    echo Some tests failed. Please check the output above.
)
