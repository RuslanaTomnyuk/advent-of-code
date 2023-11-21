import { input } from "./inputs/day_10";
import Card from 'react-bootstrap/Card';

const splittedInput = input.trim().split("\n");

const interval = 40;

/**
 * The `followInstructions` function takes an array of instructions, executes them, and calls a callback function with the current cycle and value of `x` for each instruction.
 * @param input - An array of strings representing instructions. Each string contains a command and an optional argument separated by a space. The possible commands are 'addx' and 'noop'. The 'addx'
 * command increments the cycle by 2, while the 'noop' command increments the cycle by 1. The
 * @param callback - The `callback` parameter is a function that will be called for each cycle in the
 * `followInstructions` function. It takes two arguments: `cycle` and `x`.
 */
function followInstructions(input, callback) {
  let cycle = 1;
  let x = 1;

  for (const line of input) {
    const [command, arg] = line.split(' ');
    const cycles = command === 'addx' ? 2 : 1;

    for (let i = 0; i < cycles; i++, cycle++) {
      callback(cycle, x);
    }

    x += Number(arg) || 0;
  }
}

/**
 * The function calculates the sum of signal strengths based on given input.
 * @param input - The `input` parameter is the input data that is passed to the `getSumOfSignalStrengths` function. It is used as an argument for the `followInstructions` function, which is not shown in the code snippet provided. The `followInstructions` function likely takes the `input`.
 * @returns the sum of the signal strengths calculated based on the input.
 */
function getSumOfSignalStrengths(input) {
  let sum = 0;

  followInstructions(input, (cycle, x) => {
    if ((cycle - 20) % interval === 0) {
      const signalStrength = cycle * x;
      sum += signalStrength;
    }
  });

  return sum;
}

/**
 * The function `renderImage` takes an input and generates a string representation of an image based on
 * the given instructions.
 * @param input - The `input` parameter is a function that takes two arguments: `cycle` and `x`. It is
 * used to determine whether a pixel should be lit or dark based on the given cycle and x values.
 * @returns a string that represents an image.
 */
function renderImage(input) {
  const pixelLit = '#';
  const pixelDark = '.';
  let result = '';

  followInstructions(input, (cycle, x) => {
    const column = (cycle - 1) % interval;
    const isPixelLit = x - 1 <= column && column <= x + 1;

    result += isPixelLit ? pixelLit : pixelDark;

    if (column === interval - 1) {
      result += '\n';
    }
  });

  return result;
}

const part1 = getSumOfSignalStrengths(splittedInput); // 14340
const part2 = renderImage(splittedInput); // PAPJCBHP

export const DayTenth = () => {
  return (
      <Card.Body>
        <Card.Title>Day X: Cathode-Ray Tube <Card.Link href="https://adventofcode.com/2022/day/10" target="_blank" rel="noopener noreferrer">day 10</Card.Link></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Part I</Card.Subtitle>
        <Card.Text>Find the signal strength during the 20th, 60th, 100th, 140th, 180th, and 220th cycles. What is the sum of these six signal strengths?: <strong>{part1}</strong></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Part II</Card.Subtitle>
        <Card.Text>Render the image given by your program. What eight capital letters appear on your CRT?: <strong>{part2}</strong></Card.Text>
      </Card.Body>
  );
}