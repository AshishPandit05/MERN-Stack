const body = document.body;
console.log(body.childNodes); //NodeList(4) [text, h2, text, script]
console.log(body.children); //HTMLCollection(2) [h2, script]

console.log("---------------------------------------");

const main = document.querySelector("main");
console.log(main.childNodes);
console.log(main.children);

console.log("---------------------------------------");

/** textContent */
let h1 = document.querySelector(".heading1");
console.log(h1);
h1.textContent = "Text Content";

console.log("---------------------------------------");

/** innerText */
let h2 = document.querySelector(".heading2");
h2.innerText = "<s>This is</s> Inner Text";
console.log(h2);

console.log("---------------------------------------");

/** innerHTML */
let h3 = document.querySelector(".heading3");
console.log(h3);
h3.innerHTML = "<s>This is</s> Inner HTML";

console.log("---------------------------------------");
let x = document.body;
console.log(x.textContent);
console.log(x.innerText);
console.log(x.innerHTML);

/** Styling */
// body.style.backgroundColor = "red";
h2.style.backgroundColor = "yellow";
let box = document.querySelector(".box");
box.style.color = "blue";

/** 
Class list -----> 
classlist.add() 
classlist.remove()
classlist.contain()
classlist.toggle()
classlist.replace()
 */

const user1 = document.querySelector("#user01");
user1.classList.add("AJ");

h2.classList.toggle("heading2");

const user2 = document.querySelector(".user02");
user2.classList.replace("user02", "DK");
