console.log(typeof test);
var test = function() { return 5; };

let x = 5;
function scopeTest() {
  console.log(x);
  var x = 10;
}
scopeTest();

function createIncrementer() {
    let count = 0;
    return function() {
      return ++count;
    };
  }
  let increment = createIncrementer();
  console.log(increment());
  console.log(increment());

console.log(foo);
var foo = 10;

function blockScope() {
    let x = 10;
    if (true) {
      let x = 20;
      console.log(x);
    }
    console.log(x);
  }
  blockScope();

function outer() {
  var outerVar = "outer";
  return function inner() {
    console.log(outerVar);
  };
}
var innerFunc = outer();
innerFunc();

let a = 10;
function shadow() {
  let a = 5;
  console.log(a);
}
shadow();
console.log(a);

function outerFunc() {
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
  
let counter = outerFunc();
counter.increment();
counter.decrement();

function outerFunc() {
  let x = 10;
  function innerFunc() {
    console.log(x);
  }
  return innerFunc;
}
let result = outerFunc();
result()

function hoistingTest() {
    console.log(x);
    var x = 10;
  }
  hoistingTest();

function add(a = 5, b = a * 2) {
  return a + b;
}
console.log(add(3));
console.log(add());

function createCounter() {
    let count = 0;
    return function() {
      return ++count;
    };
  }
  const counter = createCounter();
  console.log(counter());
  console.log(counter());

function testHoist() {
  console.log(foo);
  var foo = 10;
}
testHoist();

(function() {
    var x = 5;
  })();
  console.log(x);

  function multiplierFactory(factor) {
    return function(num) {
      return num * factor;
    };
  }
  let double = multiplierFactory(2);
  console.log(double(4));

