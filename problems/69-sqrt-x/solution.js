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
 * Problem: 69. Sqrt(x)
 * Link: https://leetcode.com/problems/sqrtx/
 * Difficulty: Easy
 */

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

function main() {
  const n = Number.parseInt(readLine().trim(), 10);

  for (let i = 0; i < n; i++) {
    const x = Number.parseInt(readLine().trim(), 10);
    const result = mySqrt(x);
    console.log(result);
  }
}