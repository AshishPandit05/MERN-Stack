// let obj = {
//   fName: "aman",
//   lName: "kumar",
//   age: 34,
//   sayHi: () => {
//     console.log(this.fName);
//   },
// };
// console.log(obj.fName);
// console.log(obj.sayHi());

// console.log(this);
// console.log(window);

/*
syntax error
reference error
type error
reange Error
Uri Error
internal Error
*/

// let obj01 = {
//   firstName: "Abhishek",
//   lastName: "Sharma",
//   city: "mumbai",
//   age: 44,
//   getIntro: function () {
//     console.log(this); // object
//   },
// };
// obj01.getIntro();

// let obj02 = {
//   firstName: "Rohit",
//   lastName: "Sharma",
//   city: "mumbai",
//   age: 43,
//   getIntro: function () {
//     console.log(this.firstName);
//     console.log(this.firstName, this.lastName);
//     this.firstName = "Raj"; // updating
//     console.log(this.firstName);
//   },
// };
// obj02.getIntro();

// let obj03 = {
//   firstName: "Ronak",
//   lastNmae: "rajput",
//   age: 22,
//   city: "pune",
//   getIntro: () => {
//     console.log(this); // window
//     console.log(this.firstName);
//   },
// };
// obj03.getIntro();

/** so this is difference detween normal funciton and arrow function */

// let obj04 = {
//   name: "Suraj",
//   age: 33,
//   getCompany: function () {
//     let companyName = {
//       name: "TCS",
//       isGood: true,
//       greet: function () {
//         console.log(this.name);
//       },
//     };
//     companyName.greet();
//   },
// };
// obj04.getCompany(); // TCS  (becozz normal function)

// let obj05 = {
//   name: "Suraj",
//   age: 33,
//   getCompany: function () {
//     let companyName = {
//       name: "TCS",
//       isGood: true,
//       greet: () => {
//         console.log(this.name);
//       },
//     };
//     companyName.greet();
//   },
// };
// obj05.getCompany(); // suraj (becozz arrow function)

// let st01 = {
//   firstName: "Akash",
//   lastName: "Sharma",
//   age: 22,
//   getIntro: function () {
//     console.log("Hello " + this.firstName + " " + this.lastName);
//   },
// };

// let st02 = {
//   firstName: "Akshy",
//   lastName: "Pandit",
//   age: 33,
// };

// st01.getIntro();
// st01.getIntro.call(st02);

/*
for function sharing methods
-- call
-- apply
-- bind
*/

// let student1 = {
//   firstName: "Soni",
//   lastName: "Thkur",
//   math: 98,
//   english: 88,
//   computer: 77,
// };
// let student2 = {
//   firstName: "Rahul",
//   lastName: "Kumar",
//   math: 89,
//   english: 78,
//   computer: 67,
// };
// let student3 = {
//   firstName: "Alok",
//   lastName: "Jhaa",
//   math: 99,
//   english: 72,
//   computer: 80,
// };

// let getResult = function () {
//   console.log(
//     `${this.firstName} ${this.lastName} you got ${Math.round((this.math + this.english + this.computer) / 3)} % Marks`,
//   );
// };

// getResult.call(student1);
// getResult.call(student2);
// getResult.call(student3);

let student4 = {
  firstName: "sharthak",
  lastName: "sharma",
  getInter: function (city, state) {
    console.log(`${this.firstName} ${this.lastName}, ${city} ${state}`);
  },
};

let student5 = {
  firstName: "rohan",
  lastName: "Rajput",
};

student4.getInter.call(student5);
student4.getInter.call(student5, "Patna", "(Bihar)");
