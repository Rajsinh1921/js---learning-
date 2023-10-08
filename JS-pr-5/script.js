

let maxNumber = prompt(`PLease, give us the maximum number: `);

let randomNum = Math.floor((Math.random() * maxNumber) + 1);

let guess = prompt(`Enter your guess here: `);     

console.log(+randomNum)

while (true) {

        if (guess == `quit`) {
            console.log(`The number was ${+randomNum}`);
            break;
        } 
        
        if (guess == randomNum) {
            alert(`Congratulations you have guessed it right! Number was, ${+randomNum}`);
            console.log(`Congratulations you have guessed it right! Number was, ${+randomNum}`);
                break;
      
        } else if (guess > randomNum) {
            guess = prompt(` Hint: Number is larger then guessed number`)
      
        } else {
            guess = prompt(` Hint: Number is smaller then guessed number`)
        } 
        
}




