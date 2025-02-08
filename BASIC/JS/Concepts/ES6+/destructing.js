//==================================Swapping Values=======================================
let a = 1;
let b = 2;
[a, b] = [b, a]; //values swapped
console.log(a, b);
//===========================Extarcting Values from Array=================================
const colors = ["red","green","blue","yellow"];
[firstColor, secondColor, ...restColor] = colors; //asssigning parts of the array
console.log(firstColor, secondColor, restColor);
//==========================Extracting Values from Objects================================
const person1 = {
	firstName : "SpongeBob",
	lastName : "SquarePants",
	age : 30,
	job : "fry cook",
}
const person2 = {
	firstName : "Patrick",
	lastName : "Star",
	age : 28,
}
const {firstName: firstName1, lastName: lastName1, age: age1, job: job1} = person1;
console.log(firstName1, lastName1, age1, job1);
const {firstName: firstName2, lastName: lastName2, age: age2, job: job2 = "unemployed"} = person2; //we can also pass default values
console.log(firstName2, lastName2, age2, job2);

//spreading in objetcs
const olderSpongeBob = {
	...person1,
	age: 77, //we can also override the values by this method
}
console.log(olderSpongeBob)
