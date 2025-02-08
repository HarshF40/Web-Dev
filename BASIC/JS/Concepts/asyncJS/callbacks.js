//calling a function inside another function
//callabacks (passed as arguement to the caller) can be used to write generic code.. or to call diffrent type of function by the same caller
//eg:
function processArray(arr, callback){
	for(let i = 0; i < arr.length; i++)
		console.log(callback(arr[i]))
}

const numbers = [1,2,3,4,5];
processArray(numbers, (x) => x*2)/////////double
processArray(numbers, (x) => x+1)/////////+1

//callbacks allow us to sepearte logic of the fucntion from its behaviour, using callbacks we can pass any function to 
//the caller and it will change what the caller is doing with data, based on the passed callback
//
//not using callbacks will make the code tight and restrict it from being flexible