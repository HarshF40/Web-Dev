const mySet = new Set([2,3,4,5])
mySet.add(1) //add a element to the set
console.log(mySet)
mySet.delete(1) //deletes the corresponding element from the set
console.log(mySet)
console.log(mySet.has(1)) //checks if the element is resent in the set or not
console.log(mySet.size) //resturns the size of the set

for (let value of mySet) {
	console.log(value)
}

//mySet.clear() //clears the whole set
const arr = Array.from(mySet) //or const arr = [...mySet]
console.log(arr)
