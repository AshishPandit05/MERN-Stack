// Q1
let OTP = Math.round(Math.random() * 10000);
console.log(OTP);

// Q2
let str = "GTH";
var revers = str[2] + str[1] + str[0];
console.log(revers);

// Q3
var name = "ARJUN";
var last = name[name.length - 1];
console.log(last);

// Q4
var uperCase = "arjun";
console.log(uperCase.toUpperCase());

// Q5
let str1 = "Hello";
let str2 = "hello";

if (str1.toLowerCase() === str2.toLowerCase()) {
  console.log("Strings are equal");
} else {
  console.log("Strings are not equal");
}

// Q6
let username = "admin";
let password = "12345";

let enteredUsername = "admin";
let enteredPassword = "12345";

if (enteredUsername === username && enteredPassword === password) {
  console.log("Login Successful");
} else {
  console.log("Invalid Username or Password");
}

// Q7
let num = 456;

if (num >= 10 && num <= 99) {
  console.log("2-digit number");
} else if (num >= 100 && num <= 999) {
  console.log("3-digit number");
} else {
  console.log("Neither 2-digit nor 3-digit");
}
// Q8
let balance = 5000;
let withdrawAmount = 2000;

if (withdrawAmount <= balance) {
  balance = balance - withdrawAmount;

  console.log("Withdrawal Successful");
  console.log("Remaining Balance:", balance);
} else {
  console.log("Insufficient Balance");
}

// Q9
let color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Ready");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid Color");
}

// Q10
let studentName = "Arjun";

let math = 85;
let science = 78;
let english = 92;

let total = math + science + english;
let percentage = total / 3;

let grade;

if (percentage >= 90) {
  grade = "A+";
} else if (percentage >= 75) {
  grade = "A";
} else if (percentage >= 60) {
  grade = "B";
} else if (percentage >= 40) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log("------ Marksheet ------");
console.log("Student Name:", studentName);

console.log("Math:", math);
console.log("Science:", science);
console.log("English:", english);

console.log("Total Marks:", total);
console.log("Percentage:", percentage + "%");

console.log("Grade:", grade);
