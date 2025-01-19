# LeetCode JavaScript Testing Environment

A Windows-optimized environment for testing LeetCode solutions locally with code formatting and performance metrics.

## Prerequisites
- Node.js (Latest LTS version recommended)
- Windows OS
- Visual Studio Code (or preferred editor)
- Biome (installed via npm)

## Directory Structure
```
leetcode-workspace/
├───lib/                    # Core files
│   ├───new-problem.bat    # Problem creation script
│   ├───template.js        # Solution template
│   ├───test.bat          # Test runner
│   └───test-problem.bat   # Problem test launcher
├───problems/              # Your solutions
│   └───problem-name/      
│       ├───solution.js    
│       ├───test.bat      
│       ├───README.md     # Problem documentation
│       └───test-cases/    
│           ├───input1.txt
│           └───output1.txt
├───biome.json            # Code formatting config
└───package.json          # Project configuration
```

## Available Commands

1. Create new problem:
```bash
npm run new problem-name
```

2. Run tests:
```bash
npm run test problem-name
```

3. Format code:
```bash
npm run format
```

4. Lint code:
```bash
npm run lint
```

## Problem Setup Guide

1. Create problem structure:
```bash
npm run new problem-name
```
This creates:
- Solution template
- Test runner
- Empty test cases
- README template

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

3. Implement solution in `solution.js`:
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
Runtime: 7 ms
Memory Usage: 48.58 MB
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
- Document in problem README.md
- Format code using `npm run format`
- Optimize after getting correct solution

## Configuration
- `biome.json` - Code formatting and linting rules
- `.gitignore` - Standard Node.js gitignore
- `package.json` - Project scripts and dependencies

## Example Implementation

The palindrome number problem (LeetCode #9) is included as a reference. Check `problems/palindrome-number/` for:
- Complete solution with comments
- Test cases
- Documentation
- Performance metrics

## Troubleshooting

1. Test failures:
- Check input/output file formats
- Verify UTF-8 encoding
- Ensure CRLF line endings
- Confirm Node.js installation

2. Testing:
- Run from project root directory
- Verify test case file names
- Check file permissions

3. Formatting:
- Ensure Biome is installed (`npm install`)
- Check biome.json configuration
- Run format command from project root

Happy coding!