//session storage
//==> key, value pair on client side
//    data last longs as long as the session goes on (open Tab)

const input = document.getElementById("value")
const button = document.getElementById("take")
const hello = document.getElementById("greet")

button.addEventListener("click", () => {
	sessionStorage.setItem("value", input.value)
	location.reload()
})

window.addEventListener('load', () => {
	hello.innerText = sessionStorage.getItem("value")
})

sessionStorage.setItem("value1", 2)
sessionStorage.setItem("value3", 838)
sessionStorage.setItem("value4", 28394)

for(let i = 0; i < sessionStorage.length; i++)
	console.log(sessionStorage.getItem(sessionStorage.key(i)))
