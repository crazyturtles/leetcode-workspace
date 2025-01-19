# Intuition
The key insight is that a palindrome reads the same forwards and backwards. Instead of converting the number to a string, we can create a reversed version of the number mathematically and compare them. If they're equal, it's a palindrome.

# Approach
1. Handle edge cases first:
   - Negative numbers can't be palindromes (due to the minus sign)
   - Single digits (0-9) are always palindromes
   - Numbers ending with 0 (except 0 itself) can't be palindromes

2. For all other numbers:
   - Create a reversed version of the number digit by digit
   - Extract each digit using modulo 10 (x % 10)
   - Build the reversed number by multiplying previous result by 10 and adding the new digit
   - Remove processed digits from original number using integer division (y / 10)
   - Compare original number with reversed number

# Complexity
- Time complexity: $$O(\log n)$$ - we process each digit of the number once, and the number of digits is proportional to log n
- Space complexity: $$O(1)$$ - we only use two variables (rev and y) regardless of input size

# Code
```javascript []
/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x < 0) return false;
    if (x < 10) return true;
    if (x % 10 === 0) return false;

    let rev = 0, y = x;
    while (y) {
        rev = (rev * 10) + (y % 10);
        y = (y / 10) | 0;
    }
    return x === rev;
}
```
