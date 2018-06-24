//1. Write code so that the colour inputs match the background generated on the first page load. 
//2. Display the initial CSS linear gradient property on page load.
//3. Add a random button which generates two random numbers for the colour inputs.
var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background + ";";
}

function setInitialInputColor() {
	color1.value = "#0000ff";
	color2.value = "#ffc0cb";
}

function setInitialBackgroundColor() {
	setGradient();
}

setInitialInputColor();
setInitialBackgroundColor();
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);