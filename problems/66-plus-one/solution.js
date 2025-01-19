process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on('end', () => {
  inputString = inputString.split('\n');
  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Problem: 66. Plus One
 * Link: https://leetcode.com/problems/plus-one/
 * Difficulty: Easy
 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; digits[i] = 0, i--)
    if (digits[i] !== 9) return digits[i]++, digits;
  return [1, ...digits];
};

function main() {
  // Modify this based on problem's input format
  const n = Number.parseInt(readLine().trim(), 10);

  // Process each test case
  for (let i = 0; i < n; i++) {
    const input = readLine()
      .trim()
      .replace(/[\[\]]/g, '')
      .split(',')
      .map(Number);
    console.log(JSON.stringify(plusOne(input)).replace(/\s/g, ''));
  }
}
