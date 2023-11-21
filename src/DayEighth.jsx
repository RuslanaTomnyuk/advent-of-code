import { input } from './inputs/day_8.js';
import Card from 'react-bootstrap/Card';

const splittedInput = input.trim().split("\n");

const parseInput = splittedInput.map(line => line.split('').map(Number));

// Part I
/**
 * The function "getNeighbors" returns an array containing the neighbors of a given element in a 2D
 * grid.
 * @param grid - The grid is a two-dimensional array representing a grid of values. Each element in the grid represents a cell in the grid.
 * @param rowIndex - The rowIndex parameter represents the index of the row in the grid array for which you want to find the neighbors.
 * @param colIndex - The `colIndex` parameter represents the index of the column in the `grid` array for which you want to find the neighbors.
 * @returns an array of the neighbors of a given cell in a grid. The neighbors are determined by the cell's row and column indices.
 */
function getNeighbors(grid, rowIndex, colIndex) {
  return [
    grid
      .slice(0, rowIndex)
      .map((row) => row[colIndex])
      .reverse(),
    grid[rowIndex].slice(colIndex + 1),
    grid.slice(rowIndex + 1).map((row) => row[colIndex]),
    grid[rowIndex].slice(0, colIndex).reverse(),
  ];
}

/**
 * The function checks if a tree in a grid is visible from any of its neighboring trees.
 * @param grid - A 2-dimensional array representing a grid of tree heights. Each element in the array
 * represents the height of a tree at a specific position in the grid.
 * @param rowIndex - The rowIndex parameter represents the index of the row in the grid where the current cell is located.
 * @param colIndex - The `colIndex` parameter represents the index of the column in the `grid` array.
 * It is used to determine the position of the current tree in the grid.
 * @returns Returns a boolean value. It returns `true` if there is at least one neighboring tree that is shorter than the tree at the given `rowIndex` and `colIndex` in the `grid`. Otherwise, it returns `false`.
 */
function isVisible(grid, rowIndex, colIndex) {
  const height = grid[rowIndex][colIndex];
  const neighbors = getNeighbors(grid, rowIndex, colIndex);

  return neighbors.some((direction) => direction.every((tree) => tree < height));
};

/**
 * The function calculates the total number of visible trees in a grid.
 * @returns the total number of visible trees in the grid.
 */
function getTotalVisibleTrees() {
  const grid = parseInput;
  let visible = 0;

  grid.forEach((row, rowIndex) =>
    row.forEach((_, colIndex) => {
      if (isVisible(grid, rowIndex, colIndex)) {
        visible++;
      }
    }),
  );

  return visible;
};

// Part II
/**
 * The function calculates the scenic score of a grid cell based on its height and the heights of its neighboring cells.
 * @param grid - The grid is a two-dimensional array representing the heights of trees in a scenic
 * area. Each element in the grid represents the height of a tree at a specific location.
 * @param rowIndex - The rowIndex parameter represents the index of the row in the grid array where the current cell is located.
 * @param colIndex - The colIndex parameter represents the index of the column in the grid where the current cell is located.
 * @returns the scenic score, which is calculated based on the height of the current cell and the
 * heights of its neighboring cells.
 */
function getScenicScore(grid, rowIndex, colIndex) {
  const height = grid[rowIndex][colIndex];
  const neighbors = getNeighbors(grid, rowIndex, colIndex);

  function getCount(trees) {
    let counter = 0;

    for (let tree of trees) {
      counter++;
      if (tree >= height) {
        return counter;
      }
    }

    return counter;
  }

  return neighbors.reduce((a, b) => a * getCount(b), 1);
}

/**
 * The function `getHighestScenicScore` calculates and returns the highest scenic score in a grid.
 * @returns the highest scenic score found in the grid.
 */
function getHighestScenicScore() {
  const grid = parseInput;
  let highestScore = 0;

  grid.forEach((row, rowIndex) =>
    row.forEach((_, colIndex) => {
      let score = getScenicScore(grid, rowIndex, colIndex);

      if (score > highestScore) {
        highestScore = score;
      }
    }),
  );

  return highestScore;
};

const part1 = getTotalVisibleTrees(); // 1835
const part2 = getHighestScenicScore(); // 263670

export const DayEighth = () => {
  return (
    <Card.Body>
      <Card.Title>Day VIII: Treetop Tree House <Card.Link href="https://adventofcode.com/2022/day/8" target="_blank" rel="noopener noreferrer">day 8</Card.Link></Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Part I</Card.Subtitle>
      <Card.Text>Consider your map, how many trees are visible from outside the grid?: <strong>{part1}</strong></Card.Text>
      <Card.Subtitle className="mb-2 text-muted">Part II</Card.Subtitle>
      <Card.Text>Consider each tree on your map. What is the highest scenic score possible for any tree?: <strong>{part2}</strong></Card.Text>
    </Card.Body>
  );
}