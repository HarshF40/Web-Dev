const prompt = require("prompt-sync")() // this is the way a library is imported in js
//() is used here because the prompt-sync imports a function that is then called instantly to initialise
//the prompt constant
const input = prompt("Input: "); //storing the prompt the in the constant variable
console.log(input) //logging the the input constatnt to the console
