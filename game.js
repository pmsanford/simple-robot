var GameController = function() {
	this.display = new ROT.Display();
	var opts = this.display.getOptions();
	this.map = new GameMap(opts.width, opts.height);
	this.rover = new Rover(10, 10);
};

GameController.prototype.init = function(targetDiv) {
	targetDiv.append(this.display.getContainer());
	var prog = new Uint8Array([
		0b01011100, 0b01111111,
		0b01100110, 0x01,
		0b01011110, 0x00,
		0b01101100, 0x04,
		0b01001000, 0x01,
		0b00110000, 0b11111000,
		0b01011100, 0x0,
		0b01100110, 0x01,
		0b01011100, 0b01111111,
		0b01100110, 0x02,
		0b11110000, 0x0
	]);
	this.rover.load(prog);
	this.render();
};

GameController.prototype.render = function() {
	this.map.draw(this.display);
	this.rover.draw(this.display);
};

Game = new GameController();
