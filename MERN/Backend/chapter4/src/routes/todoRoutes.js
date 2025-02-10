import express from 'express';
import prisma from '../prismaClient.js';

const router = express.Router();

//Get all todos for logged in user
///////////////////////////find many for all todos using prisma/////////////////////////
router.get('/', async (req, res) => {
    // after the prisma. we access/specify the model we defined... we have to access the models using the lowercase version on the model name
        const todos = await prisma.todo.findMany({ //find many because we want all the todo
            where: {
                userId: req.userId
            }
        }) 
        res.json(todos);
});
////////////////////////////////////////////////////////////////////////////////////////

//create a new todo/////////////////////////////////////////////////////////////////////
router.post('/', async (req, res) => {
    const {task} = req.body
    const todo = await prisma.todo.create({
        data: { //data: because we are inserting the data
            task,
            userId: req.userId
        }
    })
        res.json(todo)
});
////////////////////////////////////////////////////////////////////////////////////////

// Update a todo
//:id because we need to access that data in the database
router.put('/:id', async (req, res) => {
    const { completed } = req.body
    const { id } = req.params //param because it in the URL
///////////////////////////Updating////////////////////////////////////////////////////
    const updatesTodo = await prisma.todo.update({
        where: {
            id: parseInt(id),
            userId: req.userId
        },
        data: {
            completed: !!completed, //if completed is numeric it will convert it to boolean
        }
    })
////////////////////////////////////////////////////////////////////////////////////////
        res.json(updatesTodo);
});

//delete a todo
router.delete('/:id', async (req, res) => {
    const { id } = req.params
////////////////////////deleting using prisma client////////////////////////////////////
    await prisma.todo.delete({
        where:{
            id : parseInt(id),
            userId: req.userId
        }
    })
////////////////////////////////////////////////////////////////////////////////////////
    res.json({message: "Succesfully Deleted"})
});

export default router