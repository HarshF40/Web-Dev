const numberMap = new Map([[2, "two"], [3, "three"]]) //key value pairs

console.log(numberMap.set(1, "one")) // sets a new key value pair
console.log(numberMap.delete(2)) //takes in key, and deletes
console.log(numberMap)
console.log(numberMap.get(1)) //returns the value for the provided key

for(const [key, value] of numberMap){
	console.log(key, value)
}

for(const key of numberMap.keys()){
	console.log(key)
}

for(const values of numberMap.values()){
	console.log(values)
}

const arr = Array.from(numberMap)
console.log(arr)

numberMap.clear() //clears the map
