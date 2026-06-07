/** DRY --> Don't repeat yourself */
function CreateBooks() {
  ((this.bookName = "harry potter 1"),
    (this.authorName = "JK Rowling"),
    (this.pages = 500));
}

let book = new CreateBooks();
console.log(book.bookName);

function CreateBooks1(bookName, authorName = "JK Rowling") {
  this.bookName = bookName;
  this.authorName = authorName;
  this.pages = 400;
}
let book1 = new CreateBooks1("HP - philospher stone");
let book2 = new CreateBooks1("HP - Chamber of secrets", "HX");
console.log(book1);
console.log(book2);

function CreateBooks2(bookName, authorName, pages) {
  this.bookName = bookName;
  this.authorName = authorName;
  this.pages = pages;
  this.getFrontPage = function () {
    console.log("Book Name - " + this.bookName);
    console.log("Author Name - " + this.authorName);
    console.log("Pages - " + this.pages);
  };
}
let book3 = new CreateBooks2(`Build don't talk`, "Raj Shamani", 300);
let book4 = new CreateBooks2("xyz", "rtr", "abc");
book3.getFrontPage();
book4.getFrontPage();

let arr = [23, 34, 64, 75, 65];
let obj = {
  name: "AJ",
  age: 22,
};
let fun = function () {
  console.log("Porototype");
};

console.log(arr);

console.log(arr.__proto__);
console.log(obj.__proto__);
console.log(fun.__proto__);

console.log(arr); // array
console.log(arr.__proto__); // value
console.log(arr.__proto__.__proto__); // Object
console.log(arr.__proto__.__proto__.__proto__); // null

let dad = {
  firstName: "Rakesh",
  lastName: "Sharma",
  shop: "Sharmaji women collections",
};
let son = {
  firstName: "Shartahk",
  lastName: "Sharma",
};

// console.log(son);

son.__proto__ = dad; /** protoType Inheritance */
console.log(son.shop);

class User {
  constructor(firstName, lastName, contact) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.contact = contact;
  }
}

let x1 = new User("Abhishek", "Sharma", 23583);
console.log(x1);

class Admin extends User {
  constructor(firstName, lastName, contact, city) {
    super(firstName, lastName, contact);
    this.city = city;
  }
}

let x2 = new Admin("Rakesh", "choddhri", 42334, "Delhi");
console.log(x2);
