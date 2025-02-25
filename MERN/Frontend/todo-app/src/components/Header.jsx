export function Header(props) {

  const { todos } = props //obtaining the passed value
  const isTaskPlural = todos.length != 1
  const taskOrTasks = isTaskPlural ? "tasks" : "task"

  return (
    <header>
      <h1 className="text-gradient">You have {todos.length} open {taskOrTasks}.</h1>
    </header>
  )

}
