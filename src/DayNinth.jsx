import { input } from './inputs/day_9';
import Card from 'react-bootstrap/Card';

const splittedInput = input.trim().split("\n");

/* The Rope class represents a rope that can move in different directions and calculate its distance from a knot. */
class Rope {
  static DIRECTIONS = {
    U: { x: 0, y: 1 },
    R: { x: 1, y: 0 },
    D: { x: 0, y: -1 },
    L: { x: -1, y: 0 },
  };

  constructor() {
    this.position = {
      x: 0,
      y: 0,
    };
  }

  move(direction) {
    const { x, y } = Rope.DIRECTIONS[direction];

    this.position.x += x;
    this.position.y += y;
  }

  distanceFrom(knot) {
    return {
      x: knot.position.x - this.position.x,
      y: knot.position.y - this.position.y,
    };
  }

  shouldFollow(previousKnot) {
    const distance = this.distanceFrom(previousKnot);

    return Math.abs(distance.x) > 1 || Math.abs(distance.y) > 1;
  }

  toString() {
    return `${this.position.x}, ${this.position.y}`;
  }
}

/**
 * The function `getVisitedPositions` takes an input of directions and steps, and returns a set of visited positions based on the movement of multiple ropes.
 * @param input - The `input` parameter is an array of strings, where each string represents a line of instructions. Each line consists of a direction (e.g., "up", "down", "left", "right") followed by a number of steps to move in that direction.
 * @param [numberOfKnots=2] - The `numberOfKnots` parameter represents the number of knots in the rope.
 * It is an optional parameter with a default value of 2.
 * @returns a Set of visited positions.
 */
function getVisitedPositions(input, numberOfKnots = 2) {
  const visitedPositions = new Set();

  const rope = Array(numberOfKnots)
    .fill()
    .map(() => new Rope());

  for (let line of input) {
    let [direction, steps] = line.split(' ');

    for (let i = 0; i < steps; i++) {
      const head = rope[0];
      const tail = rope.at(-1);

      head.move(direction);

      for (let j = 1; j < numberOfKnots; j++) {
        const currentKnot = rope[j];
        const previousKnot = rope[j - 1];
        const distance = currentKnot.distanceFrom(previousKnot);

        if (currentKnot.shouldFollow(previousKnot)) {
          currentKnot.position.x += Math.sign(distance.x);
          currentKnot.position.y += Math.sign(distance.y);
        }
      }

      visitedPositions.add(`${tail}`);
    }
  }

  return visitedPositions;
}


const part1 = getVisitedPositions(splittedInput).size; // 6470
const part2 = getVisitedPositions(splittedInput, 10).size; //2658

export const DayNinth = () => {
  return (
      <Card.Body>
        <Card.Title>Day IX: Rope Bridge <Card.Link href="https://adventofcode.com/2022/day/9" target="_blank" rel="noopener noreferrer">day 9</Card.Link></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Part I</Card.Subtitle>
        <Card.Text>Simulate your complete hypothetical series of motions. How many positions does the tail of the rope visit at least once?: <strong>{part1}</strong></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Part II</Card.Subtitle>
        <Card.Text>Simulate your complete series of motions on a larger rope with ten knots. How many positions does the tail of the rope visit at least once?: <strong>{part2}</strong></Card.Text>
      </Card.Body>
  );
}