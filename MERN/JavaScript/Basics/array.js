const arr = [1,2,3,false,"hello"]//need not be same types
const size = 5
const arr2 = new Array(size) // new empty dynamic array of size size
const arr3 = Array.from("hello") //this will create a array from the passed iterable
console.log(arr2)
console.log(arr3)

//testing dynamicity
arr3[arr3.length + 10] = "z"
console.log(arr3)

arr2.push(4) //appends the element at the back of the array
console.log(arr2)
arr2.pop() //pops out the last element of the array
console.log(arr2)
const first_element = arr3.shift() //removes the first element of the array and returns it
console.log(arr3)
console.log(first_element)
arr3.unshift(4) //inserts a new element to the start of the array
console.log(arr3)

console.log(arr3.indexOf("l")) //return the index of first occurence of passed object
console.log(arr3.lastIndexOf("l")) //return the index of last occurance of passed object

console.log(arr3.includes("l")) //returns a boolean corresponding the presence of the object passed
console.log(arr3.includes(7)) //false

const arr4 = [4,6,7,8]
const arr5 = arr3.concat(arr4) //concats arr4 to arr3
console.log(arr5)

const str = arr5.join("|") //add all the elements in the array with the specified character and then returns the string
console.log(str)

const sliced_arr = arr4.slice(1, 3) //1 include 3 not included (index), returns the slice of the array
console.log(sliced_arr)
console.log(arr4)

const spliced_arr = arr4.splice(1, 2) //start splicing from 1 till 2 elements, returns the spliced array
console.log(spliced_arr)
console.log(arr4)
