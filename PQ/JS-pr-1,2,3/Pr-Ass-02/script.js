//Ans 01
//   const arr = [1,2,3,4,5,6];

//  console.log(arr.splice(0,3));
//Ans 02
//  console.log(arr.splice(-3));

//Ans 03
//  const str = "";

//  if (str.length > 0) {
//     console.log("Not blank");
//  } else {
//     console.log("Blank");
//  }

//Ans 04

// indexOf thi first occurance khabar pade & 
//eloko mane savthi pehla index number aapse pachi ee number ne aapde letter ma convert karvanu pachi 
//pachi check karva nu ke ee atoz ma aave che ke nahi


//given index number 5 
// let inedexValue = str[4];
// console.log(inedexValue);
//converting tha to letter 
// const checking = aToz.indexOf(inedexValue);
// console.log(checking);
//comparing its occurance in the aToz 

//there are two methods that can be used to check wheter letter is lowecase or not 
//1) useing indexof

// const aToz = "a b c d e f g h i j k l m n o p q r s t u v w x y z";
// let str = "qwertyuiop12345678"
// function characterIsLowerOrNot (inedexValue) {
//     let convertingToLetter = str[inedexValue];
//     const indexvalueInaToz = aToz.indexOf(convertingToLetter)
//     if ( indexvalueInaToz > 0 ){
//         console.log(indexvalueInaToz);
//         return console.log("Is a lower case.");
//     } else {
//         return console.log("Not a LowerCase.")
//     }
//  }
//  characterIsLowerOrNot(8)
 
 // 2) Using includes

// const aToz = "abcdefghijklmnopqrstuvwxyz"; // Removed spaces and made it lowercase
// const str = "qwertyuiop12345678";

// function characterIsLowerOrNot(indexValue) {
//     const convertingToLetter = str[indexValue];
//     const isLowerCase = aToz.includes(convertingToLetter);

//     if (isLowerCase) {
//         console.log(indexValue);
//         console.log("Is a lowercase.");
//     } else {
//         console.log("Not a lowercase.");
//     }
// }

// characterIsLowerOrNot(8);

// Ans 03 Comparing letters to its lower case
// let str = "A   ApnaCollege";
// let idx = 0;

// if (str[idx] == str[idx].toLocaleLowerCase()) {
//     console.log("Go")
// } else {
//     console.log("Not");
// }

// Ans 05
// const str = "    sdlsdf    ";
// console.log(str);

// const newstr = str.trim();
// console.log(newstr);


// Ans 06

// const arr = [1,23,4,5,6,7,8,8,7,6,5,4];

// if  (arr.indexOf(4) < 0){
//     console.log("Not in the arr");
// } else {
//     console.log("In the arr")
// }

let n = prompt("Enter a number: ");
n = parseInt(n)
const lastNumber = (n*10)

for (let i = n; i <= lastNumber ; i = i + n){
  console.log(i);
}