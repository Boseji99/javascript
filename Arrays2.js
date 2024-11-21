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

const people = [{ first: "John", last: "Doe" }];
const fullNames = people.map(person => `${person.first} ${person.last}`);
console.log(fullNames);

