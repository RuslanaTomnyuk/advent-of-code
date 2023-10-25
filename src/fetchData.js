{}
// export const BASE_URL = 'https://adventofcode.com/2022/day/1/input';

// const myInit = {
//   method: "GET",
//   headers: {
//     Accept: "text/plain",
//   },
//   mode: "cors",
//   cache: "default",
// };

// export async function fetchData(apiUrl) {
//   try {
//     const response = await fetch(apiUrl, {
//       method: "GET",
//       mode: "no-cors", // no-cors, *cors, same-origin
//       cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//       credentials: "same-origin", // include, *same-origin, omit
//       headers: {
//         "Content-Type": "text/plain",
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       redirect: "follow", // manual, *follow, error
//       referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       // body: JSON.stringify(data), // body data type must match "Content-Type" header
//     });

//     console.log('response', response);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json()
//     return data;
//   } catch (error) {
//     console.error('Error fetching data:', error)
//     throw error;
//   }
// };

// const input = fetchData(BASE_URL);

// // async function loadData() {
// //   const fetchedData = await fetchData(BASE_URL);
// //   return fetchedData
// // }
// console.log(input);