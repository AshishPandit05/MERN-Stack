console.log("Hello");
console.warn("Worning");
console.error("Error");

console.log("hello world!");
console.log(43 + 42);
console.log(true);
console.log("My age is ", 21);

// variables(cantainer use for store data)
var a = 22;
// var a --> declaration
// var a = 22 --> initialization
console.log(a);
a = 33; // update
console.log(a);

var age = 53;
let name = "AJ";
const PI = 3.14159;
var b = 3;
// operations
console.log(a - b);
console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log(a % b);

var myName = "AJ";
console.log(myName);

// DataType
// Primitive → Single Value
// --String -> "h", "raj", "Ashish"
// --Number -> 10, 30.4, 1, -3
// --Boolean -> true/false
// --Undefined -> every only declare variable value is  by default undefined
// --Null -> nothing(empty), not undefined
// --BigInt (range -> 2^53-1)
// --Symbol
// Non-Primitive → Collection / Complex
// --Object
// --Array
// --Function

// alert("This site for adult"); --> ok
// confirm("are you adult"); --> cancel & ok
var yourAge = prompt("Enter your age : "); // prompt -->  take input
console.log(yourAge);
console.log(typeof yourAge);

// addition
var a = 34 + 33;
// concatination
var b = "43" + "22";

console.log(typeof "hello world!");
console.log(typeof (43 + 42));
console.log(typeof true);
console.log(typeof ("My age is ", 21));

var yourName = prompt("Enter your name : "); // type -> string
console.log(yourName);
var herAge = Number(prompt("Enter her age : ")); // type -> number
console.log(herAge);
// string concatenation
var n1 = "rahul";
var n2 = "kumar";
console.log(n1 + " " + n2);
