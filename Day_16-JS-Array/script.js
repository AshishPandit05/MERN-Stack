let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
numbers.push(6);
console.log(numbers);

/* ------------for loop-----------*/
let array = ["ron", "ranju", "sanjay", "abhishek"];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

/* ---------- forEach -> iteration-----------*/

let array2 = [4, 3, 6, 5, 7];
array2.forEach(function () {
  console.log("hello");
});

let array1 = [4, 3, 6, 5, 7];
array1.forEach((elm) => {
  console.log(elm);
});
console.log("Element with index");

let array3 = [4, 3, 6, 5, 7];
array3.forEach((elm, index) => {
  console.log(elm, index);
});

let array4 = [4, 3, 6, 5, 7];
array4.forEach((elm, index) => {
  console.log(index);
});

let array5 = [4, 3, 6, 5, 7];
array5.forEach((elm, index) => {
  console.log(elm);
});

let array6 = [34, 63, 64, 32, 77, 74, 44];
let sum = 0;
array6.forEach(function (elem) {
  sum += elem;
});
console.log(sum);

/*  ---------- map -> transform -----------*/
array = [10, 20, 30, 40]; //orignal array
array = [10, 20, 30, 40]; //transform array

let array7 = [10, 20, 30, 40];
let sqar = array7.map(function (elem) {
  return elem * 2;
});
console.log(sqar);

console.log(
  sqar.forEach((elem) => {
    console.log(elem);
  }),
);

function double(x) {
  return x * 2;
}
let array8 = [2, 3, 4, 5, 6, 7, 8];
console.log(array8.map(double));

function mr(x) {
  return "Mr. " + x;
}
let names = ["rohit", "virat", "thalaForReason"];
console.log(names.map(mr));

/* ---------- filter -> filteration -----------*/
let myArr = [1, 2, 3, 4, 5, 6, 7, 8];
let even = myArr.filter(function (y) {
  return y % 2 == 0;
});
console.log(even);

/* ---------- reduce -> reduce -----------*/

let x = [44, 22, 54, 24, 75];
x.reduce(function (accu, value) {
  //   console.log(accu);
  //   console.log(value);
});

/*  array.reduce(function(accu, value){},0);
 function(accu, value){} --> callback value (accu => privous result)
 0 --> initial value
*/

let x1 = [44, 22, 54, 24, 75];
let add = x1.reduce(function (accu, value) {
  return accu + value;
}, 0);
console.log(add);

let x2 = [44, 22, 54, 24, 75];
let add2 = x2.reduce(function (accu, value) {
  return accu * value;
}, 0);
console.log(add2);
/*  output 0
  step1 0 * 44
  step1 0 * 22
  step1 0 * 54
  step1 0 * 24
  step1 0 * 75
  step 0
*/

let x3 = [54, 76, 98, 23, 565, 66];
let ans = x3.reduce(function (acc, val) {
  if (val > acc) {
    return val;
  }
  return acc;
}, 0);
console.log(ans);

/*---------------find--------------*/
let numbers = [10, 20, 30, 40];
let result = numbers.find((num) => {
  return num > 25;
});
console.log(result);

/*-----------findIndex-------------*/
let numbers1 = [10, 20, 30, 40];

let index = numbers1.findIndex((num) => {
  return num > 25;
});

console.log(index);
