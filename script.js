var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("Gradient");
var btn = document.querySelector("button");

let el = document.querySelector("body");
var style = getComputedStyle(el).background;
const colorMatch = style.match(/\((\d+, \d+, \d+\))/g);
let match1 = colorMatch[0];
let match2 = colorMatch[1];
let rgbValues1 = match1.match(/\d+/g);
let rgbValues2 = match2.match(/\d+/g);
var nums1 = rgbValues1.map(function(str) {
	return parseInt(str);
});
var nums2 = rgbValues2.map(function(str) {
	return parseInt(str);
});
let r1 = nums1[0], g1 = nums1[1], b1 = nums1[2];
let r2 = nums2[0], g2 = nums2[1], b2 = nums2[2];
function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}
function rgbToHex(r, g, b) {
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
let hex1 = rgbToHex(r1,g1,b1);
let hex2 = rgbToHex(r2,g2,b2);

color1.value = hex1;
color2.value = hex2;

function setGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function newRandom() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
}

btn.addEventListener('click', newRandom);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);