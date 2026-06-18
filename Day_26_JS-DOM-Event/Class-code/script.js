/**
 addEventListener('event', callBack,{option})
 Events ->

Mouse Events --> click, dblclick, mousedown, mouseup, mousemove, mouseover, mouseout
Keyboard Events --> 	keydown, keyup
Form Events	submit -->  change, input, focus, blur, reset
Window Events --> 	load, resize, scroll, unload
Clipboard Events --> 	copy, cut, paste
Drag & Drop Events --> 	dragstart, drag, dragover, drop, dragend
Touch Events --> 	touchstart, touchmove, touchend, touchcancel
Pointer Events	--> pointerdown, pointermove, pointerup, pointerenter
Media Events	-->  play, pause, ended, volumechange
Animation Events	-->  animationstart, animationend, animationiteration
Transition Events  --> 	transitionstart, transitionend, transitioncancel
Network Events --> 	online, offline
Custom Events	-->  User-defined events using CustomEvent

*/

let btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
  console.log(event);
});
btn.addEventListener("dblclick", (event) => {
  console.log(event);
});
btn.addEventListener("mousemove", (event) => {
  console.log(event);
});
btn.addEventListener("mouseover", (event) => {
  console.log(event);
});

// Event Propogation (Event Traaversal)
/**
 Capturing phase (Top to Bottom) ->
window -> doctype -> html -> body -> main -> div -> button
 
Bubbling phase (Bottom to top) ->
button -> div -> main -> body -> html -> doctype -> window
 */

let form = document.querySelector("form");
let name = document.querySelector("#name");
let email = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  console.log("submit");
  event.preventDefault();
  let userName = name.value;
  let userEmail = email.value;
  console.log(userName, userEmail);

  form.reset();
});
