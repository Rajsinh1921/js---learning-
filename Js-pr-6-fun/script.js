// function rolladice(){
//     const random = Math.floor((Math.random() * 6) + 1);
//     console.log(random)
// }

// function calavg (a,b,c){
//     let result = (a + b + c) /3 

//     console.log(result);
// }

// calavg(1,2,2);

// function printTable(n){
//     for (let i=n; i<=(n*10); i+=n){
//         console.log(i);
//     }
// }

// printTable(1)

// function total (n) {
    
//     let sum = 0; 

//     for (let i = 1; i <= n; i++ ) {
//         sum+=i;
//     } 

//     return sum
// }

// const str = ["PSM","MSM","AKDM","YOG", "!"];

// function concanite (str){
//     let finalString = '';
//     for (const stapurush of str) {
//         finalString += stapurush;
//     }

//     return finalString

// }

// console.log(concanite(str));


// let name = function (){
//     console.log("PSM!")
// }


// function multipleGreet (func,n){
//     for (let i=1; i<=n; i++){
//         func();
//     }
// }

// function greet (){
//     console.log("PSM!")
// }

// multipleGreet(greet,1)

function functionFactory (input) {
   if (input == "odd") {
        let odd = function(n) {
          console.log(!(n % 2 == 0))
        } 
        
        return odd;

    } else if (input == "even") { 
          let even = function(n) {
             console.log(n % 2 == 0)
            }

            return even 
    } else {
        console.log("Wrong request!");
    } 

}

let input = "odd";
