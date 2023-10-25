import { thirdDayInput } from './inputs/day_3';

const test = `vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`;

// Part I

// index of letters from 1('a') - to 52('Z')
const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

// Split the string by line breaks
const splittedList = thirdDayInput.split('\n');

// every line divided on two parts
const dividedOnTwoPartsList = splittedList.map(elem => [elem.slice(0, elem.length / 2), elem.slice(elem.length / 2)]);

// all the matches
const matches = dividedOnTwoPartsList.map(line => [...line[0]].filter(letter => line[1].includes(letter) && letter)[0])

const convertLetterToIndexArray = (arr) => arr.map(letter => letter = ([...alphabet].indexOf(letter) + 1))

const getTheSum = (arr) => arr.reduce((acc, num) => acc + num, 0);

// an array of indexes of all letters in an array
const letterIndexesArr = convertLetterToIndexArray(matches);

// sum of all indexes of letters 
const sumIndexes = getTheSum(letterIndexesArr);
// console.log('sum', sumIndexes); // 7850

// Part II
// An array with subarray
const groupedByThreeList = [];

for (let i = 0; i < splittedList.length; i += 3) {
  // Create a subarray with three parts
  const subarray = [splittedList[i], splittedList[i + 1], splittedList[i + 2]];

  // Push the subarray into the result array
  groupedByThreeList.push(subarray);
}


const repeats = groupedByThreeList.map(line =>
  [...line[0]].filter(letter =>
    (line[1].includes(letter) && line[2].includes(letter) && letter)[0])[0])

const indexArray = convertLetterToIndexArray(repeats);

// sum of all indexes of letters 
const sumOfIndexes = getTheSum(indexArray);
// console.log('sum', sumOfIndexes); // 2581

export const DayThird = () => {
  return (
    <div className="App">
      <h1>Day III</h1>
      <h4>Part I</h4>
      <p>Sum of all indexes: <strong>{sumIndexes}</strong></p>
      <h4>Part II</h4>
      <p>The sum of the priorities of all item types: <strong>{sumOfIndexes}</strong></p>
    </div>
  );
}

