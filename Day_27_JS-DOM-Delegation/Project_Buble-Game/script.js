let buble = document.querySelector(".buble");
let start = document.querySelector("#start");
let score = document.querySelector("#score");
let restart = document.querySelector("#delete");

start.addEventListener("click", () => {
  let timer = 10;
  let setInr = setInterval(() => {
    let x = Math.floor(Math.random() * 90);
    let y = Math.floor(Math.random() * 90);
    let r = Math.floor(Math.random() * 250);
    let g = Math.floor(Math.random() * 250);
    let b = Math.floor(Math.random() * 250);
    buble.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    buble.style.top = `${x}%`;
    buble.style.left = `${y}%`;
    timer -= 1;
    start.innerText = `Timer ${timer}`;
  }, 1000);

  setTimeout(() => {
    clearInterval(setInr);
    buble.style.display = "none";
    buble.style.display = "none";
  }, 10000);
});

let point = 0;
buble.addEventListener("click", () => {
  point += 1;

  score.innerText = `Score ${point}`;
});

restart.addEventListener("click", () => {
  location.reload();
});
