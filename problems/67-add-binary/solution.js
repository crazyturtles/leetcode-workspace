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
 * Problem: 67. Add Binary
 * Link: https://leetcode.com/problems/add-binary/
 * Difficulty: Easy
 */

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

function main() {
  const testCases = Number.parseInt(readLine().trim(), 10);

  for (let t = 0; t < testCases; t++) {
    const [a, b] = readLine().trim().split(' ');
    const result = addBinary(a, b);
    console.log(result);
  }
}
