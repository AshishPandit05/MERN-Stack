/** Attributes and Properties 
 getAttribute
setAttribute
removeAttribute
hasAttribute
custom Attribute -> data-'AttributeName'
*/

let h3 = document.querySelector("#attr01");
let show = h3.getAttribute("class");
console.log(show);

let allAtt = h3.getAttributeNames();
console.log(allAtt);

h3.setAttribute("width", "100%");
h3.removeAttribute("class");

let inp = document.querySelector("input");
let btn = document.querySelector("button");
let name = document.querySelector(".name");
btn.addEventListener("click", function () {
  console.log(inp.value);
  name.innerText = inp.value;
});

// Creating, inserting,  insertBefore and remoing element from DOM
let footer = document.createElement("footer"); // Creating
document.body.appendChild(footer); // Inserting
/**
 Inserting
 appendChaild -> old approach
 append -> new approach
 */
let main = document.querySelector("main");
let section = document.createElement("section");
main.appendChild(section);
let span = document.createElement("span");
let paragraph = document.createElement("paragraph");
main.append(span, paragraph); // insert multiple element

main.removeChild(span);
