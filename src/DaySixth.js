import { input } from "./inputs/day_6";

const isUnique = (string) => new Set(string).size === string.length;

const markerDetection = (distinctCharactersLength) => {
  for (let i = 0; i < input.length; i++) {
    const slicedByLength = input.slice(i, i + distinctCharactersLength)
    if (isUnique(slicedByLength)) {
      return input.indexOf(slicedByLength) + distinctCharactersLength
    }
  }
}
// 1140 / 3495

export const DaySixth = () => {
  return (
    <div className="App">
      <h1>Day VI</h1>
      <h4>Part I</h4>
      <p>How many characters need to be processed before the first start-of-packet marker is detected? <strong>{markerDetection(4)}</strong></p>
      <h4>Part II</h4>
      <p>How many characters need to be processed before the first start-of-message marker is detected? <strong>{markerDetection(14)}</strong></p>
    </div>
  );
}