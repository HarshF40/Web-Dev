import { Header } from "./components/Header"
import './App.css'
import { Tabs } from "./components/Tabs"
import { TodoList } from "./components/TodoList"
import { TodoInput } from "./components/TodoInput"
import { useState } from "react"

function App() {

  //defined here because it easy for children to take the data from the parent 
//  const todos = [
//    { input: 'Hello! Add your first todo!', complete: true },
//    { input: 'Get the groceries!', complete: false },
//    { input: 'Learn how to web design', complete: false },
//    { input: 'Say hi to gran gran', complete: true },
//  ]

  //to make website dynamic we use useState
  //setter function
  //useState is a react hook, to manipulate or manage data on the page
  //first elements(s) are varibales, last one(s) function
  //default value here is an empty list (no todos)
  //useState are immutable
  const [todos, setTodo] = useState([])

  function handleAddTodo(newTodo) {
    //adding a todo
    const newTodoList = [...todos, {input : newTodo, complete: false}]
    setTodo(newTodoList)
  }

  function handleEditTodo() {

  }

  function handleDeleteTodo() {

  }

  return (
    <> {/* empty tag, to avoid reduntant tag */}
 
    {/* the nested components will be added in the file of the parent component */}
    {/* we can pass down the the values as props as shown below */}
    {/* then we can destructure and obtain the values */}
    <Header todos={todos}/>
    <Tabs todos={todos}/>
    <TodoList todos={todos}/>
    <TodoInput todos={todos} handleAddTodo={handleAddTodo} />

    </>
  )
}

export default App
