const btn = document.querySelector("button");
const div = document.querySelector("#colorbox");


function randomColor () {
    const red = Math.floor((Math.random() * 255) + 1 )
    const blue = Math.floor((Math.random() * 255) + 1 )
    const green = Math.floor((Math.random() * 255) + 1 )
    const rgbValue = `rgb(${red},${blue},${green})`
    
    return rgbValue; 
}

btn.addEventListener("click",function(){
    div.style.backgroundColor = randomColor();

})

