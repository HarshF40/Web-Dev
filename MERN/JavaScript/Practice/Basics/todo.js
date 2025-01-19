const PromptSync = require("prompt-sync")()

const prompt = require("prompt-sync")()

const addTask = (list) => {
	list.push({"task": prompt(`Enter Task: `), "status": "Incomplete"})
}

const listTask = (list) => {
	for(let [index, object] of list.entries()){
		console.log(`${index}. ${object.task}, Status: ${object.status}`)
	}
}

const removeTask = (list) => {
	listTask(list)
	const index = prompt(`Enter the Position of the task: `)
	list.splice(index, 1)
}

const markTask = (list) => {
	listTask(list)
	const index = prompt(`Enter the Position of the task: `)
	list[index].task = list[index].task + `✓`
	list[index].status = `Complete`
}

const filterTask = (list) => {
	const filtered = list.filter((obj) => obj.status === `Complete` )
	for(let {task} of filtered){
		console.log(`-->${task}`)
	}
}

const main = () => {
	let list = []
	let on = true
	while(on){
		console.log(`
			1. Add new todo
			2. Remove todo
			3. Mark todo as done
			4. List all todos
			5. Filter todos 
			6.exit
			`)
		const choice = Number(prompt(`Enter Choice: `))
		switch(choice){
			case 1 : addTask(list)
				break
			case 2 : removeTask(list)
				break
			case 3 : markTask(list)
				break
			case 4 : listTask(list)
				break
			case 5 : filterTask(list)
				break
			case 6 : return
			default : console.warn("Invalid Choice")
		}
	}
}

main()
