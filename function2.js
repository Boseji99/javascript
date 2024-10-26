let globalValue = "Global";

function makeFunc() {
    let localValue = "Local";
    return function() {
        return localValue;
    };
}

const myFunc = makeFunc();
console.log(myFunc());

function countItems(...items) {
    return items.length;
}

console.log(countItems(1, 2, 3, 4));
console.log(countItems("a", "b"));

function createGreeter(greeting) {
    return function(name) {
        return `${greeting}, ${name}`;
    };
}

const sayHello = createGreeter("Hello");
console.log(sayHello("Alice"));

function createSentence(subject = "Someone", verb = "does", object = "something") {
    return `${subject} ${verb} ${object}.`;
}

console.log(createSentence("The cat", "jumps", "high"));
console

.log(createSentence("The dog"));

function makeArray(...args) {
    return args;
}

console.log(makeArray(1, 2, 3, 4));

let count = 10;

function incrementCounter() {
    return ++count;
}

console.log(incrementCounter());
console.log(incrementCounter());

function greet(name = "Guest") {
    return `Hello, ${name}`;
}

console.log(greet(undefined));
console.log(greet("John"));

function concatStrings(...strings) {
    return strings.join(", ");
}

console.log(concatStrings("apple", "banana", "cherry"));
console.log(concatStrings());

let message = "Global";

function outer() {
    let message = "Outer";
    function inner() {
        let message = "Inner";
        return message;
    }
    return inner();
}

console.log(outer());

const user = {
    name: "Alice",
    getName: function() {
        return this.name;
    }
};

const getName = user.getName;
console.log(getName());

function showDetails(id, ...details) {
    return details;
}

console.log(showDetails(101, "Alice", "Developer", "NYC"));

function calculateDiscount(price, discount = 10) {
    return price - (price * discount) / 100;
}

console.log(calculateDiscount(100));
console.log(calculateDiscount(200, 20));

function secretHolder(secret) {
    return function() {
        return secret;
    };
}

const revealSecret = secretHolder("My Secret");
console.log(revealSecret());

var globalVar = "I am global";

function outerFunction() {
    var localVar = "I am local";
    return function innerFunction() {
        return globalVar + " and " + localVar;
    };
}

console.log(outerFunction()());

const divide = function(a = 10, b = 2) {
    return a / b;
};

console.log(divide(20, 4));
console.log(divide(15));

const person = {
    firstName: "John",
    lastName: "Doe",
    fullName() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

function sumAll(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}

console.log(sumAll(1, 2, 3, 4));
console.log(sumAll());

function createPowerFunction(power) {
    return function(base) {
        return Math.pow(base, power);
    };
}

const square = createPowerFunction(2);
console.log(square(4));

function displayScore(score = 100) {
    return score || 0;
}

console.log(displayScore(0));
console.log(displayScore(80));

function mixAndMatch(...args) {
    return args.join("-");
}

console.log(mixAndMatch(1, "apple", true));

let greeting = "Hello";

function greetUser() {
    return function(name) {
        return `${greeting}, ${name}`;
    };
}

const greet = greetUser();
console.log(greet("Alice"));

let x = 5;

function testScope() {
    let x = 10;
    return x;
}

console.log(testScope());
console.log(x);

const restaurant = {
    name: "Pizza Place",
    order(...items) {
        return `Ordered: ${items.join(", ")}`;
    }
};

console.log(restaurant.order("Pizza", "Pasta"));

function welcomeMessage(name = "Guest") {
    return `Welcome, ${name}!`;
}

console.log(welcomeMessage());
console.log(welcomeMessage("John"));

function createCounter(start = 0) {
    let count = start;
    return function() {
        return ++count;
    };
}

const counter = createCounter(5);
console.log(counter());
console.log(counter());

function findMax(...numbers) {
    return Math.max(...numbers);
}

console.log(findMax(10, 20, 30, 40));
console.log(findMax());

function createUser(name, age) {
    return {
        name,
        age
    };
}

const user = createUser("Alice", 25);
console.log(user);

function calculateTotal(price, tax = price * 0.1) {
    return price + tax;
}

console.log(calculateTotal(100));
console.log(calculateTotal(200, 30));

function outer() {
    let outerVar = "Outer";

    function inner() {
        let innerVar = "Inner";
        return outerVar + " " + innerVar;
    }

    return inner();
}

console.log(outer());

function countArgs(...args) {
    return args.length;
}

console.log(countArgs(1, 2, 3));
console.log(countArgs("a", "b", "c", "d"));

const userProfile = {
    name: "John",
    greet(greeting = "Hi") {
        return `${greeting}, ${this.name}`;
    }
};

console.log(userProfile.greet());
console.log(userProfile.greet("Hello"));

function sortNumbers(...numbers) {
    return numbers.sort((a, b) => a - b);
}

console.log(sortNumbers(10, 5, 2, 8));

function bankAccount(initialBalance) {
    let balance = initialBalance;
    return function() {
        return balance;
    };
}

const account = bankAccount(1000);
console.log(account());

function processPayment(amount, fee = 2, discount = 0) {
    return amount + fee - discount;
}

console.log(processPayment(100, undefined, 10));
console.log(processPayment(200, 5));

function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
console.log(double(5));

