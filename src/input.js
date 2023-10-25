import * as fs from 'fs';
// import { readFileSync } from 'fs';

// Read the text file synchronously
const data = fs.readFileSync('input.test.txt', 'utf8');

// Split the data into an array of numbers
const dataArray = data.split('\n').map(Number);

export default dataArray;

export const adventPuzzleInput = async (day) => {
  const response = await fetch(
    `https://adventofcode.com/2022/${day}/1/input`
  );
  const responseText = await response.text();
  return responseText.trim();
};

const input = await adventPuzzleInput(2);

console.log(input);

// const path = require('path');
// const fs = require('fs');
//
// const input = fs
//   .readFileSync(path.join(__dirname, 'input.txt'), 'utf8')
//   .toString()
//   .trim()
//   .split('\n\n');
//
// module.exports = {
//   input,
// };
//
// const sumsSorted = input
//   .map((elf) => {
//     return elf
//       .split('\n')
//       .map((item) => parseInt(item, 10))
//       .reduce((sum, v) => sum + v, 0);
//   })
//   .sort((a, z) => z - a);
//
// console.log(sumsSorted[0]);
