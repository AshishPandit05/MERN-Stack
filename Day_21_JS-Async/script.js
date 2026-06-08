/** Asynchronous --> Delay */
console.log("Start");
setTimeout(function () {
  console.log("setTimeOut");
}, 2000);
console.log("end");

setTimeout(function () {
  console.log("Asynchronous function");
}, 3000);

console.log("start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
console.log("end");

setInterval(function () {
  console.log("This is setInterval");
}, 5000);

let interval = setInterval(function () {
  console.log("setInterval");
}, 2000);
setTimeout(function () {
  clearInterval(interval);
}, 10000);
