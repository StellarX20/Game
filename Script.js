// Function to console.log for lazy people
function log(loggedString) {
	console.log (loggedString);
	return loggedString
}
// Define stuff for later
randomNum = Math.floor(Math.random() * 10)
// Random number trinket
function logxGY(num1, num2, trueString, falseString, exactString) {
	if (num1 > num2) {
		log(trueString)
	}
	if (num2 > num1) {
		log(falseString)
	}
	if (num1 == num2) {
		log(exactString)
	}
}
// Use the trinket
logxGY(randomNum, 5, ">5", "<5", "=5")
// Why
function alrt(alertString) {
	alert(alertString);
}
// Alert version of random number trinket
function alertxGY(num1, num2, trueString, falseString, exactString) {
	if (num1 > num2) {
		alrt(trueString)
	}
	if (num2 > num1) {
		alrt(falseString)
	}
	if (num1 == num2) {
		alrt(exactString)
	}
}
log("Startup Message")
// Making it easier to change things with button clicks
function HTMLW(WrittenString, ParagraphID) {
	let html = document.getElementById(ParagraphID).innerHTML = WrittenString; 
}
function HTMLB(ClassName, ButtonID) {
	let html = document.getElementById(ButtonID).className = ClassName;
}
// Useless function definitions
function backgroundColor(color) {
document.body.style.background = color;
}
function repdigit(x,y) {
	//return floor((10x/9)*(10^(floor(|y|))))
	return Math.floor(((x/9)*(Math.pow(10,(Math.floor(Math.abs(y))))))-0.1)
}
sl = document.getElementById("stylelink")