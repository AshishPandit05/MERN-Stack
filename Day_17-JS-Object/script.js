let person = {
  name: "Aman",
  age: 33,
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(typeof person);

let apple = {
  model: "iPhone 18 pro max",
  price: 150000,
  colour: "black",
  product: "apple",
  isGood: true,
};
console.log(apple);
console.log(apple.model);
console.log(apple.colour);
console.log(apple.isGood);

/* CRUD Operations on Object */
let city = {
  name: "Delhi",
  state: "Madhaya Pardesh",
  cuntry: "India",
};
city.name = "mumbai"; // add
console.log(city);

delete city.name;
console.log(city); // delete

let a01 = Object.keys(city);
console.log(a01);
let a1 = Object.values(city);
console.log(a1);

let userName = prompt("Enter your user name : ");
let age = Number(prompt("Enter your age :"));
let myCity = prompt("Enter your city : ");
let user = { userName, age, myCity };
console.log(user);

/*---------Object.seal------------*/
let preson01 = {
  name: "akash",
  age: 34,
  roll: 22,
  gender: "male",
};
Object.seal(preson01);
console.log(preson01.name);
console.log((preson01.name = "alok"));
preson01.class = 12; // new properties not allow
console.log(preson01.class);
delete preson01.gender; // not allow
console.log(preson01.gender); // male

/*---------------Object.freez -> only read, can't modify ------------*/
let person02 = {
  name: "Raj",
  age: 55,
  gender: "male",
};
Object.freeze(person02);

/*----------------distructuring Array----------------*/
let arr = [2, 4, 5, 6, 7, 8, 8];
let [a, b, c] = arr;
console.log(a); //2
let arr1 = [2, 4, 5, 6, 7, 8, 8];
let [x, y, , z] = arr;
console.log(z); // 6
// // -----rest operator----
let fruit = ["apple", "mango", "orange", "banana", "coconut"];
let [f1, f2, ...f3] = fruit;
console.log(f1);
console.log(f3);

/*---------distructuring object----------*/
let preson03 = {
  name: "priya",
  gender: "female",
  class1: 12,
  roll: 43,
};
let { name, gende, class1 } = preson03;
console.log(name);

//-----------spreade operator---------------//
let person04Datails = {
  age: 22,
};
let person04 = {
  name: "Rani",
  gender: "female",
  class1: 12,
  roll: 53,
  mobileNo: 999999999,
  ...person04Datails,
};
console.log(person04);

/*-----------------shallow copy ----------------*/
const user1 = {
  name: "Ashish",
  address: {
    city: "Patna",
  },
};

const user2 = { ...user1 }; // Shallow Copy

user2.name = "Rani";

console.log(user1.name); // Ashish
console.log(user2.name); // Rani

/*-----------deep copy-------------*/
const user01 = {
  name: "Ashish",
  address: {
    city: "Patna",
  },
};

const user02 = { ...user01 };

user02.address.city = "Delhi";

console.log(user01.address.city); // Delhi
console.log(user02.address.city); // Delhi

/*----------------JSON.Stringfy ----------------*/
let person05 = JSON.stringify(person04);
console.log(person05);

/*------------JSON.parse -----------*/

const jsonString = '{"name":"Ashish","age":20}';
const me = JSON.parse(jsonString);
console.log(me);

/*---------forin loop------------*/
const myDetails = {
  name: "Ashish",
  age: 20,
  city: "Patna",
};
console.log("keys------->");

for (let key in myDetails) {
  console.log(key);
}

console.log("values-------->");
for (let key in myDetails) {
  console.log(myDetails[key]);
}
console.log("keys and values-------->");
for (let key in myDetails) {
  console.log(key, myDetails[key]);
}
