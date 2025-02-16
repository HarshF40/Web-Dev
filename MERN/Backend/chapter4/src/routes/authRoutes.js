import express from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'; //alpha numeric key, secure password that we can associate with the user when they make future network request, but without needing them to signup again
import dotenv from "dotenv";
import prisma from '../prismaClient.js';

dotenv.config();

const router = express.Router();

//register a new user endpoint /auth/register
router.post('/register', async (req, res) => {
    // save the username and encrypted password
    const {username, password} = req.body; //body will come from the frontend
    //creating a hashed password
    const hashedPassword = bcrypt.hashSync(password, 8); //hashing the password for security
    console.log(hashedPassword);
    console.log("above try catch")

    try {
//////////////Creating a User in Prisma Client//////////////////////////////////////////
        const user = await prisma.user.create({ //returns the model object that we just
            //created
            data : {
            username,
            password: hashedPassword
            }
        })
        console.log("Created", user);
////////////////////////////////////////////////////////////////////////////////////////
            const defaultTodo = `Hello ; ) Add your first todo`; //default todo
/////////////////Inserting Todo in Prisma Client////////////////////////////////////////
            await prisma.todo.create({
                data : {
                task: defaultTodo,
                userId: user.id
                }
            })
////////////////////////////////////////////////////////////////////////////////////////
                //IMP Creating a token
                //we create a token because the user doesnt have to worry about signup again and again
                const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'}); //genearting token for seamless authentication
        res.json({token}); //sending the token to the front end
    } catch(err) { 
        console.log(err.message); 
        res.sendStatus(503);
    }
})

router.post('/login', async (req, res) => {
    //take users email and look up to the corresponding encrypted password in the database
    //take password from user, encrypt it and check if the newly encrypted password === to the previously stored encrypted password
    const {username, password} = req.body
    //whenever interacting with db put it in try catch block
    try {
//////////////////////////login with prisma/////////////////////////////////////////////
            //getting the user
            //findUnique because we are only finding one
            const user = await prisma.user.findUnique({
                where: {
                    username: username
                }
            })
////////////////////////////////////////////////////////////////////////////////////////
            //guard clause for the user
            if(!user) {
                return res.status(404).send({message: "user not found"});
            }

            //checking the password
            //this will hash the password and compare it to the previously hashed password
            //returns a boolean
            const passwordIsValid = bcrypt.compareSync(password, user.password)

            //guard clause for the password
            if(!passwordIsValid) {
                return res.status(401).send({message: "Incorrect Password"});
            }

            console.log(user);
            //then we have successful authentication
            const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '24h'});

            res.json({token});
    } catch(err) {
        console.log(err.message)
        res.sendStatus(503);
    }
})

export default router
