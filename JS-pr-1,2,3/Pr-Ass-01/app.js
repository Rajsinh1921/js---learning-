// const num = 10;

// if (num % 10 == 0) {
//     console.log("Good!");
// } else {
//     console.log("Bad");
// }

// const name = prompt("Enter your name: ");
// const age = prompt("Enter your age: ");

// const message = alert(`${name} is ${age} years old.`);

// const mounthInQuarter = 5;

// switch (mounthInQuarter) {
//     case 1 :
//         console.log("Jan, Feb, Mar");
//         break;
//     case 2 :
//         console.log("Apr, May, June");
//         break;
//     case 3 :
//         console.log("Jul, Aug, Sep");
//         break;
//     case 4 :
//         console.log("Oct, Nov, Dec");
//         break;
//     default :
//         console.log("Enter a valid number.");
// }

// let str = "asda23";

// if ((str.length > 5) && (str[0] == "a" || str[0] == "A")) {
//     console.log("Golden String.");
// } else {
//     console.log("Not a Golden String.");
// }

// function largestOfTHree (p1,p2,p3) {
//     if (p1 > p2 && p1 > p3) {
//         console.log(p1);
//     } else if (p2 > p1 && p2 > p3){
//         console.log(p2);
//     } else {
//         console.log(p3);
//     }
// }


// largestOfTHree(100,12,23333)



function checkingLastTwoDigits (p1,p2) {

    const lastLetterOfP1 = p1[p1.length - 1];
    const lastLetterOfP2 = p2[p2.length - 1];

    if (lastLetterOfP1 === lastLetterOfP2) {
        console.log("The last latter is the same!");
    } else {
        console.log("It is not the same.");
    }
}

checkingLastTwoDigits("jfhoahf","kjfhosdfoif")