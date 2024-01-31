let x = 5;
let y = 2;

// addition
let sum = x + y;
console.log("sum =", sum);

// subtraction
let difference = x - y;
console.log("difference =", difference);

//multiplication
let mul = x * y;
console.log("mul =", mul);

// division
let division = x / y;
console.log("division =", division);

// remainder - modulus
let remainder = x % y;
console.log("remainder =", remainder);

// String Concatenation
console.log("Hello" + " " + "World");

//Logical Expressions
let sunny = true;
let cloudy = false;

// && - AND
console.log("sunny and cloudy:", sunny && cloudy);

// || - OR
console.log("Sunny or cloudy:", sunny || cloudy);

//  ! -  NOT
console.log("Not sunny:", !sunny);

// Assignment Expressions - =

let a = 10;
let b = 5;

// Addition Compound
a += b;
console.log("sum =", a);

a -= b;
console.log("difference =", a);

a /= b;
console.log("div =", a);

a *= b;
console.log("mul =", a);

// Function Call Expressions
function myFunction(num1, num2) {
    console.log(num1 + num2);
}
myFunction(3, 6);

function myDifference(par1, par2) {
    console.log(par1 - par2);
}
myDifference(99, 1);

function myDiv(num1, num2) {
    console.log(num1 / num2);
}
myDiv(88, 2);

// arrow function
const mySumArrow = (num1, num2) => {
    console.log("Arrow function sum:", num1 + num2);
}

mySumArrow(20, 1);