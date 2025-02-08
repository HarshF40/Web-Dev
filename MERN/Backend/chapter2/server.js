//to set up a server in expressJS only 4 lines are needed
//1. import expressJS
//2. Initialise expressJS by assiging it to a app-object
//3. Define(assign) a PORT
//4. listen to the requests made to that port
////////////////////////////////////////////////////////////////
//The address of this server connected to the network is: 
//URL -> http://localhost/8888
//IP -> 127.0.0.1:8888


//import express
//assigning to a constant to use the features provided my express
const express = require('express');


//defining backend application
const app = express();
//console.log(`Testing nodemon`);


//PORTs are 'sub parts' of the IP adrress which does a specific task
//There are 0-65535 ports (16 bit)
//defining a PORT
const PORT = 8888;


//We need to configure our server to interpret the incoming requests
//We need to set up Endpoints =  HTTPS(Methods) Verbs and Routes(Paths)
//
//when user/client 'request' to 'get' something
//first arguement is route
//second arguement logic to handle the request
//the arrow function then has two arguements:
//request 
//response
//The method informs the nature of the request and the route is a further subdirectory (basically we direct the request to the body of the code to respond appropriately, and these locations or routes are called endpoints)
//////////////////////////////////////////////////////////////
//website endpoints type1 (visual) : these endpoints are for sending back html and they typically come when a user enters a url in browser
app.get('/', (req, res) => {
	//This is a endpoint number 1 - /
	//console.log(`Yay I hit an endpoint ${req.method}`);
	res.send(`<h1>homepage</h1>`); //sending the response to the client
	//used to send html code
	//JSON objects, etc
	//status codes like 200, 404 are shothand notation of the status
	//200 - 299 -> successful request
	//400 - 499 -> not found / error in communication
	//500 - 599 -> error on the server side
});
//
//get request handling for /dashboard
app.get('/dashboard', (req, res) => {
	//console.log(`Ohhh now i hit the /dashboard endpoint`);
	res.send('<h1>dasshboard</h1>'); //default status code is 200, because it was a successful request
});
///////////////////////////////////////////////////////////////
let data = {
	name: `james`
}
//api endpoints type2 (non visual) :
//to test this we need client emulator which makes things easy
app.get(`/api/data`, (req, res) => {
	console.log(`This is for the data`);
	res.send(data);
});


//always at the last line
//listens to the incoming requests to this IP adrress Specifically to the PORT assigned
//callback function is passed to be executed when our server is up and running
app.listen(PORT, () => console.log(`Server: Running on PORT ${PORT}`));
