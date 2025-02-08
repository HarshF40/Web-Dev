const user = {
	username: "harsh",
	loginCount: 8,
	signedIn: true,

	getUserDetails: function(){
		console.log(`Username: ${this.username}`)
	}
}
//user.getUserDetails()

//constructor function to create objects
//new --> this keyword is a constructor function

function User(username, loginCount, isLoggedIn){
	this.username = username
	this.loginCount = loginCount
	this.isLoggedIn = isLoggedIn
	this.greetings = () => {
		console.log(`Hello ${this.username}`)
	}
	//return this //this is implicitly  there anyways so need to write it, but if we dont use new keyword it will show undefined
}

const user1 = User("harsh", 44, true)
const user2 = User("yuki", 1, false)
console.log(user1) //this should print harsh, instead it prints yuki
//so if we use a constructor function it gives a new instance everytime we want a object and doesnt override the existing data
const user3 = new User("place", 3, true)
console.log(user3)
user3.greetings()
