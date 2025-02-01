//-->function multiplyby5(num){return num*5}
//-->multiplyby5.number = 2
//-->console.log(multiplyby5(2))
//-->console.log(multiplyby5.number)
//
//
//
//this works becuase everthing in javascript is an object, and fucntion is an object too
//we can make function behave as object
//this is due to prototypal inheritance which mean, javascript tries to acces everthing of the
//particular thing till it gets null reference,
//and in the end everthing is object in js
///////////////////////////////////////////////////////////////////////////////////////////////
function createUser(username, score){ //this will behave as a class contructor to create object
	this.username = username
	this.score = score
}
createUser.prototype.increment = function(){
	this.score++ //we use this keyword because to refer to the object(caller), if there was no this it would give error,  increment method is defined on protoype and not on the object, so the js goes 1 level up to find the method, and all the object points to same prototype.
}
const admin = new createUser("admin", 69) //new beacuse it creates the normal function into the constructor
//function which is used to create object
//The newly created object gets linked to prototype properties of the constructor function
//this means that it has access to properties and method defined on the constructors prototype 
console.log(admin.username, admin.score);
admin.increment();
console.log(admin.score)
//prototype is  like a fallback object, it is actually  an another object which inherits the properties or methods from the parent
//prototyping is more memeory efficient that directly defining the methpd as by protopying you only create once instace of that method for all the instances and in normal way you make instance of the method for each object
///////////////////////////////////////////////////////////////////////////////////////////////
