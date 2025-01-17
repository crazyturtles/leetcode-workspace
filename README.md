# LeetCode JavaScript Workspace

This workspace provides a structured environment for solving and testing LeetCode problems using JavaScript. It's designed to streamline the process of setting up, solving, and testing LeetCode problems locally on Windows systems.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (Latest LTS version recommended)
- Visual Studio Code (or your preferred code editor)
- Git (optional, for version control)

## Workspace Structure

The workspace is organized as follows:

```
leetcode-workspace/
│
├───lib/                    # Contains template and utility files
│   ├───new-problem.bat    # Script to create new problem directories
│   ├───template.js        # Template for problem solutions
│   └───test.bat          # Test runner script
│
├───problems/              # Directory containing all problem solutions
│   └───problem-name/     # Individual problem directory
│       ├───solution.js   # Your solution implementation
│       ├───test.bat      # Test runner for this problem
│       └───test-cases/   # Directory containing test inputs and outputs
│           ├───input1.txt
│           └───output1.txt
│
└───package.json          # Project configuration
```

## Getting Started

1. Creating a New Problem

To start working on a new LeetCode problem, use the following command:
```bash
npm run new problem-name
```
This will:
- Create a new directory under `problems/`
- Set up the solution template
- Create a test-cases directory
- Copy the test runner

2. Setting Up Test Cases

Navigate to your problem directory:
```bash
cd problems/problem-name
```

Create your test cases in the `test-cases` directory:
- `input1.txt`: Contains your test inputs
- `output1.txt`: Contains expected outputs

Input format should match the problem requirements. For example:
```
3        # Number of test cases
121      # Test case 1
-121     # Test case 2
10       # Test case 3
```

3. Implementing Your Solution

Open `solution.js` in your editor. You'll find:
- A template for the solution function
- Input/output handling code
- The main function that processes test cases

4. Running Tests

From your problem directory:
```bash
test.bat
```

This will run your solution against the test cases and show the results.

## Best Practices

1. Test Case Organization
   - Start with the example test cases from LeetCode
   - Add edge cases and corner cases
   - Include any failing test cases you discover

2. Solution Development
   - Begin with a working solution that passes test cases
   - Optimize for time and space complexity
   - Add comments explaining your approach
   - Include the time and space complexity in comments

3. Version Control
   - Consider using Git to track your solutions
   - Create a separate branch for each problem
   - Commit your changes regularly

## Troubleshooting

Common issues and solutions:

1. If test.bat doesn't run:
   - Ensure you're in the problem directory
   - Check that Node.js is installed and in your PATH
   - Verify test case files exist and are formatted correctly

2. If input reading fails:
   - Check input file format matches the expected format
   - Ensure input files use UTF-8 encoding
   - Verify line endings are consistent (CRLF for Windows)

## Example Usage

Here's a complete example using the Palindrome Number problem:

1. Create the problem:
```bash
npm run new palindrome-number
```

2. Create test cases:
```
# test-cases/input1.txt
3
121
-121
10

# test-cases/output1.txt
true
false
false
```

3. Implement solution in solution.js:
```javascript
function isPalindrome(x) {
    if (x < 0) return false;
    let reversed = 0, original = x;
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return reversed === original;
}
```

4. Run tests:
```bash
test.bat
```

## Support

For any issues or suggestions:
1. Check the troubleshooting section
2. Review LeetCode's problem description
3. Verify your Node.js installation
4. Check file permissions and encoding

Happy coding!