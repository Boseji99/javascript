let x = 5;
function checkScope() {
  let x = 10;
  console.log(x);
}
checkScope();
console.log(x);

function hoistParam(param) {
    console.log(param);
    var param = 20;
  }
  hoistParam(10);

let x = 1;
function outer() {
  let x = 2;
  function inner() {
    console.log(x);
  }
  inner();
}
outer();

function testArgs(a, b, c) {
    console.log(arguments[0], arguments[1], arguments[2]);
  }
  testArgs(1, 2);

let x = 5;
{
  let x = 10;
  console.log(x);
}
console.log(x);

function outer() {
    let a = 1;
    function inner() {
      console.log(a);
    }
    return inner;
  }
  let result = outer();
  result();

console.log(typeof foo);
var foo = function() {
  return 5;
};

function hoistFunc() {
    console.log(foo());
    function foo() {
      return 10;
    }
  }
  hoistFunc();

function createFunction() {
  let count = 0;
  return function() {
    return ++count;
  };
}

const increment = createFunction();
console.log(increment());
console.log(increment());

let x = 10;
function checkScope() {
  let x = 20;
  console.log(x);
}
checkScope();
console.log(x);

(function() {
    var x = 5;
  })();
  console.log(x);

function outerFunction() {
  var outerVar = "I'm outer";
  return function innerFunction() {
    console.log(outerVar);
  };
}
outerFunction()();

console.log(typeof func);
var func = function() {
  return 5;
};

let x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);

function counter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const increment = counter();
console.log(increment());
console.log(increment());

function testHoisting(param) {
  console.log(param);
  var param = 20;
}
testHoisting(10);

let a = 1;
function outer() {
  let a = 2;
  function inner() {
    console.log(a);
  }
  inner();
}
outer();

function createCounter() {
  let count = 0;
  return {
    increment: function() {
      count++;
      console.log(count);
    },
    decrement: function() {
      count--;
      console.log(count);
    }
  };
}

const counter = createCounter();
counter.increment();
counter.decrement();

let a = 1;
function outerFunc() {
  let a = 2;
  return function() {
    console.log(a);
  };
}
let result = outerFunc();
result();

console.log(test());
function test() {
  return 5;
}

function createMultiplier(multiplier) {
  return function(num) {
    return num * multiplier;
  };
}

let double = createMultiplier(2);
console.log(double(4));

var x = 10;
if (true) {
  let x = 20;
  console.log(x);
}
console.log(x);

function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}

let counter = createCounter();
console.log(counter());
console.log(counter());

console.log(typeof func);
var func = function() {
  return 10;
};

function scopeTest() {
  console.log(x);
  var x = 10;
}
scopeTest();

function multiplierFactory(factor) {
  return function(num) {
    return num * factor;
  };
}
let double = multiplierFactory(2);
console.log(double(5));

let x = 10;
function outerFunc() {
  console.log(x);
}
function test() {
  let x = 20;
  outerFunc();
}
test();
