//the event loop continuously monitors the call stack and the callback queue.
//If the call stack is empty, it dequeues the first callback from the queue and pushes it onto
//the call stack for execution

console.log(`Start, Main/Global call stack, priority`) //1

setTimeout(() => {
	console.log(`MacroTask, which has the least priority`) //4
},0)

Promise.resolve().then(() => {
	console.log("Microstack, prioterised after the main call stack") //3
})

console.log(`End, Main stack Highest priority`) //2
