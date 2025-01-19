const prompt = require('prompt-sync')()

const addStudents = () => {
	const name = prompt("Enter Name: ")
	const age = Number(prompt("Enter Age: ")) //returns string
	const grades = []
	console.log("enter x to stop reading grades")
	while(true) {
		let grade = prompt("Enter the grades: ")
		if(grade === 'x'){
			break
		} else {
			if(isNaN(grade)) {
				console.error("Invalid Input")
			} else {
				grades.push(Number(grade))
			} 
		}
	}
	return {
		"name": name,
		"age": age,
		"grades": grades
	}
}

const avgGrades = (students, index) => {
	const {grades} = students[index]
	return (grades.reduce((acc, grade) => acc + grade, 0) / grades.length)
}

const updateStatus = (students) => {
	for(let i = 0; i<students.length; i++){
		students[i].avg_grades = Number(avgGrades(students, i))
		if(students[i].avg_grades >= 50) {
			students[i].status = "pass"
			if(students[i].avg_grades >= 80){
				students[i].scholorship = "eligible"
			} else {
				students[i].scholorship = "ineligibe"
			}
		} else {
			students[i].status = "fail"
			students[i].scholorship = "ineligible"
		}
	}
}

const sortStudents = (students) => {
	students.sort((a, b) => b.avg_grades - a.avg_grades)
}

const main = () => {
	let students = []
	students.push(addStudents())
	students.push(addStudents())
	students.push(addStudents())
	console.log(students)
	updateStatus(students)
	console.log(students)
	sortStudents(students)
	console.log(students)
}

main()
