
// Ans - 1 (Using for of loop)

// const arr = [1,2,3,4,5,6,7,8,9,10];

// const num = 5;

// function filter (arr,num) {
//     //loop je arr na darek number ne compare kare and moto hoy to eene return kare
//     let filteredArr = [];

//     for (const arrNum of arr) {
//         if (arrNum > num) {
//             filteredArr.push(arrNum)
//         }    
//     }

//     return console.log(filteredArr);
// }

// filter(arr,num)

// Ans -1 (Using for loop)
// const arr = [1,2,3,4,5,6,7,8,9,10];

// const num = 5;

// function filter (arr,num) {
//     //loop je arr na darek number ne compare kare and moto hoy to eene return kare

//     for (let i = 0; i<arr.length; i++) {
//         if (arr[i] > num ) {
//             console.log(arr[i])
//         }
//     }
// }

// filter(arr,num)

// Ans - 2 

//careating loop that gooes to each index and compare if that is exicted in new aaray or not 

// let string = "aAAabA";


// function filteringString (str) {
//     let newString = "";
    
//     for (const iteam of str) {
//         if (newString.indexOf(iteam) < 0 ) {
//             newString += iteam;
//         }
//     }

//     return newString
// }

// filteringString(string)

// Ans - 3 

// const arr = ["Australia","",""];

// function longestName (arr) {
   
//     let largestCountryName = "" 
   
//     for (const country of arr) {
//         if (largestCountryName.length < country.length ) {
//             largestCountryName = country;
//         }
//     }

//     return (console.log(largestCountryName))
// }

// longestName(arr)

// Ans - 04

// const string = "AAaeiou";

// function countsvowels (str) {

//     const vowels = "AEIOUaeiou"
//     let count = 0;

//     for (const char of string) {

//         if (vowels.indexOf(char) > -1 ) { 
            
//             count++;
//         }
        
//     }

//     return console.log(count);

// }

// countsvowels(string);

// Ans - 05

function generateRandomNum (start,end) {

    let range = (end - start) + 1; 
    let finalNum = Math.floor((Math.random() * range + start) );
    
    return finalNum;
}

const randomNum = generateRandomNum(1,5);
console.log(randomNum)