import { thirdDayInput } from './inputs/day_3';
import Card from 'react-bootstrap/Card';

// Part I
// index of letters from 1('a') - to 52('Z')
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

// Split the string by line breaks
const splittedList = thirdDayInput.split('\n');

// every line divided on two parts
const dividedOnTwoPartsList = splittedList.map(elem => [elem.slice(0, elem.length / 2), elem.slice(elem.length / 2)]);

// all the matches
const matches = dividedOnTwoPartsList.map(line => [...line[0]].filter(letter => line[1].includes(letter) && letter)[0]);

const convertLetterToIndexArray = (arr) => arr.map(letter => letter = ([...alphabet].indexOf(letter) + 1));

const getTheSum = (arr) => arr.reduce((acc, num) => acc + num, 0);

// an array of indexes of all letters in an array
const letterIndexesArr = convertLetterToIndexArray(matches);

// sum of all indexes of letters 
const sumIndexes = getTheSum(letterIndexesArr); // 7850

// Part II
// An array with a subarray
const groupedByThreeList = [];

for (let i = 0; i < splittedList.length; i += 3) {
  // Create a subarray with three parts
  const subarray = [splittedList[i], splittedList[i + 1], splittedList[i + 2]];

  // Push the subarray into the result array
  groupedByThreeList.push(subarray);
};

/* Finding the letters that appear in all three parts of each subarray in `groupedByThreeList`. */
const repeats = groupedByThreeList.map(line =>
  [...line[0]].filter(letter =>
    (line[1].includes(letter) && line[2].includes(letter) && letter)[0])[0]);

const indexArray = convertLetterToIndexArray(repeats);

// sum of all indexes of letters 
const sumOfIndexes = getTheSum(indexArray); // 2581

export const DayThird = () => {
  return (
      <Card.Body>
        <Card.Title>Day III: Rucksack Reorganization  <Card.Link href="https://adventofcode.com/2022/day/3" target="_blank" rel="noopener noreferrer">day 3</Card.Link></Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Part I</Card.Subtitle>
        <Card.Text>Find the item type that appears in both compartments of each rucksack. What is the sum of the priorities of those item types?: <strong>{sumIndexes}</strong></Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Part II</Card.Subtitle>
        <Card.Text>Find the item type that corresponds to the badges of each three-Elf group. What is the sum of the priorities of those item types? : <strong>{sumOfIndexes}</strong></Card.Text>
      </Card.Body>
  );
}

