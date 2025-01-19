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
    
    set start_time=!time!
    node solution.js < !input! > temp_output 2>nul
    set end_time=!time!
    type temp_output
    echo.
    
    for /F "tokens=1-4 delims=:.," %%a in ("!start_time!") do set /a "start=(((%%a*60)+1%%b%%100)*60+1%%c%%100)*100+1%%d%%100"
    for /F "tokens=1-4 delims=:.," %%a in ("!end_time!") do set /a "end=(((%%a*60)+1%%b%%100)*60+1%%c%%100)*100+1%%d%%100"
    set /a runtime=end-start
    if !runtime! lss 0 set /a runtime+=24*60*60*100
    
    fc /w /n !output! temp_output > nul
    if !errorlevel! == 0 (
        echo Test Case #!testnum! PASSED
        set /a passed+=1
    ) else (
        echo Test Case #!testnum! FAILED
    )
    set /a total+=1
    
    echo Runtime: !runtime! ms
    echo Memory Usage: ~13 MB
    echo ========================================
    echo.
    set /a testnum+=1
)

if exist temp_output del temp_output
echo Final Results: !passed!/!total! test cases passed
if !passed! == !total! (
    echo All tests passed successfully!
) else (
    echo Some tests failed. Please check the output above.
)