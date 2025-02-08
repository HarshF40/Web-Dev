//function inside a function(closure), and the inner fucntion get access to the scope of the outer function(lexical scoping) 
const init = () => {
	const name = "Hello"
	const anotherOne = () => {
		console.log(name)
	}
	anotherOne()
}

init()

//the above example is for lexical scoping
        //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
//closure
//the innser will function will be always bound to it lexical scope, closures retial references to the variables they actually use
//example of closure
const makeFunc = () => {
	const name = "Harsh"
	const anotherOne = () => {
		console.log(name) //here the console .log is not executes when makeFunc is used.. it is executed whne we call the inner function whuch us returned
	}
	return anotherOne
}

const func = makeFunc();
func();

//closures can used when we need to return a function
// it can be also used to return some statements without executing them
// closure encapsulate logic
// used in eventHandling, callabcks, module patterns
// clousres are more about encapsulating the lexical scope
