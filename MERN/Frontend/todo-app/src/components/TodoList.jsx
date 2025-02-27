import { TodoCard } from "./TodoCard";

export function TodoList(props) {

  const { todos } = props
  const tab = "All"
  const filterTodosList = tab === "All" ? todos : tab === "completed" ? todos.filter(val => val.complete) : todos.filter(val => !val.complete)

  return(
    <>
    {
      filterTodosList.map((todo, todoIndex) => {
        return (
          <TodoCard key={todoIndex} todo={todo} />
        )
      })
    }
    </>
  )
}
