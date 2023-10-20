
const h2Message = document.querySelector("#message");
const btns = ["red","yellow","green","purple"];


let gameSeq = [];
let userSeq = [];
let playGame = false;
let level = 0;
let score = 0;
let highScore = 0;

//If any key is pressed start the game & up the level 
document.addEventListener("keypress",function(){
    if (playGame == false) {
        playGame = true;
        
        levelUp();
    }

});

//Flash the button for user 
function gameFlash (btn){
    btn.classList.add("flash");
    
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250);
}

// For counting High-Score 
function highScoreUp (){
    if (highScore < score) {
        highScore++;
    }
}

// Flash the button when user clickes
function userFlash (btn){
    btn.classList.add("userFlash");
    
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 200);
}

// Chnge the h2Message on level-up & select any random color
function levelUp (){
    userSeq = [];
    level++;
    h2Message.innerText = `Level ${level}`;

    
    let randomName = btns[Math.floor(Math.random() * 4)];
    let randombtn = document.querySelector(`.${randomName}`);
    let gamecolor = randombtn.getAttribute("id");
    gameSeq.push(gamecolor);
    gameFlash(randombtn);
    console.log(gameSeq);
}

// Passes the cliked button to userFlash Function
function btnClicked (){
    let btn = this;
    userFlash (btn);
    
    usercolor = btn.getAttribute("id");
    userSeq.push(usercolor);
    checkInput(userSeq.length-1)
}

// Appling Eventlistener to all buttons 
const allBtn = document.querySelectorAll(".btn");
for (let btn of allBtn) {
    btn.addEventListener("click",btnClicked);
}   


function checkInput (idx){

    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp,1000);
            score++;
            highScoreUp()
            console.log(score)
        }
    } else {
        h2Message.innerHTML = `Game over!! Press any key to start. </br> Your score was : ${score} </br> High score :${highScore}`;


        reset();
    }
}

function reset (){
     gameSeq = [];
     userSeq = [];
     playGame = false;
     level = 0;
     score = 0;


}
