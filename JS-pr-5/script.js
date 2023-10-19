// let squre = n => n * n;


// let id = setInterval(()=>{
//     console.log("MSM");
// },2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("Clear Interval");
// }, 10000);

// Ans-1
// const array = [1,2,3,4,5,6,7,8,9,10]



// const arrayAverage = (array) => {
    
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//        total += array[i]; 
//     }
//     return (total/array.length)
// }

// console.log(arrayAverage(array))


// const arayAverage = (array) => {
//     let total = 0;
//     for (const number of array) {
//         total += number;
//     }
//     return total / array.length;

// }

// console.log(arayAverage(array));

// Ans - 2

// const even = n => n % 2 == 0;

// Ans - 3

const object = {
    message: 'Hello, World!',
    logMessage() {
      console.log(this.message);
    }
  };
  
  setTimeout(object.logMessage, 1000);
  console.log(object.logMessage()); 
  
// let length = 4;

// function callback() {
//   console.log(this.length);
// }

// const object = {
//   length: 5,
//   method(callback) {
//     callback();
//   },
// };

// object.method(callback, 1, 2);


// function outer () {
//     let username = "MSM";
//     function inner (){
//         let secret = "My1234"
//         console.log("inner", username)
//         function innerineer (){
//             console.log( "innerinnerr", secret, username);
//         }
//         innerineer()
//     }
//     inner()
// }

// outer()