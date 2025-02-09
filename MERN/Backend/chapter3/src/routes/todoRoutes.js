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
        console.log(todos) 
        res.json(todos);
});

//create a new todo
router.post('/', (req, res) => {
    const {task} = req.body
    const insertTodo = db.prepare(`
        INSERT INTO todos (user_id, task) VALUES (?, ?)
        `);
        const result = insertTodo.run(req.userId, task);
        res.json({id: result.lastInsertRowid, task, completed: 0})
});

// Update a todo
//:id because we need to access that data in the database
router.put('/:id', (req, res) => {
    const { completed } = req.body
    const { id } = req.params //param because it in the URL
    const updatedTodo = db.prepare(`
        UPDATE todos SET completed = ? WHERE id = ?
        `);
        updatedTodo.run(completed, id);
        res.json({message: "Todo Completed"});
});

//delete a todo
router.delete('/:id', (req, res) => {
    const { id } = req.params
    const deleteTodo = db.prepare(`
        DELETE FROM todos WHERE id = ? AND user_id = ?
        `);
    deleteTodo.run(id, req.userId);
    res.json({message: "Succesfully Deleted"})
});

export default router