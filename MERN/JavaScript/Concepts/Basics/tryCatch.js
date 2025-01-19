try {
	riskyFunction()
} catch(error) {
	console.error("An error occurred", error.message)
} finally {
	console.log("clean up code")
}
