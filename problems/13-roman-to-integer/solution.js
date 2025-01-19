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
* Problem: 13. Roman to Integer
* Link: https://leetcode.com/problems/roman-to-integer/
* Difficulty: Easy
*/

/**
 * @param {string} s
 * @return {number}
 */
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

function main() {
    // Modify this based on problem's input format
    const n = parseInt(readLine().trim(), 10);
    
    // Process each test case
    for (let i = 0; i < n; i++) {
        const x = readLine().trim();
        console.log(romanToInt(x));
    }
}
