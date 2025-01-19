const arr = [1,2,3,4,5]

for(let i = 0; i < arr.length; i++){
	console.log(arr[i])
}

//other syntax to traverse through the for loop
console.log("")

for(let element of arr) {
	console.log(element)
}

console.log("")

//to get the index as well
for(let [i, element] of arr.entries()){ //.entries return index and value
	console.log(i, element)
}
