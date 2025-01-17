'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
* Problem: 9. Palindrome Number
* Link: https://leetcode.com/problems/palindrome-number/
* Difficulty: Easy
*/

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false;
    
    let reversedHalf = 0;
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    
    for (let i = 0; i < n; i++) {
        const x = parseInt(readLine().trim());
        console.log(isPalindrome(x));
    }
}
