import { input } from './inputs/day_4';
import Card from 'react-bootstrap/Card';

const splittedList = input.split('\n');

const formattedList = splittedList.map((line) =>
  line.split(',').map((line) => line.split('-').map(Number))
);

/**
 * The function checks if one array is fully contained within another array.
 * @returns a boolean value indicating whether the firstPart array fully contains the secondPart array or vice versa.
 */
function fullyContained([firstPart, secondPart]) {
  return (
    (firstPart[0] <= secondPart[0] && firstPart[1] >= secondPart[1]) ||
    (secondPart[0] <= firstPart[0] && secondPart[1] >= firstPart[1])
  );
}

/**
 * The function checks if the first part of an array is partially contained within the second part.
 * @returns The function `partiallyContained` returns a boolean value.
 */
const partiallyContained = ([firstPart, secondPart]) => {
  return firstPart[0] <= secondPart[1] && firstPart[1] >= secondPart[0];
};

/**
 * The function `getFullyContained` returns the number of elements in `formattedList` that pass the `fullyContained` function.
 * @returns Returns the length of an array that is filtered based on
 * the result of calling the `fullyContained` function on each element of the `formattedList` array.
 * The `fullyContained` function is expected to return a boolean value.
 */
const getFullyContained = () => {
  return formattedList.map(fullyContained).filter(Boolean).length;
}; // 518

/**
 * The function "overlappingPairs" returns the number of pairs in a formatted list that are partially contained within each other.
 * @returns Returns the length of an array.
 */
const overlappingPairs = () => {
  return formattedList.map(partiallyContained).filter(Boolean).length;
}; // 909

export const DayFourth = () => {
  return (
    <Card.Body>
      <Card.Title>
        Day IV: Camp Cleanup{' '}
        <Card.Link
          href='https://adventofcode.com/2022/day/4'
          target='_blank'
          rel='noopener noreferrer'
        >
          day 4
        </Card.Link>
      </Card.Title>
      <Card.Subtitle className='mb-2 text-muted'>Part I</Card.Subtitle>
      <Card.Text>
        In how many assignment pairs does one range fully contain the other?:{' '}
        <strong>{getFullyContained()}</strong>
      </Card.Text>
      <Card.Subtitle className='mb-2 text-muted'>Part II</Card.Subtitle>
      <Card.Text>
        In how many assignment pairs do the ranges overlap? :{' '}
        <strong>{overlappingPairs()}</strong>
      </Card.Text>
    </Card.Body>
  );
};
