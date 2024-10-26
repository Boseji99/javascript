function greet(name = "Guest", message = "Welcome!") {
    return `${name}, ${message}`;
}

console.log(greet("Alice"));
console.log(greet());

function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3));
console.log(sum(5, 10));

function displayInfo(firstName, lastName, age) {
    return `${firstName} ${lastName} is ${age} years old.`;
}

console.log(displayInfo("John", "Doe", 30));
console.log(displayInfo("Jane", "Smith", 25));

const person = {
    name: "Alex",
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet());

function outerFunc(outerValue) {
    return function innerFunc(innerValue) {
        return outerValue + innerValue;
    };
}

const addFive = outerFunc(5);
console.log(addFive(10));
console.log(addFive(3));

let outerVar = "I am outside";

function outer() {
    let outerVar = "I am inside";
    function inner() {
        return outerVar;
    }
    return inner();
}

console.log(outer());

function multiply(factor = 2, ...numbers) {
    return numbers.map(num => num * factor);
}

console.log(multiply(3, 1, 2, 3));
console.log(multiply(undefined, 4, 5));

function combine(first, second, ...rest) {
    return [first, second, ...rest];
}

console.log(combine(1, 2, 3, 4, 5));
console.log(combine("a", "b", "c"));

const counter = {
    count: 0,
    increment() {
        return ++this.count;
    },
    reset() {
        return this.count = 0;
    }
};

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.increment());

let x = 10;

function testScope(a, b = x) {
    let x = 20;
    return a + b;
}

console.log(testScope(5));

const joinStrings = (...strings) => strings.join(" ");

console.log(joinStrings("Hello", "World"));
console.log(joinStrings("", "is", "awesome"));

function calculateArea(length = 5, width = 10) {
    return length * width;
}

console.log(calculateArea(7));
console.log(calculateArea());

function logAll(...args) {
    return args.length;
}

console.log(logAll());
console.log(logAll(1, 2, 3));

const multiply = function(a = 1, b = 2) {
    return a * b;
};

console.log(multiply(3, 4));
console.log(multiply(5));

function createCounter() {
    let count = 0;
    return function() {
        return ++count;
    };
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

let name = "Outside";

function outerFunction() {
    let name = "Inside";
    function innerFunction() {
        return name;
    }
    return innerFunction();
}

console.log(outerFunction());

const car = {
    brand: "Toyota",
    getBrand() {
        return this.brand;
    }
};

const getBrand = car.getBrand;
console.log(getBrand());

function listColors(color1, color2, ...otherColors) {
    return otherColors;
}

console.log(listColors("Red", "Blue", "Green", "Yellow"));


function displayMessage(message = "Hello") {
    return message;
}

console.log(displayMessage(undefined));
console.log(displayMessage("Hi"));

function createMultiplier(multiplier) {
    return function(number) {
        return number * multiplier;
    };
}

const multiplyBy3 = createMultiplier(3);
console.log(multiplyBy3(5));

let value = 10;

const calculate = function(a) {
    let value = 20;
    return a + value;
};

console.log(calculate(5));
console.log(value);

function sumNumbers(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

const numbers = [1, 2, 3];
console.log(sumNumbers(...numbers));

function displayUser(name = "Unknown", age = 18) {
    return `${name} is ${age} years old`;
}

console.log(displayUser("John", 25));
console.log(displayUser(undefined, 30));

let number = 100;

function outerFunc() {
    let number = 50;
    function innerFunc() {
        return number;
    }
    return innerFunc();
}

console.log(outerFunc());

const calculator = {
    add(...nums) {
        return nums.reduce((a, b) => a + b, 0);
    }
};

console.log(calculator.add(5, 10, 15));


function createAdder(x) {
    return function(y) {
        return x + y;
    };
}

const add10 = createAdder(10);
console.log(add10(5));
console.log(add10(20));

function displayInfo(name = "Anonymous", age = 18) {
    return `${name} is ${age} years old.`;
}

console.log(displayInfo(null, 25));
console.log(displayInfo(undefined, null));

function createArray(...items) {
    return items;
}

console.log(createArray(1, 2, 3, 4));
console.log(createArray("a", "b", "c"));

let a = 1;

function outer() {
    let a = 2;
    function inner() {
        return a;
    }
    return inner();
}

console.log(outer());

function calculateTotal(price, tax = price * 0.05) {
    return price + tax;
}

console.log(calculateTotal(100));
console.log(calculateTotal(200, 30));

function outer() {
    let outerVar = "Outer";
    return function middle() {
        let middleVar = "Middle";
        return function inner() {
            return `${outerVar} ${middleVar}`;
        };
    };
}

console.log(outer()()());

function listNumbers(first, second = 2, ...rest) {
    return rest;
}

console.log(listNumbers(1, 3, 4, 5, 6));
console.log(listNumbers(1));

function createCounter(start) {
    let count = start;
    return function() {
        return ++count;
    };
}

const counter1 = createCounter(0);
const counter2 = createCounter(5);

console.log(counter1());
console.log(counter2());

const robot = {
    name: "Robo",
    greet(...messages) {
        return `${this.name}: ${messages.join(" ")}`;
    }
};

console.log(robot.greet("Hello", "World!"));

function getValue(value = 10) {
    return value || 20;
}

console.log(getValue(0));
console.log(getValue(15));

