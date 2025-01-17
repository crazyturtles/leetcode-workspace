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
* Problem: [Problem Name]
* Link: [LeetCode URL]
*/

function solution(input) {
    // TODO: Implement solution
}

function main() {
    const n = parseInt(readLine().trim(), 10);
    const input = [];
    
    for (let i = 0; i < n; i++) {
        input.push(readLine().trim());
    }
    
    const result = solution(input);
    console.log(result);
}
