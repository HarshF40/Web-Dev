// fetch --> function used for making HTTP requests to fetch resources.
// JSON style data, images, files
// simplifies asynchronous data fetching in Javascript and
// Used for interacting with APIs to retrieve and send data asynchronously over the web
/////////////////////////////////////////////////////////////////////////////////////////
//fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//	.then((response) => {
//		if(!response.ok){
//			throw new Error("Couldn't fetch the Pokemon")
//		}
//		return response.json()
//	})
//	.then((data) => {
//		console.log(data.name, data.weight, data.id)
//	})
//	.catch((error) => {
//		console.log(error)
//	})
/////////////////////////////////////////////////////////////////////////////////////////
// using async, await
const fetchData = async () => {
	try {
		const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
		if(!response.ok){ throw new Error("Couldnt fetch the Pokemon") }
		const data = await response.json()
		console.log(data.name, data.weight, data.id)
	} catch(error) { console.error(error) }
}
fetchData()
/////////////////////////////////////////////////////////////////////////////////////////
