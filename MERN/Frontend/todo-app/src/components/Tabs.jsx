export function Tabs(props) {

  //definiiig array for the tabs
  const tabs = ["All", "Open", "Completed"]
  const { todos } = props

  return(
    <nav className="tab-container">

      {
       //we always return html code which is inside (), key to give a seperate identity to each button
        tabs.map((tab, tabIndex) => {


          const numOfTasks = tab === 'All' ? todos.length : tab === "Open" ? todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length

          return (
            <button key={tabIndex} className="tab-button">
              <h4>{tab}<span> ({numOfTasks})</span></h4>
            </button>
          )
        })
      }

    </nav>
  )
}
