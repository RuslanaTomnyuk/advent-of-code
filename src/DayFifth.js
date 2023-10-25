import { input } from "./inputs/day_5";

const testInput = `
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`;

const [stack, stackInstructions] = input.split('\n\n');
const splittedStack = stack.split('\n').slice(1, -1);
// console.log('splittedStack', splittedStack);

const stackArrays = splittedStack.map(elem => [...elem].filter((_, index) => index % 4 === 1))
// console.log('stackArrays', stackArrays);

const amountOfStacks = stackArrays[0].length;

const initialStacks = Array(amountOfStacks).fill("");

for (let i = 0; i < stackArrays.length; i++) {
  for (let j = 0; j < stackArrays[0].length; j++) {
    const char = stackArrays[i][j];
    if (char !== " ") {
      initialStacks[j] += char;
    }
  }
}

// console.log('initialStacks', initialStacks); // ['NZ', 'DCM', 'P']

// const moveOfCrate = (stacks, from, to) => {
//   const moveCrate = stacks[from - 1][0];
//   return stacks.map((stack, i) =>
//     i === from - 1
//       ? stack.slice(1)
//       : i === to - 1
//         ? moveCrate + stack
//         : stack
//   );
// }

const reverse = (str) => [...str].reverse().join('');

// Part I
const moveCratesReversed = (stacks, amount, from, to) => {
  return stacks.map((stack, i) =>
    i === from - 1
      ? stack.slice(amount)
      : i === to - 1
        ? reverse(stacks[from - 1].slice(0, amount)) + stack
        : stack)
}

// Part II 

const moveCrates = (stacks, amount, from, to) => {
  return stacks.map((stack, i) =>
    i === from - 1
      ? stack.slice(amount)
      : i === to - 1
        ? stacks[from - 1].slice(0, amount) + stack
        : stack)
}

// const sample = 'move 1 from 2 to 1'

const formatInstruction = (instructionLine) => {
  const [amount, from, to] = instructionLine
    .match(/move (\d*) from (\d*) to (\d*)/)
    .slice(1)
    .map(Number);

  return [amount, from, to];
}
// console.log(formatInstruction(sample));

const instructions = stackInstructions.split("\n").map(formatInstruction);
// console.log(instructions);

// for Part I
let stacks_1 = initialStacks;

// for Part II
let stacks_2 = initialStacks;

for (const [amount, from, to] of instructions) {
  stacks_1 = moveCratesReversed(stacks_1, amount, from, to);
}

for (const [amount, from, to] of instructions) {
  stacks_2 = moveCrates(stacks_2, amount, from, to);
}

const finalResultPart_1 = stacks_1.map(stack => stack[0]).join('')
const finalResultPart_2 = stacks_2.map(stack => stack[0]).join('')

// console.log(stacks);
// console.log(finalResultPart_1); // JRVNHHCSJ
// console.log(finalResultPart_2); // GNFBSBJLH




export const DayFifth = () => {
  return (
    <div className="App">
      <h1>Day V</h1>
      <h4>Part I</h4>
      <p>All the crates that end up on top of each stack: <strong>{finalResultPart_1}</strong></p>
      <h4>Part II</h4>
      <p>After the rearrangement procedure completes, the crates that end up on top of each stack: <strong>{finalResultPart_2}</strong></p>
    </div>
  );
}