//deep object merging using reduce:
// const arr = [{ a: 1 }, { b: 2 }, { c: 3 }, { d: 4 }];
// let mergeobj = arr.reduce((acc, obj) => {
//   return { ...acc, ...obj };
// }, {});
// console.log(mergeobj);

// const isPrime = (num) => {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   };

//   const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   const primeNumbers = numbers.filter(isPrime);
//   console.log(primeNumbers);

// const factorial = (num) => {
//     if (num === 0 || num === 1) return 1;
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//       result *= i;
//     }
//     return result;
//   };

//   const numbers = [1, 2, 3, 4];
//   const factorials = numbers.map(factorial);
//   console.log(factorials);

// const people = [{ name: "John" }, { name: "Alex" }];
// const startsWithJ = people.find(person => person.name.startsWith("J"));
// console.log(startsWithJ);

// const data = [
//     { age: 25, score: 90 },
//     { age: 20, score: 85 },
//     { age: 25, score: 95 },
//     { age: 20, score: 80 }
//   ];

//   const sortedData = data.sort((a, b) => {
//     if (a.age !== b.age) {
//       return a.age - b.age;
//     }
//     return b.score - a.score;
//   });

//   console.log(sortedData);

// let arr = [1, 2, 3, 4, 5, -7, -9, -3, 15, 6, 9];
// let maxi = arr.reduce((acc, x) => (x > acc ? (acc = x) : acc), -Infinity);
// console.log(maxi);

// const arr = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// const flatArr = arr.reduce((acc, x) => [...acc, ...x], []);
// console.log(flatArr);

// const emptyArray = [];
// const index = emptyArray.findIndex(item => item.value < 5);
// console.log(index);

// const arr = ["apple", "banana", "kiwi", "japan", "apple", "apple", "kiwi"];
// let ans = arr.reduce((acc, x) => {
//   acc[x] = (acc[x] || 0) + 1;
//   return acc;
// }, {});
// console.log(ans);

// const arr = ["google", "github"];
// let urls = arr.map((x) => `https://${x}.com`);
// console.log(urls);

// const arr = [[1, 2, 3], 4, [5, 6, 7], [8, 9, 10], 11, 12];
// let p = arr.filter((x) => !Array.isArray(x));
// console.log(p);

// custom find function using reduce
// const arr = [1, 2, 3, 5, 6];

// const customfindfxn = (arr) => {
//   return arr.reduce((acc, x) => (x > 3 && !acc ? x : acc), null);
// };
// let res = customfindfxn(arr);
// console.log(res);

// const words = ["apple", "orange", "banana", "kiwi"];
// const countVowels = (word) => {
//   const vowels = "aeiou";
//   return word
//     .toLowerCase()
//     .split("")
//     .filter(char => vowels.includes(char)).length;
// };

// const sortedWords = words.sort((a, b) => countVowels(a) - countVowels(b));
// console.log(sortedWords);

// const emails = ["test@domain.com", "admin@site.org"];

// const isValidEmail = (email) => {
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(email);
// };

// const allValid = emails.every(isValidEmail);
// console.log(allValid);

//pair sum to 10
// const arr = [2, 19, 7, 5, 9];
// let pair = arr.find((num, ind, arr) => arr.slice(ind + 1).includes(10 - num));
// console.log(pair);

//group array into chunks of given size
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const chunkSize = 2;
// const chunks = [];
// for (let i = 0; i < arr.length; i += chunkSize) {
//   chunks.push(arr.slice(i, i + chunkSize));
// }
// console.log(chunks);

// reduce to merge two arrays into an object
// const arr1 = ["a", "b", "c"];
// const arr2 = [1, 2, 3];
// let obj = arr1.reduce((acc, x, ind) => {
//   acc[ind] = x;
//   return acc;
// }, {});
// console.log(obj);

// const compressToUnique = (arr) => {
//     return arr.reduce((unique, item) => {
//       if (!unique.includes(item)) {
//         unique.push(item); 
//       }
//       return unique;
//     }, []); 
//   };
  
//   const numbers = [1, 2, 2, 3, 4, 4, 5];
//   const uniqueNumbers = compressToUnique(numbers);
//   console.log(uniqueNumbers); 
  
// const nestedArray = [[1, 2], [3, 4]];
// const singleLevelArray = nestedArray.map(innerArray => innerArray).flat();
// console.log(singleLevelArray); 

// const people = [
//     { id: 1, name: "John" },
//     { id: 2, name: "Jane" },
//     { id: 1, name: "Doe" },
//     { id: 3, name: "Alice" },
//     { id: 2, name: "Bob" }
//   ];

//   const uniquePeople = people.filter((person, index, arr) =>
//     arr.findIndex(p => p.id === person.id) === index
//   );
//   console.log(uniquePeople);

// const str = "programming";
// const mostCommonChar = str.split('').reduce((acc, char) => {
  
//   acc[char] = (acc[char] || 0) + 1;
//   if (acc[char] > acc.maxCount) {
//     acc.maxCount = acc[char];
//     acc.mostCommon = char;
//   }
//   return acc;
// }, { mostCommon: '', maxCount: 0 }).mostCommon;
// console.log(mostCommonChar); 

// const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 30 },
//     { name: "Alice", age: 28 },
//     { name: "Bob", age: 35 }
//   ];
  
//   const maxAge = Math.max(...people.map(person => person.age));
//   const personWithMaxAge = people.find(person => person.age === maxAge);
//   console.log(personWithMaxAge);

// const array = [1, 2, [3, 4], 5];
// const containsNestedArray = array.some(item => Array.isArray(item));
// console.log(containsNestedArray);

// const numbers = [10, 20, 30];
// const double = x => x * 2;
// const addFive = x => x + 5;

// const transformedNumbers = numbers.map(num => addFive(double(num)));
// console.log(transformedNumbers); 
 
// const people = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", age: 30 },
//     { name: "Christopher", age: 22 },
//     { name: "David", age: 28 }
//   ];
  
//   const sortedPeople = people.sort((a, b) => a.name.length - b.name.length);
//   console.log(sortedPeople);
  