# Intuition
To find square root without built-in functions, use Newton's Method which converges quickly by making better guesses based on previous results.

# Approach
1. Handle base cases (0,1) immediately
2. Start with x/2 as initial guess
3. Use Newton's Method formula: next_guess = (guess + x/guess) / 2 
4. Continue until difference between guess^2 and x is less than 1
5. Floor result for integer answer

# Complexity
- Time complexity: O(log n) - Newton's Method converges quadratically
- Space complexity: O(1) - Only storing guess variable

# Code
```javascript
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = (x) => {
    if (x < 2) return x;

    let guess = x / 2;
    while (Math.abs(guess * guess - x) >= 1) {
        guess = (guess + x / guess) / 2;
    }
    return Math.floor(guess);
};
```