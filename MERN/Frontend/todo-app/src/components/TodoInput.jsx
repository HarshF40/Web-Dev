import { useState } from "react"

export function TodoInput(props) {

  const { handleAddTodo } = props
  const [inputValue, setInputValue] = useState("")

  return (
    <div className="input-container">
      <input value={inputValue} placeholder="Add task" />
      <button onclick={}><i class="fa-solid fa-plus"></i></button>
    </div>
  )
}
