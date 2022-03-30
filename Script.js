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
// Useless data storage (Now useful data storage)
class block {
	constructor(name, color) {
		this.name = name;
		this.color = color
	}
}
// Example code: The adventure of pointlessness
/* class box {
	static defaultsize = "2x2"
	constructor(label, contained, shape, to, from) {
		this.name = label
		this.contents = contained;
		this.shape = shape;
		this.receiver = to;
		this.sender = to;
	}
}
class blockbox extends box {
	constructor(name, blocks, shape) {
		super(name);
		this.shape = shape
		this.blocks = blocks;
	}
}
// Make use of my example code
let blockbox1 = new blockbox("Blockbox #1", [block1, block2, block3, block4, block5, block6, block7, block8], box.defaultsize)
log(blockbox1.name)
log(blockbox1.shape)
log(blockbox1.blocks[3].name)
log(blockbox1.blocks[3].ss + blockbox1.blocks[6].ss - blockbox1.blocks[1].ss) */
// The usual
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var ps = 5
var pi = Math.PI
var convdeg = 180/pi
var defaultblock = new block("Default Block", "#ffffff")
var sand = new block("Sand Grain", "#e6d3a5")
// Easy pixel function
function pixel(x, y, blc = defaultblock) {
	ctx.fillStyle = blc.color;
	ctx.fillRect(x * ps, (-y + 150) * ps, ps, ps)
}
pixel(1,50)
pixel(2,100)
pixel(3,150)
pixel(0,0)
pixel(0,150)
pixel(300,150)
pixel(150,75)
pixel(50,50,sand)
pixel(51,50,sand)
pixel(52,50,sand)
pixel(50,53,sand)
pixel(52,53,sand)
pixel(49,51,sand)
pixel(53,51,sand)