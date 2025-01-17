# LeetCode JavaScript Testing Environment

A Windows-optimized environment for testing LeetCode solutions locally.

## Prerequisites
- Node.js (Latest LTS version recommended)
- Windows OS
- Visual Studio Code (or preferred editor)

## Directory Structure
```
leetcode-workspace/
├───lib/                    # Core files
│   ├───new-problem.bat    # Problem creation script
│   ├───template.js        # Solution template
│   ├───test.bat          # Test runner
│   └───test-problem.bat   # Problem test launcher
├───problems/              # Your solutions
    └───problem-name/      
        ├───solution.js    
        ├───test.bat      
        └───test-cases/    
            ├───input1.txt
            └───output1.txt
```

## Setup and Usage

1. Create new problem:
```bash
npm run new problem-name
```

2. Add test cases:
```
# test-cases/input1.txt
3        # Number of test cases
121      # Test case 1
-121     # Test case 2
10       # Test case 3

# test-cases/output1.txt
true
false
false
```

3. Implement solution in solution.js:
```javascript
function solution(input) {
    // Your code here
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    for (let i = 0; i < n; i++) {
        const input = readLine().trim();
        // Process input and call solution
    }
}
```

4. Run tests:
```bash
npm run test problem-name
```

## Test Output Format
```
Running tests...
[Test Case #1]
Input:
3
121
-121
10

Expected Output:
true
false
false

Actual Output:
true
false
false

[✓] Test Case #1 PASSED
========================================
Final Results: 1/1 test cases passed
All tests passed successfully!
```

## Best Practices

1. Test Cases
- Use LeetCode example cases
- Add edge cases
- Include failing cases you discover

2. Solution Development
- Write working solution first
- Add time/space complexity comments
- Add approach explanation
- Optimize after getting correct solution

## Example Implementation

The palindrome number problem (LeetCode #9) is included as a reference:

```javascript
/*
* Problem: 9. Palindrome Number
* Link: https://leetcode.com/problems/palindrome-number/
* Difficulty: Easy
*/

function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    
    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
```

## Troubleshooting

1. Test failures:
- Check input/output file formats
- Verify UTF-8 encoding
- Ensure CRLF line endings
- Confirm Node.js installation

2. Testing:
- Run from problem directory
- Verify test case file names
- Check file permissions

Happy coding!