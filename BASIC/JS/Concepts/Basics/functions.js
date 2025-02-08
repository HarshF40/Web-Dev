function greet1(name, age = 12) { //one way to define a function
	console.log(name, age)
}

const greet2 = function(name) { //second way to define a function, 
	console.log(name)
} //first and second way are same things

//arrow functions different from the above two definations
const greet3 = (name) => {
	console.log(name)
}

//rest parameters -> a function can take any number of parameters works for all type of definations
const greet4 = (...name) => { //receives an array of parameters
	console.log(name)
}

greet1("Harsh")
greet2("Harsh")
greet3("Harsh")
greet4("Harsh", "Harsh1")
