const prompt = require("prompt-sync")()
const CAP = 11

const RANDOM_NO = Math.floor(Math.random() * 10) % CAP
console.log("You have 3 chance to guess the number")
let i = 0
while(i < 3){
	const NUM = Number(prompt("Enter The number: "))
	if(NUM === RANDOM_NO){
		console.log("You Won")
		return
	} 
	i++
}
console.log("You lost")
console.log(`Random No = ${RANDOM_NO}`)
