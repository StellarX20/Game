// Function to console.log for lazy people
function log(logged = "Error", style = "Error") {
	if (typeof(logged) == "object") {
		var obkeys = Object.keys(logged)
				var logstr = ""
				for (let i = 0; i < obkeys.length; i++) {
					let obkeysi = obkeys[i]
					eval("logstr += (obkeysi + ': ' + logged." + obkeysi + " + ', ')")
				}
		console.log(logstr);
		return logged
	}
}
// Define stuff for later
var randomNum = Math.floor(Math.random() * 10)
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
log("%c Welcome to the console!", "font-size: 10em; font-family: helvetica; color: #abcdef; text-shadow: 0px 5px #9abcde;")
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
function linkbtn(link) {
	document.location = String(link)
}
function tetr(x,y) {
	var z = x
	var func = "z = " + "(z **".repeat(y-1) + "z" + ")".repeat(y-1)
	eval(func)
	return z
}
function roundb(x,y) {
	return (Math.round(x*(10**y)))/(10**y)
}
function repdigitold(x,y) {
	//return floor((10x/9)*(10^(floor(|y|))))
	return Math.floor(((x/9)*(Math.pow(10,(Math.floor(Math.abs(y))))))-0.1)
}
function repdigit(x,y) {
	return Number(String(x).repeat(y))
}
const sl = document.getElementById("stylelink")
const cssvars = document.querySelector(':root');
const cssvarscs = getComputedStyle(cssvars);
var darkm = {bool: true};
function changevar(vari, newv) {
	var oldv = cssvarscs.getPropertyValue(vari);
	cssvars.style.setProperty(vari, newv);
	return "Succesfully changed " + String(vari) + " from " + String(oldv) + " to " + String(newv) + "!";
}
function setdark() {
	changevar("--divb", "#1f1f1f")
	changevar("--mbc", "#000")
	changevar("--mfc", "#fff")
	darkm.bool = true;
}
function setlight() {
	changevar("--divb", "#eee")
	changevar("--mbc", "#fff")
	changevar("--mfc", "#000")
	darkm.bool = false;
}
function switchstyle(isdark = darkm.bool) {
	if (isdark == false) {
		setdark()
	}
	else {
		setlight()
	}
	return darkm.bool
}