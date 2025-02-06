//cookie = a small file stored on your computer
//used t0 remember information about the user save in name, value pairs
console.log(navigator.cookieEnabled); //to check if cookies is enabled or not
const firstText = document.getElementById("firstText");
const lastText = document.getElementById("lastText");
const submitBtn = document.getElementById("submitBtn");
const cookieBtn = document.getElementById("cookieBtn");

submitBtn.addEventListener("click", () => {
	setCookie("firstName", firstText.value, 365)
});
cookieBtn.addEventListener("click", () => {
	firstText.value = getCookie("firstName");
	lastText.value = getCookie("lastName");
});

//to add a cookie
//the cookies will have a field firstName=SpongeBob and will expire in Sun, 1 January 2030 12:00:00 UTC
document.cookie = "firstName=SpongeBob; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";
document.cookie = "lastName=SquarePants; expires=Sun, 1 January 2030 12:00:00 UTC; path=/";

//console.log(document.cookie);

//function to create cookies
const setCookie = (name, value, daysToLive) => {
	const date = new Date(); //returns information about todays date
	date.setTime(date.getTime() + (daysToLive*24*60*60*1000)); //sets the time to future
	//[epoch + daysToLive] in milliseconds.... 
	//so that the cookie expires in teh future time, date.getTime return millisecodns since epoch
	const expires = "expires=" + date.toUTCString(); //converts string to UTC string...
	document.cookie = `${name}=${value}; ${expires} path=/`;
}

setCookie("email", "css@html.js", 67);
setCookie("name", "ooga booga", 983);

const deleteCookie = (name) => {
	setCookie(name, null, null); //sets the expiry date to null which deletes the cookie
}

deleteCookie("firstName");
deleteCookie("lastName");
console.log(document.cookie);

const getCookie = (name) => {
	const cDecoded = decodeURIComponent(document.cookie); //decodes the previoulsy encoded URI strings
	const cArray = cDecoded.split("; ");
	let result = null;
	console.log(cArray);
	cArray.forEach(element => {
		if(element.indexOf(name) == 0) {
			result = element.substring(name.length + 1);
		}
	})
	return result;
}

console.log(getCookie("name"));
console.log(document.cookie);
