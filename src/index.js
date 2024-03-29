function updateTime() {
	let dublinElement = document.querySelector("#dublin");
	let dublinDate = dublinElement.querySelector(".date");
	let dublinTime = dublinElement.querySelector(".time");
	let dublin = moment().tz("Europe/Dublin");

	dublinDate.innerHTML = dublin.format("dddd, MMMM Do YYYY");
	dublinTime.innerHTML = dublin.format("h:mm:ss [<small>]A[<small>]");

	let buenosAiresElement = document.querySelector("#buenos-aires");
	let buenosAiresDate = buenosAiresElement.querySelector(".date");
	let buenosAiresTime = buenosAiresElement.querySelector(".time");
	let buenosAires = moment().tz("America/Argentina/Buenos_Aires");

	buenosAiresDate.innerHTML = buenosAires.format("dddd, MMMM Do YYYY");
	buenosAiresTime.innerHTML = buenosAires.format(
		"h:mm:ss [<small>]A[</small>]"
	);

	let romeElement = document.querySelector("#rome");
	let romeDate = romeElement.querySelector(".date");
	let romeTime = romeElement.querySelector(".time");
	let rome = moment().tz("Europe/Rome");

	romeDate.innerHTML = rome.format("dddd, MMMM Do YYYY");
	romeTime.innerHTML = rome.format("h:mm:ss [<small>]A[</small>]");
}

function showSelectedCity(event) {
	let cityTimeZone = event.target.value;
	if (cityTimeZone === "current") {
		cityTimeZone = moment.tz.guess();
	}
	let cityName = cityTimeZone.replace("-", " ").split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let cityElement = document.querySelector(".cities");
	cityElement.innerHTML = `<div class="city">
					<div>
						<h2>${cityName}</h2>
						<div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
					</div>
					<div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
		"A"
	)}</small> </div>
				</div> <a href="/"> All cities</a>`;

	setTimeout(() => {
		showSelectedCity(event);
	}, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let cities = document.querySelector("#select-city");
cities.addEventListener("change", showSelectedCity);
