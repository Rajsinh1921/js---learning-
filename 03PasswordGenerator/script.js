const resultEl = document.getElementById('result');
const clipboardEl = document.getElementById('clipboard');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const lengthEl = document.getElementById('length');
 
 
//creating Object that has generating methods.

 const randomFunc = {
    upper   : getRandomUpper,
    lower   : getRandomLower,
    number  : getRandomNumber,
    symbol  : getRandomSymbol,
 }
 
clipboardEl.addEventListener ('click', ()=>{
    const textarea = document.createElement('textarea');
    const password = resultEl.innerText;

    if(!password){ return ;}

    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert('password has been copied!')

} )

 

// Adding Eventlistner to the Generate Button.

generateEl.addEventListener('click',()=>{
    const length = +lengthEl.value;
    const hasUpper = uppercaseEl.checked;
    const haslower = lowercaseEl.checked;
    const hasnumber = numbersEl.checked;
    const hassymbol = symbolsEl.checked;
    resultEl.innerHTML = generatedPass(hasUpper, haslower, hasnumber, hassymbol, length);
    });

 function generatedPass (upper, lower, number, symbol, length) {
  
   
//  init PW Variable.
     let generatedPassword = '';
// Filter all Unchecked. 
    const filteredArrCount = upper  + lower + number + symbol;
    const filteredArr = [{upper}, {lower}, {number}, {symbol},].filter(iteam => Object.values(iteam)[0]);
   

    if(filteredArrCount === 0){
        return '';
    }

// loopover length call generate function. 

    for (let i = 0; i < length; i+=filteredArrCount) {
        filteredArr.forEach( iteam => {
            generatedPassword += randomFunc[Object.keys(iteam)]();
        });
    }

    const finalPassword = generatedPassword.slice(0, length);

    return finalPassword

 }


 
 
 function getRandomUpper () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
 
 function getRandomLower () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
 }
 function getRandomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
 }
 function getRandomSymbol () {
    const symbols = `~!@#$%^&*/`;

    return symbols[(Math.floor(Math.random() * symbols.length))];
 }