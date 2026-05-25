// Array -> store multiple data type in one variable
var arr1 = [3, 4, 5, 6, 3];
console.log(arr1[4]);

var arr2 = ["aman", "ritik", "ram", "aj"];
console.log(arr2[2]);

var arr3 = [23.4, 532.3, 42, 5, "shahil", true];
console.log(arr3[5]);

// ------- Array methods --------
var arr4 = [3, 43, 53, 54, 64, 64, 23, 64, 75, 34, 5, 4, 3, 6, 334, 53];
console.log(arr4.length);
// ------- Array push, pop method ----------
arr4.push(32); // add 32 in last index
console.log(arr4[arr4.length - 1]); // 32

arr4.pop(); // remove last index element
console.log(arr4[arr4.length - 1]); // 53

arr4.pop();
arr4.pop();
arr4.pop();
console.log(arr4[arr4.length - 1]); //3

// ----------- Array shift, unshift method ----------
arr4.unshift(23); // add 23 in 0th index (in starting)
console.log(arr4[0]);

arr4.shift(); // remove first element

var arr5 = [12, 23, 43, 53, 23, 63, 23, 53, 23];
arr5.unshift(99);
arr5.shift();

// ---------Array splice method ------------
var arr6 = [2, 3, 5, 7, 8, 5, 7];
arr6.splice(3, 2); // 3 <- index number , 2 element remove
console.log(arr6); // [2,3,5,5,7]

// -----------Array slice method----------
var arr7 = [10, 20, 30, 40, 50, 60, 70];
console.log(arr7.slice(2, 4)); // [30,40]

// ----------multidimantional Array------------
var arr8 = [[43, 63, 74], [(75, 34, 96)], [(34, 64, 85)]];
console.log(arr8);

// ------------Array sort method-----------------
var arr9 = [3, 6, 8, 1, 4, 2, 9, 7, 0];
var arr99 = [23, 62, 73, 742, 7, 3, 25];
console.log(arr99.sort()); // output --> [23, 25, 3, 62, 7, 73, 742]
// best way to sorting arrays -->
console.log(arr9.sort((a, b) => a - b)); // ascending order
console.log(arr9.sort((a, b) => b - a)); // descending order

// -----------Array reverse method-----------
var arr10 = [34, 63, 72, 73, 23, 44];
console.log(arr10.reverse());

var array = [43, 6, 475, 3, 74, 34, 24, 3];
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}

//------ for of Loop --------
var arr11 = "ASHISH PANDIT";
for (const element of arr11) {
  console.log(element);
}

//---------- Mutating Array Methods------------
// These methods modify the original array.
//  Methods--
//  `push()`
//  `pop()`
//  `shift()`
// `unshift()`
// `splice()`
//  `sort()`
//  `reverse()`

// -------------Non-Mutating Array Methods-----------
// These methods do NOT change the original array.
// Methods
// `slice()`
// `map()`
// `filter()`
// `concat()`
//`includes()`
//`find()`
//`reduce()`

//------ Array concat method ---------
var array1 = [34, 35, 4, 74];
var array2 = [64, 753, 63];
console.log(array1.concat(array2));

// ----includes method ------
var arr12 = [23, 53, 63];
console.log(arr12.includes(23)); // true
console.log(arr12.includes(32)); // false

// ----indexOf method -------------
var arr13 = [23, 53, 63];
console.log(arr13.indexOf(23)); // 0
console.log(arr13.indexOf(63)); // 2
console.log(arr13.indexOf(3)); // -1

// ---------join method ------------
var arr14 = ["raj", "sherya", "sohil"];
console.log(arr14.join());

var arr15 = [53, 63, 64, 75, 23];
var arr16 = [74, 33, 57, 88, [...arr15]];
console.log(arr16);
var arr17 = [...arr15];
console.log(arr17);

// ----Array refrence behaviour---
