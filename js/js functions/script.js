// javascript functions

// function functionName(parameters(variables)){
// code to be executed
// }

function addition(a, b) {
  console.log(a + b);
}

// addition(12, 23);
// addition(124, 233);
// addition(125, 273);
// addition(152, 238);

// named funciton  | function declaration
function greeting(name) {
  console.log("welcome", name);
}

// greeting("ravi");

// function expressions : anonymous function && arrow function

// anonymous function
var multiply = function (a, b) {
  console.log(a * b);
};
// multiply(12, 23);

// arrow function
// var divide = (a, b) => {
//   console.log(a / b);
// };

// divide(123, 2);

// when exactly a single parameter is passed : ommit "()"
var calcSquare = (num) => {
  console.log(num ** 2);
};

// all your function does is return something  : "{}" and "return" can be ommited
var calcCube = (num) => num ** 3;
