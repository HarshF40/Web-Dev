import React, { useState } from 'react'

const TodoList = () => {

  const [todos, setTodo] = useState([])
  const [inputValue, setInputValue] = useState('')


  const handleSubmit = (event) => {
    event.preventDefault()
    if(inputValue.trim()){
      setTodo([...todos, inputValue])
      setInputValue("")
    }
  }

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  return (
    <div>
    <h1>Todo List</h1>

    <form onSubmit={handleSubmit}>
      <input type='text' value={inputValue} onChange={handleChange} placeholder='Todo'/>
      <button type='submit'>Add todo</button>
    </form>

    <ul>
    {
      todos.map((todo, index) => (
        <li key={index}>{todo}</li>
      ))
    }
    </ul>

    </div>
  )
}

export default TodoList
