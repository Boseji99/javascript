// let numbers = [1, 2, 3, 4];
// let double = numbers.map((num)=> num * 2);
// console.log(double)

// let numbers = [5, 8, 12, 15, 18];
// let filternum = numbers.filter((num)=> num%2 == 0);
// console.log(filternum)

// let arr = [10, 20, 30, 40];
// let sum = arr.reduce((acc, num) => acc + num, 0);
// console.log(sum); 

// let arr = [8, 12, 16, 20, 24];
// let findgreater = arr.find((num)=> num > 15);
// console.log(findgreater)

// let arr = [2, 4, 6, 9, 12];
// let found = arr.findIndex((num)=> num%2 != 0);
// console.log(found)

// let arr = [10, 20, 30, 150];
// let found = arr.some((num)=> num > 100);
// console.log(found)

// let arr = [5, 10, 15, 20];
// let found = arr.every((num)=> num%5 == 0);
// console.log(found)

// let numbers = [3, 5, 1, 4, 2]; 
// let accending = numbers.sort((a,b) => a - b); 
// console.log(accending); 

// let arr = ["cat", "dog", "fish", "elephant"]; 
// let found = arr.filter(word => word.length > 3); 
// console.log(found); 

// let prices = [10, 20, 30]; 
// let taxprices = prices.map(price => price * 1.10);
// console.log(taxprices) 

// let numbers = [2, 3, 4]; 
// let mul = numbers.reduce((acc, num) => acc * num);
// console.log(mul) 

// let fruits = ["banana", "apple", "cherry"];
// fruits.sort();
// console.log(fruits);

// let numbers = [12, 24, 35, 47]; 
// let divcheck = numbers.some((num) => num%5 == 0);
// console.log(divcheck) 

// let numbers = [7, -3, 9, -8, 2]; 
// let found = numbers.find((num) => num < 0);
// console.log(found) 
 
// let numbers = [9, 18, 27, 36];
// let check = numbers.every((num) => num%9 == 0);
// console.log(check) 

// let arr = ["Alice", "Bob", "Amanda", "Carl"]; 
// let newarr = arr.filter(name => name.startsWith("A"));
// console.log(newarr) 

// let numbers = [1, 2, 3, 4, 5]; 
// let squares = numbers.map((num) => num * num);
// console.log(squares) 

// let numbers = [50, 20, 10, 40, 30]; 
// let descending = numbers.sort((a,b) => b - a);
// console.log(descending) 

// let arr = ["Hello", " ", "World"]; 
// let newarr = arr.reduce((acc, current) => acc + current, "");
// console.log(newarr) 

// let arr = ["John", "Doe"]; 
// let newarr = arr.map(name => name.toLowerCase());
// console.log(newarr) 

// let numbers = [150, 80, 90, 300]; 
// let found = numbers.filter((num) => num < 100);
// console.log(found) 

// let arr = ["dog", "cat", "bird"]; 
// let found = arr.findIndex(animal => animal === "cat");
// console.log(found) 

// let numbers = [10, 20, 30, 40];
// let check = numbers.every((num) => num > 5);
// console.log(check)

// let numbers = [25, 35, 45];
// let check = numbers.some(num => num > 40);
// console.log(check)

// let numbers = [12, 15, 19, 21, 24];
// let check = numbers.filter(num => num%2 != 0);
// console.log(check)

// let arr = ["One", "Two", "Three"];
// let newarr = arr.map(item => item + " Item");
// console.log(newarr)

// let arr = ["b", "a", "c", "e", "d"] ;
// arr.sort();
// console.log(arr)

// let numbers = [3, 6, 2, 8, 5];
// let found = numbers.reduce((max, current) => (current > max ? current : max), numbers[0]);
// console.log(found)

// let numbers =  [50, 120, 90, 150];
// let check = numbers.find(num => num > 100);
// console.log(check)

let arr = ["dog", "horse", "cat", "sheep"];
let found = arr.find(word => word.length > 4);
console.log(found);
