//this keyword doesnt work on arrow functions, because:
//arrow functions gets their scope from the fucntion they are in , if the object is defined in the global scope then the greet will also have the global scope
const person = {
	name: "Alice",
	greet() {
		console.log(this,name)
	}
}

person.greet()
