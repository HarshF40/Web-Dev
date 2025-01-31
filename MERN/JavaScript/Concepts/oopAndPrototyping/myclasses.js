////class defination
//class User {
//	constructor(username, email, password){ //constructor to make objects
//		this.username = username
//		this.password = password
//		this.email = email
//	}
//
//	encryptPassword(){ //direct function defination without keyword or anything
//		return `${this.password}abc`
//	}
//
//}
//
//const yuki = new User("yuki", "yuki@arch.com", "shhh!")
//console.log(yuki.encryptPassword())

//inheritance
class User {
	constructor(username){
		this.username = username
	}

	logMe(){
		console.log(`USERNAME is ${this.username}`)
	}
}

class Teacher extends User{
	constructor(username, email, password){
		super(username) //this will invoke the constructor of class User
		this.email = email
		this.password = password
	}
	callGreet(){
		super.logMe()
	}
}

const T = new Teacher("yuki", "yuki@arch.deb", "abc")
console.log(T.username)
