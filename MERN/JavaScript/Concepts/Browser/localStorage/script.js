//local Storage
//==> used to store data permanently

const button = document.getElementById('clickButton');
const uname = document.getElementById('username');
const greet = document.getElementById('greet')

button.addEventListener('click', () => {
	const value = uname.value;
	localStorage.setItem("name", value); //this value will be stored permanently
	location.reload(); //reloads the page where you are at
})

//this event is held up on the window
//when window is loaded add the name value to the inner text to the greet
window.addEventListener('load', () => {
	const value = localStorage.getItem("name");
	greet.innerText = value;
})
