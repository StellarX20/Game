// Useless data storage (Now useful data storage)
class block {
	constructor(name, color, material) {
		this.name = name;
		this.color = color
		this.mat = material
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
const c = document.getElementById("canvas");
const ctx = c.getContext("2d");
const ps = 5
const pi = Math.PI
const convdeg = 180/pi
const defaultblock = new block("Default Block", "#ffffff", "none")
const sand = new block("Sand Grain", "#e6d3a5", "powder")
const water = new block("Water Droplet", "#0040ff", "liquid")
// Easy pixel function
function pixel(x, y, blc = defaultblock) {
	ctx.fillStyle = blc.color;
	ctx.fillRect(x * ps, (-y + 150) * ps, ps, ps)
}
// c.addEventListener("click", test(water));
function test(blc) {
	pixel(c.offsetX, c.offsetY, blc)
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