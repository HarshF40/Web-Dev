///////////////////////////////The tokens will be stored in the local storage as usual

import express from "express";
//the below imports will help to locate the frontend files
import path, {dirname} from "path";
import { fileURLToPath } from "url";
import authRoutes from './routes/authRoutes.js'; //import the router from authRoutes
import todoRoutes from './routes/todoRoutes.js'
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();
const PORT = process.env.PORT || 5000; //checks if PORT variable is there in .env or uses the default PORT (here 5000)

// Get the file path from the URL of the current module
const __filename = fileURLToPath(import.meta.url);
//console.log(__filename); ///home/harsh/Web-Dev/MERN/Backend/chapter3/src/server.js
// Get the directory name from the file path
//this will give the absolute path of the location of the file
const __dirname = dirname(__filename);
//console.log(__dirname); ///home/harsh/Web-Dev/MERN/Backend/chapter3/src

//////////// Middlewares
// configures our app to expect json 
// enbales to parse and interpret JSON
app.use(express.json());
//Serves the HTML file from the /public directory
// Tells express to serve all files from the public folder as static assets/file. Any request for the css files will be resolved to the public directory
//app.use is a middleware function in express. It is used to execute functions before the request reaches the actual route handler
//.static is a built-in middleware in Express that serves static files from a specified directory
//Now this will serve the files from //home/harsh/Web-Dev/MERN/Backend/chapter3/public
app.use(express.static(path.join(__dirname, '../public')));
console.log("hi0")
// Serving up the HTML file from the /public directory
app.get('/', (req, res) => {
    //to send the file
    //the path here will be //home/harsh/Web-Dev/MERN/Backend/chapter3/public/index.html
    console.log("hi1");
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

//Routes
//this will use the handlers in authRoutes
//for any requests in /auth use routers in authRoutes
app.use('/auth', authRoutes);
//every single endpoint reuqest is blocked by the middleware for authentication
app.use('/todos',authMiddleware, todoRoutes);

app.listen(PORT, () => {
    console.log(`Server: Running on PORT ${PORT}`);
});
