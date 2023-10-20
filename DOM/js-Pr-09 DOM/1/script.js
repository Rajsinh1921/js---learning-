const para = document.createElement("p");
const heading3 = document.createElement("h3");
const divEle = document.createElement("div");
const h1inadiv = document.createElement("h1");
const pinadiv = document.createElement("p");
const body = document.querySelector("body");

body.appendChild(para);
body.appendChild(heading3);
body.appendChild(divEle);

divEle.append(h1inadiv);
divEle.append(pinadiv);

para.innerText = "Hey, I'am red!";
para.style.color = "red";


heading3.innerText = "i'm a blue h3!";
heading3.style.color = "blue";

divEle.classList.add("div");
// divEle.style.backgroundColor = "pink";

h1inadiv.innerText = "I'm in a div";
h1inadiv.classList.add("h1blue")
pinadiv.innerText = "ME TOO";


