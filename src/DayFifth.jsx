import { input } from "./inputs/day_5";
import Card from 'react-bootstrap/Card';

const [stack, stackInstructions] = input.split('\n\n');
const splittedStack = stack.split('\n').slice(1, -1);

const stackArrays = splittedStack.map(elem => [...elem].filter((_, index) => index % 4 === 1));

const amountOfStacks = stackArrays[0].length;

const initialStacks = Array(amountOfStacks).fill("");

for (let i = 0; i < stackArrays.length; i++) {
  for (let j = 0; j < stackArrays[0].length; j++) {
    const char = stackArrays[i][j];
    if (char !== " ") {
      initialStacks[j] += char;
    }
  }
};

const reverse = (str) => [...str].reverse().join('');

// Part I
/**
 * The function `moveCratesReversed` takes an array of stacks, an amount, a "from" index, and a "to" index, and returns a new array of stacks with the specified amount of crates moved from the "from"
 * stack to the "to" stack in reverse order.
 * @returns Returns a new array of stacks with the specified amount
 * of crates moved from one stack to another in reverse order.
 */
const moveCratesReversed = (stacks, amount, from, to) => {
  return stacks.map((stack, i) =>
    i === from - 1
      ? stack.slice(amount)
      : i === to - 1
        ? reverse(stacks[from - 1].slice(0, amount)) + stack
        : stack)
};

// Part II 
/**
 * The function "moveCrates" takes an array of stacks, an amount, a "from" index, and a "to" index, and returns a new array of stacks with the specified amount of crates moved from one stack to another.
 * @returns Returns a new array of stacks after moving a specified amount of crates from one stack to another.
 */
const moveCrates = (stacks, amount, from, to) => {
  return stacks.map((stack, i) =>
    i === from - 1
      ? stack.slice(amount)
      : i === to - 1
        ? stacks[from - 1].slice(0, amount) + stack
        : stack)
};

/**
 * The function `formatInstruction` takes an instruction line as input and extracts the amount, source, and destination from it.
 * @returns Returns an array containing the amount, from, and to
 * values extracted from the instruction line.
 */
const formatInstruction = (instructionLine) => {
  const [amount, from, to] = instructionLine
    .match(/move (\d*) from (\d*) to (\d*)/)
    .slice(1)
    .map(Number);

  return [amount, from, to];
};

const instructions = stackInstructions.split("\n").map(formatInstruction);

// for Part I
let stacks_1 = initialStacks;

// for Part II
let stacks_2 = initialStacks;

for (const [amount, from, to] of instructions) {
  stacks_1 = moveCratesReversed(stacks_1, amount, from, to);
};

for (const [amount, from, to] of instructions) {
  stacks_2 = moveCrates(stacks_2, amount, from, to);
};

const finalResultPart_1 = stacks_1.map(stack => stack[0]).join(''); // JRVNHHCSJ
const finalResultPart_2 = stacks_2.map(stack => stack[0]).join(''); // GNFBSBJLH
 
export const DayFifth = () => {
  return (
      <Card.Body>
        <Card.Title>Day V: Supply Stacks <Card.Link href="https://adventofcode.com/2022/day/5" target="_blank" rel="noopener noreferrer">day 5</Card.Link></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Part I</Card.Subtitle>
        <Card.Text>After the rearrangement procedure completes, what crate ends up on top of each stack?: <strong>{finalResultPart_1}</strong></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Part II</Card.Subtitle>
        <Card.Text>After the rearrangement procedure completes, what crate ends up on top of each stack?: <strong>{finalResultPart_2}</strong></Card.Text>
      </Card.Body>
  );
}