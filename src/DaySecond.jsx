import { secondDayInput } from './inputs/day_2';
import Card from 'react-bootstrap/Card';

const input = secondDayInput.split('\n');
const lines = input.map((line) => line.split(' '));

//  part I
const moves = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

/**
 * The function "getScores" returns a score based on the input player, where certain players are
 * assigned specific scores.
 * @returns the score based on the player input. If the player is 'A' or 'X', the function returns 1.
 * If the player is 'B' or 'Y', the function returns 2. If the player is 'C' or 'Z', the function
 * returns 3.
 */
function getScores(player) {
  if (player === 'A' || player === 'X') {
    return 1;
  }

  if (player === 'B' || player === 'Y') {
    return 2;
  }

  if (player === 'C' || player === 'Z') {
    return 3;
  }
}

/**
 * The function determines the winner or loser based on the scores of two players in a
 * rock-paper-scissors game.
 * @returns the score of the second player.
 */
function winnerOrLooser(players) {
  if (getScores(players[0]) === getScores(players[1])) {
    return getScores(players[1]) + 3;
  }

  if (
    (getScores(players[0]) === moves.rock &&
      getScores(players[1]) === moves.paper) ||
    (getScores(players[0]) === moves.paper &&
      getScores(players[1]) === moves.scissors) ||
    (getScores(players[0]) === moves.scissors &&
      getScores(players[1]) === moves.rock)
  ) {
    return getScores(players[1]) + 6;
  }

  return getScores(players[1]);
}

/**
 * The function `getSumOfMoves` calculates the sum of the moves in an array by calling the
 * `winnerOrLooser` function for each element.
 */
const getSumOfMoves = (arr) =>
  arr.reduce((acc, curr) => acc + winnerOrLooser(curr), 0);

const sumOfMoves = getSumOfMoves(lines); // 14297

// part II
const scoreValues = {
  'A X': 3,
  'A Y': 4,
  'A Z': 8,
  'B X': 1,
  'B Y': 5,
  'B Z': 9,
  'C X': 2,
  'C Y': 6,
  'C Z': 7,
};

const getScore = (turn) => scoreValues[turn];
const scores = input.map(getScore);
const totalScore = scores.reduce((sum, num) => sum + num, 0); // 10498

export const DaySecond = () => {
  return (
    <Card.Body>
      <Card.Title>
        Day II: Rock Paper Scissors{' '}
        <Card.Link
          href='https://adventofcode.com/2022/day/2'
          target='_blank'
          rel='noopener noreferrer'
        >
          day 2
        </Card.Link>
      </Card.Title>
      <Card.Subtitle className='mb-2 text-muted'>Part I</Card.Subtitle>
      <Card.Text>
        What would your total score be if everything goes exactly according to
        your strategy guide?: <strong>{sumOfMoves}</strong>
      </Card.Text>
      <Card.Subtitle className='mb-2 text-muted'>Part II</Card.Subtitle>
      <Card.Text>
        Following the Elf's instructions for the second column, what would your
        total score be if everything goes exactly according to your strategy
        guide? : <strong>{totalScore}</strong>
      </Card.Text>
    </Card.Body>
  );
};
