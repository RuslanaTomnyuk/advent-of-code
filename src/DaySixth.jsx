import { input } from "./inputs/day_6";
import Card from 'react-bootstrap/Card';

/**
 * The function "isUnique" checks if a string has all unique characters.
 * @param string - The parameter "string" is a string value that represents a sequence of characters.
 */
const isUnique = (string) => new Set(string).size === string.length;

/**
 * The function `markerDetection` takes an input string and a distinctCharactersLength parameter, and returns the index of the first occurrence of a unique substring of length distinctCharactersLength
 * in the input string.
 * @param [distinctCharactersLength=4] - The parameter `distinctCharactersLength` represents the number
 * of distinct characters that you want to detect in the input string.
 * @returns the index of the first occurrence of a distinct set of characters of length `distinctCharactersLength` in the `input` string.
 */
const markerDetection = (distinctCharactersLength = 4) => {
  for (let i = 0; i < input.length; i++) {
    const slicedByLength = input.slice(i, i + distinctCharactersLength)
    if (isUnique(slicedByLength)) {
      return input.indexOf(slicedByLength) + distinctCharactersLength
    }
  }
};

const totalCharactersNeeded = markerDetection(); // 1140
const totalCharactersNeededPartTwo = markerDetection(14); // 3495

export const DaySixth = () => {
  return (
      <Card.Body>
        <Card.Title>Day VI: Tuning Trouble <Card.Link href="https://adventofcode.com/2022/day/6" target="_blank" rel="noopener noreferrer">day 6</Card.Link></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Part I</Card.Subtitle>
        <Card.Text>How many characters need to be processed before the first start-of-packet marker is detected?: <strong>{totalCharactersNeeded}</strong></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Part II</Card.Subtitle>
        <Card.Text>How many characters need to be processed before the first start-of-message marker is detected?: <strong>{totalCharactersNeededPartTwo}</strong></Card.Text>
      </Card.Body>
  );
}