const obj = {
	name: "ALice",
	age: 27,
	sayHello: function() {
		return "hello"
	},
	address: {
		city: "New York",
	} //nested object
}

obj.age = 28 //update the existing field or obj["age"]
obj.job = "SWE" //add a new field
//delete obj.address // delete the sepfied field

console.log(Object.values(obj)) //displays only the frist level excludes the nested object
console.log(Object.keys(obj)) //list all the key on the first level, exclued the nested objects

const obj2 = {
	hairColor: "Black",
	arr: [1,2,3]
}

//if both the objects contains the same field then the last one will update the previous ones
const obj3 = {...obj, ...obj2} //concatinates the two object using spread operator
console.log(obj3)

//copying using ... operator will be only applied on the first level, the nested ones will act as reference, for eg.
// here we change something in the address object of any other object then the adrress object of the other will also be changed
obj3.address.street = "123 fake street"
console.log(obj, obj3)

const {name, age} = obj3 //this will extract the name and age values from the obj3
console.log(name, age)
