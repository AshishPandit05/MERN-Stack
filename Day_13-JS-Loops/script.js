// ------  While Loop ------------

var num = Number(prompt("Enter a number : "));
var a = 0;
while (a < 10) {
  console.log(num);
  a++;
}

var num1 = Number(prompt("Enter a number : "));
var b = 1;
while (b <= 10) {
  console.log(num1 * b);
  b++;
}

var num2 = Number(prompt("Enter a number : "));
var c = 1;
if (c < num2) {
  while (c <= num2) {
    console.log("Java Script");
    c++;
  }
} else {
  console.log("Error");
}

// ------ Do While Loop ------------

var y = Number(prompt("Enter a number : "));
var x = 1;
do {
  console.log(x);
  x++;
} while (x <= y);

// --------------- For Loop ---------------
let y1 = Number(prompt("Enter a number "));
for (let x1 = 1; x1 <= 10; x1++) {
  console.log(`${y1} X ${x1} = ${x1 * y1}`);
}

// -------------Break and continue---------------
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  if (i === 3) {
    continue;
  }

  if (i === 7) {
    break;
  }

  console.log(i);
}
