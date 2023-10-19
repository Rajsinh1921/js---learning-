const input = document.querySelector("input");
const ul = document.querySelector("ul");
const btn = document.querySelector("button");
const deletBtnAll = document.querySelectorAll(".deleteBtn")


btn.addEventListener("click", function (e){
    
    let newli = document.createElement("li");
    ul.appendChild(newli); 
    newli.innerHTML = input.value
    input.value = '';

    const deletbtn = document.createElement("button");
    deletbtn.innerText = "Delete";
    newli.appendChild(deletbtn);

}); 


ul.addEventListener("click", function(e) {
    if(e.target.nodeName == "BUTTON") {
        let listItem = e.target.parentElement;
        listItem.remove();       
    }

})