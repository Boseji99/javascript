// const nestedArray = [[1, 2], [3, 4], [5, 6]];
// const flattenedArray = nestedArray.reduce((accumulator, currentValue) => {
//   return accumulator.concat(currentValue);
// }, []);
// console.log(flattenedArray);

// const arr = [1, 2, 3, 1, 2, 4, 5];
// const uniqueArr = arr.filter((item, index) => arr.indexOf(item) === index);
// console.log(uniqueArr);

// const words = ["apple", "banana", "cherry"];
// const lengths = words.map(word => word.length);
// console.log(lengths);

// let numbers = [14, 28, 35, 21];
// let found = numbers.findIndex(num => num%7 === 0);
// console.log(found);

// let arr = ["apple", "banana", "grape"];
// let check = arr.some(word => word === 'banana');
// console.log(check);

// const str = "hello world";
// const charCount = str.split("").reduce((acc, char) => {
//   acc[char] = (acc[char] || 0) + 1;
//   return acc;
// }, {});
// console.log(charCount);

// let arr = [{age: 30}, {age: 25}, {age: 35}];
// let sortedarr = arr.sort((a, b) => a.age - b.age);
// console.log(sortedarr) 

// let people = [{age: 20}, {age: 30}, {age: 40}];
// let older = people.filter(person => person.age > 25)
// console.log(older)

// const people = [{ first: "John", last: "Doe" }];
// const fullNames = people.map(person => `${person.first} ${person.last}`);
// console.log(fullNames);

// let arr = [{id: 1}, {id: 3}, {id: 5}];
// let found = arr.find(item => item.id === 3);
// console.log(found)

// const numbers = [1, 2, 3, 4, 5];
// const evenSquares = numbers.filter(num => num % 2 === 0).map(num => num ** 2);   
// console.log(evenSquares);

// let arr =  ["short", "longer", "longest"];
// let sortedarr = arr.sort((a, b) => a.length - b.length);
// console.log(sortedarr)

// function customMap(array, callback) {
//   return array.reduce((accumulator, currentValue, index, originalArray) => {
//     accumulator.push(callback(currentValue, index, originalArray));
//     return accumulator;
//   }, []);
// }

// const numbers = [1, 2, 3, 4];
// const squares = customMap(numbers, num => num * num);
// console.log(squares); 

// let person =  [{age: 25}, {age: 30}];
// let check = person.every(person => person.age > 20);
// console.log(check)

// const emails = ["user1@domain.com", "user2@site.net"];
// const domains = emails.map(email => email.split('@')[1]);
// console.log(domains);

// let numbers = [2, 8, 11, 15];
// let found = numbers.findIndex(num => num > 10 )
// console.log(found)

// const str = "javascript";
// const reversed = str.split('').reduce((accumulator, currentChar) => currentChar + accumulator, "");
// console.log(reversed);

// const numbers = [-10, 20, -30, 40, 50];
// const positiveNumbers = numbers.filter(num => num > 0);
// console.log(positiveNumbers);

// let arr = [NaN, 5, 10];
// let check = arr.some(item => Number.isNaN(item));
// console.log(check)    

// const words = ["apple", "banana"];
// const noVowels = words.map(word => word.replace(/[aeiouAEIOU]/g, ''));
// console.log(noVowels);

// const dates = ["2024-10-01", "2022-03-01"];
// const sortedDates = dates.sort((a, b) => new Date(a) - new Date(b));
// console.log(sortedDates);
 
// function factorial(n) {
//     return [...Array(n).keys()]
//       .map(num => num + 1) 
//       .reduce((acc, current) => acc * current, 1);
//   }
//   console.log(factorial(5));

// let words = ["eye", "sky", "tooth"];
// let noVowels =  words.filter(word => /^[aeiouAEIOU]+$/.test(word));
// console.log(noVowels)

// const words = ["car", "madam", "racecar"];
// const firstPalindrome = words.find(word => word === word.split('').reverse().join(''));
// console.log(firstPalindrome); 

// const numbers = [1, 2, 3];
// const numberWords = numbers.map(num => {
//   switch (num) {
//     case 1: return "one";
//     case 2: return "two";
//     case 3: return "three";
//     default: return "";
//   }
// });
// console.log(numberWords); 

// function customFilter(array, callback) {
//     return array.reduce((accumulator, currentValue) => {
//       if (callback(currentValue)) {
//         accumulator.push(currentValue);
//       }
//       return accumulator;
//     }, []);
//   }
  
//   const numbers = [1, 2, 3, 4, 5];
//   const evenNumbers = customFilter(numbers, num => num % 2 === 0);
//   console.log(evenNumbers); 

// const people = [
//     { name: "John", age: 25 },
//     { name: "Alexander", age: 30 },
//     { name: "Bob", age: 20 }
//   ];
//   const sortedPeople = people.sort((a, b) => a.name.length - b.name.length);  
//   console.log(sortedPeople);

// const strings = ["123", "abc", "45"];
// const hasOnlyNumbers = strings.some(str => /^[0-9]+$/.test(str));
// console.log(hasOnlyNumbers); 

// const objects = [{ id: 1 }, { id: 2 }];
// const allHaveId = objects.every(obj => obj.hasOwnProperty('id'));
// console.log(allHaveId);

  
