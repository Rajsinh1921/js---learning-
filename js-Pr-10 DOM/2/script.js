
const btn = document.createElement("button");
const body = document.querySelector("body");

// Q-1
body.appendChild(btn);
btn.innerText = "Click me";

//Q-2
const input = document.createElement("input");
body.appendChild(input);
input.setAttribute("placeholder" , "username")
btn.setAttribute("id" , "btn")

// Q-3
const btnchangecolor = document.querySelector("#btn");
btnchangecolor.style.backgroundColor = "blue"; 
btnchangecolor.classList.add("btn");

// Q-4
const h1 = document.createElement("h1");
body.appendChild(h1)
h1.innerHTML = "<u>DOM Practice</u>";
h1.classList.add("h1");

// Q-5

const p = document.createElement("p");
body.appendChild(p);
p.innerHTML = "Apna College <b>Delta</b> Practice"

