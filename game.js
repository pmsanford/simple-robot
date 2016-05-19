var GameController = function() {
	this.display = new ROT.Display();
	var opts = this.display.getOptions();
	this.map = new GameMap(opts.width - 50, opts.height);
	this.rover = new Rover(10, 10);
	this.status = new RoverStatus(opts.width - 50, 0, this.rover);
	this.engine = null;
	this.scheduler = null;
	this.controller = null;
	this.rc = null;
};

GameController.prototype.init = function(targetDiv) {
	targetDiv.append(this.display.getContainer());
	var prog = new Uint8Array([
		0b01011100, 0b01111111,
		0b01100110, 0x01,
		0b01011110, 0x02,
		0b01101100, 0x04,
		0b01001000, 0x02,
		0b00110000, 0b11111000,
		0b01011100, 0x0,
		0b01100110, 0x01,
		0b01011100, 0b01111111,
		0b01100110, 0x00,
		0b11110000, 0x0
	]);
	this.rover.load(prog);
	this.scheduler = new ROT.Scheduler.Simple();
	this.engine = new ROT.Engine(this.scheduler);
	this.controller = new Controller(this);
	this.rc = new RenderController(this);
	this.scheduler.add(this.controller, true);
	this.scheduler.add(this.rover, true);
	this.scheduler.add(this.rc, true);
	this.engine.start();
	this.render();
};

GameController.prototype.render = function() {
	this.display.clear();
	this.map.draw(this.display);
	this.rover.draw(this.display);
	this.status.draw(this.display);
};

Game = new GameController();
