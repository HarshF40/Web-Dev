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
	console.log(`User requested  home page`);
	//This is a endpoint number 1 - /
	//console.log(`Yay I hit an endpoint ${req.method}`);
	//testing custom status code
	res.status(599).send(`
		<body style="background-color: black color: white">
		<h1>homepage</h1>
		<a href="/dashboard">Dasbboard</a>
		</body>
		<script>
		
		</script>
		`); //sending the response to the client
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
	res.send(`
		<body style="background-color: pink; color: black"> 
		<p>${JSON.stringify(data)}</p>
		<a href="/">Home</a>
		</body>`); //default status code is 200, because it was a successful request
});
///////////////////////////////////////////////////////////////
let data = [`james`]
//api endpoints type2 (non visual) :
//to test this we need client emulator which makes things easy
////////////////////////////////////////////////////////////////////
// CRUD-method create-POST, read-GET, update-PUT, delete-DELETE////
//////////////////////////////////////////////////////////////////
app.get(`/api/data`, (req, res) => {
	console.log(`This is for the data`);
	res.send(data); ;
});

//we are telling our app that it need to to use expresse.json() and expect to receive
app.use(express.json())

//POST : creating data
app.post('/api/data', (req, res) => {
	console.log(`Taking in the value...`);
	// someone wnats to create an user (for example when they click a sign up button)
	//the user clicks on the sign up button after entering their credentials,and
	//their browser is wired up to send out a network request to the server to handle that exception
	const newEntry = req.body; //most of the times body contains the actual request
	//body is associated with 
	console.log(newEntry); //without middleware the value will look undfefined
	//so we use middlewares
	data.push(newEntry.name);
	//we put middleware in between incoming request and interprerting request
	res.sendStatus(201);
});

//to delete the data
app.delete('/api/data', (req, res) => {
	data.pop()
	console.log(`We deleted the element off the end of the array`);
	res.sendStatus(203);
});


//always at the last line
//listens to the incoming requests to this IP adrress Specifically to the PORT assigned
//callback function is passed to be executed when our server is up and running
app.listen(PORT, () => console.log(`Server: Running on PORT ${PORT}`));