import { firstDayInput } from './inputs/day_1';

const groupedNumbers = firstDayInput.split("\n\n");

const getSumOfEachGroup = (group) =>
  group
    .split("\n")
    .map(Number)
    .reduce((sum, num) => sum + num, 0);


const sumOfEachGroup = groupedNumbers.map(getSumOfEachGroup);

const maxSum = Math.max(...sumOfEachGroup)

const sumOfFirstThree = [...sumOfEachGroup]
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((sum, num) => sum + num, 0);

// console.log(sumOfFirstThree); // 208191
// console.log(maxSum); // 71502

export const DayFirst = () => {
  return (
    <div className="App">
      <h1>Day I</h1>
      <h4>Part I : { }</h4>
      <p>Max sum: {maxSum}</p>
      <h4>Part II</h4>
      <p>Sum of first three : {sumOfFirstThree}</p>
    </div>
  );
}
