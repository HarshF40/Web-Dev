import express from 'express';
import db from '../db.js';

const router = express.Router();

//Get all todos for logged in user
router.get('/', (req, res) => {
    //select all the coloumms or rows whatever it is and match the user_id 
    const getTodos = db.prepare(`
        SELECT * FROM todos WHERE user_id = ?
        `);
        //select all the todos associated with userID(userID becuase we have a middleware)
        const todos = getTodos.all(req.userId);
        console.log("helooooooooo");
        res.json(todos);
});

//create a new todo
router.post('/', (req, res) => {

});

// Update a todo
//:id because we need to access that data in the database
router.put('/:id', (req, res) => {

});

//delete a todo
router.delete('/:id', (req, res) => {

});

export default router