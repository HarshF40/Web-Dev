//const PromiseOne = new Promise((resolve, reject) => {
//	//Do an async task
//	//DB calls, cryptography, network
//	taskStatus = false
//	setTimeout(() => {
//		console.log("Async task complete!")
//		resolve(34)
//	}, 2000)
//})
//
//PromiseOne.then((data) => {
//	console.log(data)
//}).catch((data) => {
//	console.log(data)
//})
//
////data is usually paased as object
///////////////////////////////////////////////////////////
//new Promise((resolve, reject) => {
//	setTimeout(() => {
//		console.log("Async task 2")
//		resolve()
//	}, 5000)
//}).then(() => {
//	console.log("resolved")
//})

//////////////////////////////////////////////////////
new Promise((resolve, reject) => { //resolve is always passed first
	setTimeout(() => {
		let error = false
		if(!error){
			resolve({username : "username", password : "password"})
		} else {
			reject('ERROR: Something went remove')
		}
	}, 1000)
}).then((user) => {
	console.log(user)
	return user.username //anything that returned from here goes to the next .then
}).then((username) => {
	console.log(username)
}).catch((err) => {
	console.error(err)
}).finally(() => {
	console.log("Always executed no matter what")
})

////////////////////////////////////////////////////// using async

const promise5 = new Promise((resolve, reject) => {
	setTimeout(() => {
		let error = true
		if(!error){
			resolve({username : "username", password : "password"})
		} else {
			reject("ERROR: Something went wrong")
		}
	}, 5000)
})

//async promise handling doesnt handle reject case, we have to wrap it in try catch block to handle it
//handlePromise5 = async () => { // waits asynchronously
//	const response = await promise5 //the resolved passed data will be here
//	//awaits the code till the response is obtained
//	console.log(response)
//}

//so to handle the error, add the try catch block
// and we have explicity call the asycn function
const handlep5 = async () => {
	try {
		const response = await promise5
		console.log(response)
	} catch(error) {
		console.log(error)
	}
}
handlep5()
