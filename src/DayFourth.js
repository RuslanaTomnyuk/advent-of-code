import { input } from "./inputs/day_4";

const test = `2 - 4, 6 - 8
2 - 3, 4 - 5
5 - 7, 7 - 9
2 - 8, 3 - 7
6 - 6, 4 - 6
2 - 6, 4 - 8`

const splittedList = input.split('\n');

const formattedList =
  splittedList.map(line =>
    line
      .split(',')
      .map(line => line.split("-")
        .map(Number))
  )

function fullyContained([firstPart, secondPart]) {
  return (firstPart[0] <= secondPart[0] && firstPart[1] >= secondPart[1]) || (secondPart[0] <= firstPart[0] && secondPart[1] >= firstPart[1]);
}

const partiallyContained = ([firstPart, secondPart]) => {
  return firstPart[0] <= secondPart[1] && firstPart[1] >= secondPart[0];
}

const getFullyContained = () => {
  return formattedList.map(fullyContained).filter(Boolean).length
}
// console.log('getFullyContained', getFullyContained); // 518

const overlappingPairs = () => {
  return formattedList.map(partiallyContained).filter(Boolean).length
};
// 909

export const DayFourth = () => {
  return (
    <div className="App">
      <h1>Day IV</h1>
      <h4>Part I</h4>
      <p>In how many assignment pairs does one range fully contain the other? <strong>{getFullyContained()}</strong></p>
      <h4>Part II</h4>
      <p>In how many assignment pairs do the ranges overlap? <strong>{overlappingPairs()}</strong></p>
    </div>
  );
}
