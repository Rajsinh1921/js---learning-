
//Create an array for storing the values 
const storage = [];

//creating initial prompt for user
// let input = prompt("Please enter what your option: ");

//Creating While loop that runs forever

while(true){

let input = prompt("Please enter what your option: ");


//creating a quit feature
    if (input == "quit") {
        console.log("You have exited the list");
        break;
    //creating add feature
}  if (input == "add") {
        input = prompt("Enter the activity you like to add: ");
        storage.push(input);  
        console.log("Task added");

    } else if (input == "delete") {
        input = prompt("Enter the index of activity you like to delete: ");
        storage.splice(input-1, 1);
        console.log("Task deleted");

    } else if(input == "list") {
       console.log("--------------------------");
       for (const todo of storage) {
        console.log(`#${storage.indexOf(todo) + 1} ${todo}`);   
       } 
        console.log("--------------------------");
    
    } else if (input == "edit") {
        input = prompt("Enter the index of element that you want to edit");
        newedit = prompt("Enter the text: ");
        storage.splice(input-1,1,newedit);    
        console.log("--------------------------");
        console.log("Task Edited");
        for (const todo of storage) {
         console.log(`#${storage.indexOf(todo) + 1} ${todo}`);   
        } 
         console.log("--------------------------");

    } else {
       prompt("Wrong output! Try again.");
    }

    
}























// const guru = "MSM";

// let guessedValue = prompt("Guess my Guru: ")

// while (guessedValue != guru && guessedValue != "quit")  {
//    guessedValue = prompt("Please, guess again: ");
// }

// if (guessedValue == guru) {
//     console.log("You guessed it right!!!!");
// }

// const heros = [["muktanand", "gopalanand", "nishkulanand"],["Mahantswami","pramukhswami","yogibapa"]];

// for (let i = 0; i < heros.length; i++){
//     console.log(`List #${i}`);
//     for (let j = 0; j < heros[i].length; j++){
//         console.log(`  ${heros[i][j]}`);
//     }
// } 