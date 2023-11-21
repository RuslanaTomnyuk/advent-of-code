import { input } from "./inputs/day_7";
import Card from 'react-bootstrap/Card';

/**
 * The function calculates the total sum of all the integer values in a nested object.
 * @param fs - The parameter `fs` is an object that represents a file system. It contains key-value pairs where the keys are file or directory names, and the values can be either integers or nested file systems (objects with the same structure).
 * @param [totals] - The `totals` parameter is an optional array that stores the running total of the calculations. It is initially set to an empty array `[]`.
 * @returns The function `calculateTotal` returns an array containing the running totals of the values in the input object `fs`.
 */
function calculateTotal(fs, totals = []) {
  const keys = Object.keys(fs);
  let total = 0;

  for (const key of keys) {
    if (Number.isInteger(fs[key])) {
      total += fs[key];
    } else {
      total += calculateTotal(fs[key], totals)[0];
    }
  }

  totals.unshift(total);
  return totals;
}

/**
 * The `parse` function takes in a string input representing a file system structure and returns the total size of all files in the file system.
 * @param input - The `input` parameter is a string that represents a series of commands and file/directory information. Each line in the string represents a command or file/directory entry.
 * @returns the total size of the file system.
 */
function parse(input) {
  const lines = input.split('\n');
  const fileSystem = {};
  let currentDir = [];

  for (const line of lines) {
    if (line.startsWith('$ cd ')) {
      const dir = line.slice(5);
      if (dir === '/') {
        currentDir = [];
      } else if (dir === '..') {
        currentDir.pop();
      } else {
        currentDir.push(dir);
      }
    } else if (!line.startsWith('$')) {
      const [size, name] = line.split(' ');
      const cd = currentDir.reduce((obj, d) => obj[d], fileSystem);
      cd[name] = size === 'dir' ? {} : +size;
    }
  }

  return calculateTotal(fileSystem);
};

/* The `parse` function takes a string input representing a file system
structure and returns the total size of all files in the file system. The result of the `parse` function is stored in the `parseInput` variable. */
const parseInput = parse(input);

/**
 * The function calculates the sum of the total directory sizes by filtering out values less than or equal to 1e5 and then reducing the remaining values by addition.
 */
const sumOfTotalDirSizes = () => parseInput.filter(x => x <= 1e5).reduce((a, b) => a + b, 0);

const partOneResult = sumOfTotalDirSizes(input); // 1443806

/**
 * The function calculates the missing space by subtracting the input from the total space, filters the input to find values greater than or equal to the missing space, sorts them in ascending order, and
 * returns the smallest value.
 * @returns Returns the smallest number from the `parseInput` array that is greater than or equal to the `missingSpace` value.
 */
const part2 = () => {
  const freeSpace = 7e7 - parseInput[0];
  const missingSpace = 3e7 - freeSpace;
  return parseInput.filter(x => x >= missingSpace).sort((a, b) => a - b)[0];
}

const partTwoResult = part2(input) // 942298

export const DaySeventh = () => {
  return (
      <Card.Body>
        <Card.Title>Day VII: No Space Left On Device <Card.Link href="https://adventofcode.com/2022/day/7" target="_blank" rel="noopener noreferrer">day 7</Card.Link></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Part I</Card.Subtitle>
        <Card.Text>Find all of the directories with a total size of at most 100000. What is the sum of the total sizes of those directories?: <strong>{partOneResult}</strong></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Part II</Card.Subtitle>
        <Card.Text>Find the smallest directory that, if deleted, would free up enough space on the filesystem to run the update. What is the total size of that directory?: <strong>{partTwoResult}</strong></Card.Text>
      </Card.Body>
  );
}