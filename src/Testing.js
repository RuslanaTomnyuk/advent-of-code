// Input: s = ["h","e","l","l","o"]
// const input = ["H", "a", "n", "n", "a", "h"]
// const reverseString = function (s) {
//   console.log(s);
//   for (let i = 0; i < s.length / 2; i++) {
//     let left = i;
//     let right = s.length - 1 - i; // 5-1 - i
//     [s[left], s[right]] = [s[right], s[left]]
//     console.log('s', s);
//   }

//   // return s;
// };

// console.log('reverseString', reverseString(input));

// const nums = [-4, -1, 0, 3, 10]
// const sortedSquares = function (n) {
//   console.log(n);
//   for (let i = 0; i < n.length / 2; i++) {
//     let left = i;
//     let right = n.length - 1 - i;
//     console.log('n[left]', Math.pow(n[left], 2));
//     console.log('n[right]', Math.pow(n[right], 2));
//     if (n[left] ** 2 > n[right] ** 2) {
//       [n[left], n[right]] = [n[right], n[left]]
//     }
//     // else {
//     //   [n[left], n[right]] = [Math.pow(n[left], 2), Math.pow(n[right], 2)]
//     // }

//     console.log('n', n);
//   }

//   return n
// };

// console.log('sortedSquares', sortedSquares(nums));







// const leetcode = 121;

// const isPalindrom = (number) => {
//   const splittedNumber = number.toString().split('').join('')
//   // const reversed = [...splittedNumber].reverse().join('')

//   // console.log(splittedNumber);
//   // console.log(reversed);

//   return splittedNumber === [...splittedNumber].reverse().join('');
// }
// const isPalindrom = (number) => number.toString().split('').join('') === [...splittedNumber].reverse().join('');


// console.log(isPalindrom(leetcode))


// console.log('overlappingPairs', overlappingPairs());
// const result = testing.map(elem => {
//   console.log('elem[0]', elem[0]);
//   return elem[0].map(el => {
//     console.log('el', el);
//     return el
//   })
// })

// console.log('result', result);

// const equalsCheck = (a, b) => a.every((v, i) => {
//   console.log('a,b,v,', a, b, v);
//   return v.includes(b)
// }) || b.every((v, i) => {
//   console.log('a,b,v', a, b, v);
//   return v.includes(a)
// })

// let count = 0
// for (let i = 0; i < testing.length; i++) {
//   const left = testing[i][0].split('')
//   const right = testing[i][1].split('')
//   console.log(equalsCheck(left, right));

//   // console.log('left', left);
//   if (equalsCheck(left, right)) {
//     count++
//   }
// }
// console.log('count', count);
// const data = { "x": 5, "y": 42 }
// const data = {}
// const data = [null, false, 0]
// const data = []


// var isEmpty = (obj) =>
//   (Array.isArray(obj) && !obj.length) || JSON.stringify(obj) === '{}';

// console.log('isEmpty', isEmpty(data));

// const numbers = [0, 1, 2, 2, 3, 0, 4, 2] // [0,1,4,0,3]
// const value = 2

// var removeElement = function (nums, val) {
//   let k = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== val) {
//       nums[k] = nums[i]
//       k++
//     }
//   }
//   console.log('nums', nums);
//   return [k, nums];
// };
// console.log('removeElement', removeElement(numbers, value));

// var removeDuplicates = function (nums) {
//   if (nums.length === 0) {
//     return 0;
//   }

//   let uniqueCount = 1; // [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] !== nums[i - 1]) {
//       nums[uniqueCount] = nums[i];
//       console.log(uniqueCount);
//       uniqueCount++;
//     }
//   }

//   console.log(uniqueCount);
//   return uniqueCount;
// }

// console.log('removeDuplicates', removeDuplicates(numbers));

// Input: nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// Output: 5, nums = [0, 1, 2, 3, 4, _, _, _, _, _]

// const numbers = [1, 7, 3, 4, 6, 4];
// const target1 = 8;

// var twoSum = function (nums, target) {
//   const valueToIndex = {}; // Create an object to store the values and their indices
//   console.log('valueToIndex', valueToIndex);
//   for (let index = 0; index < nums.length; index++) {
//     const num = nums[index]; // 1, 7, 3, 4, 6, 4
//     const searchedNumber = target - num; // 7, 1, 5, 4, 2, 4

//     if (searchedNumber in valueToIndex) { // second circle 2 in {3: 0} - false
//       console.log('valueToIndex[searchedNumber]', valueToIndex[searchedNumber]);
//       return [valueToIndex[searchedNumber], index]; // [0, 1]
//     }

//     console.log('valueToIndex[num]', valueToIndex[num]);

//     valueToIndex[num] = index; // 1:0, 2: 1, 3: 2, 4:3, 
//   }

//   return []; // Return an empty array if no solution is found
// }

// console.log(twoSum(numbers, target1));





export const Testing = () => {
  return (
    <div className="App">
      <h4>Testing</h4>
    </div>
  );
}