// ----- Functions----------

function greet() {
  console.log("welcome");
}
greet();

// agrument and parameter in function
// function name(parameter) {}
// name(argument);

function greeting(user) {
  console.log("Good morning...", user);
}
greeting("Aman");

function add(a, b) {
  console.log("Total is : ", a + b);
}
add(5, 6);
add(5, 15);

function party(name, age) {
  if (age >= 18) {
    console.log("You are welcome in party", name);
  } else {
    console.log("not allowed");
  }
}
party("raj", 17);

// ------ Type of functions----------
// 01 ---- function declaration
function a1(age) {
  console.log("Your age is :", age);
}
a1(43);

// 02 ----- function experssion
var b1 = function (age) {
  console.log("Your age is :", age);
};
b1(42);
console.log(b1);

// 03 -------- Arrow Function
var c1 = (a) => {
  console.log("Hello..", a);
};
c1("ram");

// ---- One liner function
var d1 = (d) => console.log(d, "kaise hai aap");
d1("Ajay");

// IIFE - Immidiatly invoked function expression
(function e1() {
  console.log("This is IIFE function.");
})();

(() => console.log("hello sir"))();

// ------ return
function g1(params) {
  return params;
}
var g2 = g1("Wow");
console.log(g2);

function h1(a, b) {
  return a + b;
}
var h2 = h1(5, 6);
console.log(h2);

function permission(gen) {
  if (gen == "f") {
    return "welcome to women's party";
  } else {
    return "welcome to men's party";
  }
}
console.log(permission("m"));
var invite = permission("f");
console.log(invite);

// pure function - same input, same output
function add(a, b) {
  return a + b;
}
console.log(add(3, 5));
console.log(add(3, 5));

// impure function - same input, different output
var z = 2;
function mul(a) {
  z++;
  return a * z;
}
console.log(mul(4));
console.log(mul(4));
console.log(mul(4));

// ----- defult parameters

function h1(user) {
  console.log("welcome", user);
}
h1();
h1("Aman");

function g1(user = "sir") {
  console.log("welcome", user);
}
g1();
g1("");
g1("Aman");

function j1(user = "sir", age = 18) {
  console.log("welcome your name is ", user, " your age is ", age);
}
j1();
j1("");
j1("Aman");
j1("Aman", 23);

//------------callback function----------

// console.log("callback function");

// function child() {
//   console.log("I am chaild");
// }

// function parent(a) {
//   console.log("This is parent function");
//   a();
// }
// parent(child); // right way

function parent() {
  console.log("I am parent..");

  function child() {
    console.log("I am child...");
    return 40;
  }
  return child;
}

parent()();
