// Type coercion
// - implicit (automatic change)
// - expllicit (forcefully chage)

var x = "20";
var y = 30;
console.log(x + y); // 2030

var x = "20";
var y = "30";
console.log(x + y); // 2030

var x = "20";
var y = "30";
console.log(x - y); // -10

var x = "20";
var y = 30;
console.log(x - y); // -10

var a = "20";
var b = Number(a);
console.log(b); // 20

var a = "AJ";
var b = Number(a);
console.log(b); // NaN

// Operators
// Arithmetic Operators
console.log("Arithmetic Operators");

let m = 5;
let n = 10;
console.log(m + n);
console.log(m - n);
console.log(m * n);
console.log(m / n);
console.log(m % n);
console.log(m ** n);

// Assignment Operators
console.log(" Assignment Operators");

let num1 = 6;
let num2 = 3;
console.log((num1 += num2));
console.log((num1 -= num2));
console.log((num1 *= num2));
console.log((num1 /= num2));
console.log((num1 %= num2));

// Comparison Operators
let n1 = 10;
let n2 = 10;
console.log(n1 == n2);
console.log(n1 === n2);
console.log("");

let n3 = "10";
let n4 = 10;
console.log(n3 == n4);
console.log(n3 === n4);
console.log("");

let n5 = "10";
let n6 = "10";
console.log(n5 == n6);
console.log(n5 === n6);
console.log("");

let n7 = 10;
let n8 = 20;
console.log(n7 > n8);
console.log(n7 < n8);

// Logical Operator
console.log("Logical Operator");

let b1 = true,
  b2 = false;
console.log(b1 && b2); // both must be true
console.log(b1 || b2); // at least one must be true
console.log(!a); // fliss the value

// pre increment(++a)
// post increment(a++)
console.log("pre/post increment");
let e1 = 5;
console.log(e1++);
console.log(++e1);

// pre decrement (--a)
// post decrement(a--)
console.log("pre/post decrement");

let e2 = 10;
console.log(e2++);
console.log(++e2);

// conditionals
let yourAge = 43;
if (yourAge >= 18) {
  console.log("You are aligible for vote");
} else {
  console.log("You can't give vote");
}

let marks = 85;
if (marks >= 90) {
  console.log("A+");
} else if (marks >= 80) {
  console.log("A");
} else if (marks >= 70) {
  console.log("B");
} else if (marks >= 60) {
  console.log("C");
} else if (marks >= 50) {
  console.log("need practice");
} else {
  console.log("fail");
}

switch (true) {
  case marks >= 90:
    console.log("A+");
    break;
  case marks >= 80:
    console.log("A");
    break;
  case marks >= 70:
    console.log("B");
    break;
  case marks >= 60:
    console.log("C");
    break;
  case marks >= 50:
    console.log("need practice");
    break;
  default:
    console.log("fail");
}

let votingAge = Number(prompt("enter your age :"));
if (votingAge >= 18 && votingAge <= 60) {
  console.log("allow");
} else {
  console.log("choti sii bachhi ho kaya !");
}

// Ternary Operator
console.log(10 < 20 ? "right" : "wrong");
