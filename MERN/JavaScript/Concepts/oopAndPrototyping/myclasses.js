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

	static count = 0

	constructor(username){
		this.username = username
		User.count += 1
		console.log(`id: ${User.count}`)
	}

	logMe(){
		console.log(`USERNAME is ${this.username}`)
	}

	//static keyword restricts the access of the methods of objects of clas to its instances and is only inside the class/class methods
	static getId(){
		return User.count //assume it is random
	}
}

class Teacher extends User{ //inheritance
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
//console.log(T.username)
const user1 = new User("yuki")
const user2 = new User('harsh')
