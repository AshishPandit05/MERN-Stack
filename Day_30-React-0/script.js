console.log(React);

let rh1 = React.createElement("h1", {}, "I am under the h1");
let realDomElem = document.querySelector("#heading");
let rootOfReact = ReactDOM.createRoot(realDomElem);
rootOfReact.render(rh1);
