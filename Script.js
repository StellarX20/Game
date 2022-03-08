function logString(loggedString) {
	console.log (loggedString);
}
randomNum = Math.random() * 10
function logxGY(num1, num2, trueString, falseString, exactString) {
	if (num1 > num2) {
		logString(trueString)
	}
	if (num2 > num1) {
		logString(falseString)
	}
	if (num1 == num2) {
		logString(exactString)
	}
}
logxGY(randomNum, 5, ">5", "<5", "=5")
function alertString(alertString) {
	alert(alertString);
}
function alertxGY(num1, num2, trueString, falseString, exactString) {
	if (num1 > num2) {
		alertString(trueString)
	}
	if (num2 > num1) {
		alertString(falseString)
	}
	if (num1 == num2) {
		alertString(exactString)
	}
}
logString("Startup Message")
function HTMLW(WrittenString, ParagraphID) {
	let html = document.getElementById(ParagraphID).innerHTML = WrittenString; 
}
function HTMLB(ClassName, ButtonID) {
	let html = document.getElementById(ButtonID).className = ClassName;
}
function backgroundColor(color) {
document.body.style.background = color;
}
