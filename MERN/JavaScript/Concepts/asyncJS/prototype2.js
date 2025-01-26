let myHeroes = ["thor", "spiderman"] //object 1

let heroPower = {
	thor : "hammer",
	spiderman : "sling",

	getSpiderPower: function(){
		console.log(`Spidy power is ${this.spiderman}`)
	}
} //object 2

//object provides fucntionality common to all objects in javascript
Object.prototype.ironman = () => {
	console.log(`Spiderman: Everywhere i go i see you`)
}

//in the same way we can narrow down the scope from object to Array objects
Array.prototype.thanos = () => {
	console.log(`Purple Alien`)
}

//ironman functionality is now common to all the objects
myHeroes.ironman()
heroPower.ironman()
myHeroes.thanos()
//heroPower.thanos() throws an error, beacuse thnaos is not there for heroPower

//////////////////////////////Inheritance//////////////////////////////////

const User = {
	name: "chai",
	email: "chai@google.com"
}

const Teacher = {
	makeVideo: true
}

const TeachingSupport = {
	isAvailable: false
}

const TAsupport = {
	makeAssignment: 'JS assignment',
	fullTime: true,
	__proto__: TeachingSupport //TAsupport can now access the properties of the TeachingSupport
}
//we can also make this linkage outside too
Teacher.__proto__ = User //Teacher can now access the properties of the user
console.log(TAsupport.isAvailable) //works, shows false
console.log(Teacher.name) //works, shows chai
// above method is old method
//
////////Modern Inheritance//////////
Object.setPrototypeOf(Teacher, TeachingSupport) //teacher has the access to TeachingSupport
console.log(Teacher.isAvailable) //works, shows false
