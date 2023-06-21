let cities = document.querySelector("#select-city");
cities.addEventListener("change", showSelectedCity);

let parisTime = moment()
	.tz("Europe/Paris")
	.format("dddd, MMMM Do YYYY, h:mm:ss a");

let tokyoTime = moment()
	.tz("Asia/Tokyo")
	.format("dddd, MMMM Do YYYY, h:mm:ss a");

let sydneyTime = moment()
	.tz("Australia/Sydney")
	.format("dddd, MMMM Do YYYY, h:mm:ss a");

let parisElement = document.querySelector("#paris");
parisElement.innerHTML = parisTime;

let tokyoElement = document.querySelector("#tokyo");
tokyoElement.innerHTML = tokyoTime;

let sydneyElement = document.querySelector("#sydney");
sydneyElement.innerHTML = sydneyTime;

function showSelectedCity(event) {
	if (event.target.value.length > 0) {
		if (event.target.value === "paris") {
			alert(`It is currently ${parisTime}, in Paris`);
		}
		if (event.target.value === "tokyo") {
			alert(`It is currently ${tokyoTime}, in Tokyo`);
		}
		if (event.target.value === "sydney") {
			alert(`It is currently ${sydneyTime}, in Sydney`);
		}
	}
}
