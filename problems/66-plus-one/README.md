# Intuition
Traverse array from right-to-left, incrementing digits and handling carry-overs efficiently by detecting 9s.

# Approach
1. Right-to-left traversal
2. If digit < 9: increment and return
3. If digit = 9: set to 0, continue left
4. If all 9s: create new array with leading 1

# Complexity
- Time complexity: $$O(n)$$ - single pass through array
- Space complexity: $$O(1)$$ - in-place modifications except all-9s case

# Code
```javascript []
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
   for(let i = digits.length - 1; i >= 0; digits[i] = 0, i--)
       if(digits[i] !== 9) return digits[i]++, digits;
   return [1, ...digits];
}
```