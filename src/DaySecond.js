import { secondDayInput } from "./inputs/day_2";

const test = `A Y
B X
C Z`;

const input = secondDayInput.split("\n")

const lines = input.map(line => line.split(' '));

//  part I
const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const getSumOfMoves = (arr) => arr.reduce((acc, curr) => acc + winnerOrLooser(curr), 0);

const sumOfMoves = getSumOfMoves(lines); // 14297

function getScores(player) {
  if (player === "A" || player === "X") {
    return 1;
  }

  if (player === "B" || player === "Y") {
    return 2;
  }

  if (player === "C" || player === "Z") {
    return 3;
  }
}

// part 1
function winnerOrLooser(players) {
  if (getScores(players[0]) === getScores(players[1])) {
    return getScores(players[1]) + 3;
  }

  if (
    (getScores(players[0]) === moves.rock && getScores(players[1]) === moves.paper) ||
    (getScores(players[0]) === moves.paper && getScores(players[1]) === moves.scissors) ||
    (getScores(players[0]) === moves.scissors && getScores(players[1]) === moves.rock)
  ) {

    return getScores(players[1]) + 6
  }

  return getScores(players[1]);
}

// console.log('winnerOrLooser', winnerOrLooser());

// part II

const scoreValues = {
  "A X": 3,
  "A Y": 4,
  "A Z": 8,
  "B X": 1,
  "B Y": 5,
  "B Z": 9,
  "C X": 2,
  "C Y": 6,
  "C Z": 7,
}

const getScore = (turn) => scoreValues[turn];
const scores = input.map(getScore)
const totalScore = scores.reduce((sum, num) => sum + num, 0)
// console.log('totalScore', totalScore); // 10498


export const DaySecond = () => {
  return (
    <div className="App">
      <h1>Day II</h1>
      <h4>Part I : { }</h4>
      <p>Total score: { sumOfMoves }</p>
      <h4>Part II</h4>
      <p>Total score : { totalScore }</p>
    </div>
  );
}

