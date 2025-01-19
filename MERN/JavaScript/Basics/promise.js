const myPromise = new Promise((resolve, reject) => {
	//Asynchronous operation
	state = false
	if(state){
		resolve("good")
	} else {
		reject("bad")
	}
})

myPromise.then((value) => { //resolve function
	console.log(value)
}).catch((value) => { //reject function
	console.log(value)
}).finally(() => {
	console.log("Always executed!")
})

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, "foo"))
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 500, "bar"))

Promise.all([promise1, promise2, promise3]) //this will be used by all the promises listed in the list
.then((result) => {
	console.log(result)
}).catch((error) =>{
	console.error(error)
})
