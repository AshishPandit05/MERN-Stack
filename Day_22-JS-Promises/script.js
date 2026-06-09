// Creating Promises
// let p1 = new Promise(function (resoleve, reject) {
//   console.log("Promise panding...");

//   let result = false;
//   setTimeout(function () {
//     if (result) {
//       console.log("Resolved");
//     } else {
//       console.log("Rejected");
//     }
//   }, 2000);
// });

// function orderFood() {
//   let myOrder = new Promise(function (resoleve, reject) {
//     console.log("Your order is coming..");
//     let orderStatus = true;
//     setTimeout(function () {
//       if (orderStatus) {
//         console.log("Delevery wale bhaiya aa gye hai");

//         resoleve();
//       } else {
//         reject();
//       }
//     }, 3000);
//   });
//   myOrder.then(function () {
//     console.log("Now Make a Payment");
//     let paymentStatus = true;
//     return new Promise(function (reject, resoleve) {
//       setTimeout(function () {
//         if (paymentStatus) {
//           resoleve();
//         } else {
//           reject();
//         }
//       }, 5000);
//     });
//   });

//   myOrder.then(function () {
//     console.log("nacho nacho");
//   });
//   myOrder.catch(function () {
//     console.log("Order Failed❌");

//     console.log("Complaint Karoo..");
//   });
// }
// orderFood();

// let response = fetch("https://fakestoreapi.com/products/1");
// response.then(function (data) {
//   console.log("Data aa gya ✅");
//   return data.json();
// });

// response.catch(function () {
//   console.error("Data nhi aaya ❌");
// });

// async function dataLao() {
//   let response = await fetch("https://fakestoreapi.com/products/1");

//   let data = await response.json();
//   console.log(data);
//   data.forEach(function (element) {
//     console.log(element);
//   });
// }

// dataLao();
