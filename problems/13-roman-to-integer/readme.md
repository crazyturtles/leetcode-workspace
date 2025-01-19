# Intuition
Direct character comparison and hardcoded values are faster than hash map lookups. By handling special subtractive cases inline, we eliminate the need for additional logic checks.

# Approach
1. Iterate through string once
2. Compare current char with next char
3. Handle subtractive cases (IV, IX, XL, XC, CD, CM) directly
4. Increment counter to skip processed pairs

# Complexity
- Time complexity: $$O(n)$$ - single pass through string
- Space complexity: $$O(1)$$ - only using constant extra space

# Code
```javascript
var romanToInt = function(s) {
    let result = 0;
    
    for (let i = 0; i < s.length; i++) {
        const curr = s[i];
        const next = s[i + 1];
        
        if (curr === 'M') result += 1000;
        else if (curr === 'D') result += 500;
        else if (curr === 'C') {
            if (next === 'M') { result += 900; i++; }
            else if (next === 'D') { result += 400; i++; }
            else result += 100;
        }
        else if (curr === 'L') result += 50;
        else if (curr === 'X') {
            if (next === 'C') { result += 90; i++; }
            else if (next === 'L') { result += 40; i++; }
            else result += 10;
        }
        else if (curr === 'V') result += 5;
        else if (curr === 'I') {
            if (next === 'X') { result += 9; i++; }
            else if (next === 'V') { result += 4; i++; }
            else result += 1;
        }
    }
    
    return result;
};
```
