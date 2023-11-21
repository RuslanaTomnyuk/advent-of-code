import { input } from './inputs/day_1';
import Card from 'react-bootstrap/Card';

const groupedNumbers = input.split('\n\n');

/**
 * The function `getSumOfEachGroup` takes a string of numbers separated by newlines, converts them to
 * an array of numbers, and returns the sum of all the numbers in the array.
 */
const getSumOfEachGroup = (group) =>
  group
    .split('\n')
    .map(Number)
    .reduce((sum, num) => sum + num, 0);

const sumOfEachGroup = groupedNumbers.map(getSumOfEachGroup);

const maxSum = Math.max(...sumOfEachGroup); // 71502

const sumOfFirstThree = [...sumOfEachGroup]
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((sum, num) => sum + num, 0); // 208191

export const DayFirst = () => {
  return (
    <Card.Body>
      <Card.Title>
        Day I: Calorie Counting{' '}
        <Card.Link
          href='https://adventofcode.com/2022/day/1'
          target='_blank'
          rel='noopener noreferrer'
        >
          day 1
        </Card.Link>
      </Card.Title>
      <Card.Subtitle className='mb-2 text-muted'>Part I</Card.Subtitle>
      <Card.Text>
        Find the Elf carrying the most Calories.How many total Calories is that
        Elf carrying?: <strong>{maxSum}</strong>
      </Card.Text>
      <Card.Subtitle className='mb-2 text-muted'>Part II</Card.Subtitle>
      <Card.Text>
        Find the top three Elves carrying the most Calories. How many Calories
        are those Elves carrying in total? : <strong>{sumOfFirstThree}</strong>
      </Card.Text>
    </Card.Body>
  );
};
