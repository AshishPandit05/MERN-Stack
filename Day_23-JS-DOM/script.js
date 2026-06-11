/** How DOM Works ? 
1. Browser downloads the HTML file.
2. Browser parses (reads) the HTML.
3. Browser creates a DOM Tree in memory.
4. JavaScript can access and manipulate the DOM.
5. Changes are reflected on the webpage instantly.

----------Browser flow---------
HTML File
    ↓
HTML Parser
    ↓
DOM

CSS File
    ↓
CSS Parser
    ↓
CSSOM

DOM + CSSOM
    ↓
Render Tree
    ↓
Layout
    ↓
Paint
    ↓
Screen
*/

let heading = document.querySelectorAll("h2");
console.log(heading);
let heading2 = document.getElementsByTagName("h2");
console.log(heading2);

/** universal selctor --> querySelector() */
let box = document.querySelector(".box");
console.log(box);
let box2 = document.getElementsByName(".box");
console.log(box2);

document.body.innerHTML = "hello";
document.body.innerText = "hii";
