// Ans - 01

const btn = document.createElement("button");
const body = document.querySelector("body");

btn.innerText = "Click Me!";
body.appendChild(btn);

btn.addEventListener("click", function (e) {
    this.style.backgroundColor = "green";
})

// Ans - 02

const input = document.querySelector("input");
const h2 = document.querySelector("h2");

input.addEventListener("input", function() {
    const inputValue = input.value;

    // Remove any characters that are not A-Z, a-z, or space
    const cleanedValue = inputValue.replace(/[^A-Za-z ]/g, "");

    // Display the cleaned value in the H2 heading
    h2.innerText = cleanedValue;
});
