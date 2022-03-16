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
class block {
	size = 16
	mss = 64
	constructor(name, ss, blockt, blockmd) {
		this.name = name;
		this.ss = ss;
		this.blockt = blockt;
		this.blockm = blockmd;
	}
}
let block1 = new block("Block #1", 16, "FFF", true)
let block2 = new block("Block #2", 32, "00F", false)
let block3 = new block("Block #3", 64, "0F0", false)
let block4 = new block("Block #4", 56, "F0F", true)
let block5 = new block("Block #5", 64, "000", true)
let block6 = new block("Block #6", 16, "FF0", false)
let block7 = new block("Block #7", 16, "0FF", false)
let block8 = new block("Block #8", 64, "F00", true)
class box {
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
		super(shape);
		this.name = name;
		this.blocks = blocks;
	}
}
let blockbox1 = new blockbox("Blockbox #1", [block1, block2, block3, block4, block5, block6, block7, block8], box.defaultsize)
logString(blockbox1.name)
logString(blockbox1.shape)
logString(blockbox1.blocks[0].name)
logString(box.defaultsize)