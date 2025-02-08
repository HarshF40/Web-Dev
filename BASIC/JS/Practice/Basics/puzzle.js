const prompt = require('prompt-sync')()


const operators = ["+", "-", "/", "*"]
const CAP = 11
let Score = 0
let Round = 1

const getAns = (OP1, OP2, IDX) => {
	switch(operators[IDX]){
		case "+" : return OP1 + OP2
		case "-" : return OP1 - OP2
		case "/" : return OP1 / OP2
		case "*" : return OP1 * OP2 
	}
}

let i = 0
while(i < 10){
	const OPERAND1 = Math.floor(Math.random() * 10) % CAP
	const OPERAND2 = Math.floor(Math.random() * 10) % CAP
	const INDEX = Math.floor(Math.random() * 10) % operators.length
	const ANSWER = Math.floor(getAns(OPERAND1, OPERAND2, INDEX))
	console.log(`Round ${Round}: What is ${OPERAND1} ${operators[INDEX]} ${OPERAND2}?`)
	const ans = Number(prompt(`Your Answer: `))
	if(ANSWER === ans){
		Score++
		console.log(`Correct! Your score: ${Score}\n`)
	} else {
		Score--
		console.log(`Wrong! The correct is ${ANSWER}. Your score: ${Score}\n`)
	}
	Round++
	i++
}

console.log(`Final Score: ${Score}`)
