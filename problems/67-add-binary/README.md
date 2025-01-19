# Intuition
Process binary strings digit by digit from right to left, tracking carry, similar to manual binary addition.

# Approach
1. Initialize carry and result variables
2. Process strings right-to-left
3. Calculate sum of current digits plus carry
4. Append remainder (sum % 2) to result
5. Update carry based on sum threshold
6. Prepend final carry if exists

# Complexity
- Time complexity: $$O(max(n,m))$$ where n,m are lengths of input strings
- Space complexity: $$O(max(n,m))$$ for result string

# Code
```javascript
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = (a, b) => {
  let carry = 0;
  let result = '';
  let i = a.length - 1;
  let j = b.length - 1;

  while (i >= 0 || j >= 0) {
    const sum = (Number(a[i]) || 0) + (Number(b[j]) || 0) + carry;
    result = (sum % 2) + result;
    carry = sum > 1 ? 1 : 0;
    i--;
    j--;
  }

  return carry ? `1${result}` : result;
};
```