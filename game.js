var GameController = function() {
	this.display = new ROT.Display();
	this.logger = new DebugLogger(true);
	var opts = this.display.getOptions();
	this.map = new GameMap(opts.width - 50, opts.height);
	this.rover = new Rover(10, 10, this.logger, this);
	this.status = new RoverStatus(opts.width - 50, 0, this.rover);
	this.engine = null;
	this.scheduler = null;
	this.controller = null;
	this.rc = null;
	this.game_group = new RenderGroup();
	this.current_groups = [this.game_group];
};

GameController.prototype.reset_rover = function(program) {
	this.scheduler.remove(this.rover);
	this.game_group.remove(this.rover);
	this.rover = new Rover(10, 10, this.logger, this);
	this.scheduler.add(this.rover, true);
	var opts = this.display.getOptions();
	this.status = new RoverStatus(opts.width - 50, 0, this.rover);
	this.rover.load(program);
	this.game_group.add(this.rover);
	this.render();
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
	this.controller = new RoverController(this);
	this.rc = new RenderController(this);
	this.scheduler.add(this.controller, true);
	this.scheduler.add(this.rover, true);
	this.scheduler.add(this.rc, true);
	this.engine.start();
	this.game_group.add(this.map);
	this.game_group.add(this.rover);
	this.game_group.add(this.status);
	this.render();
};

GameController.prototype.can_move = function(x, y) {
	return !this.map.check_collision(x, y);
};

GameController.prototype.render = function() {
	this.display.clear();
	for (var i = 0; i < this.current_groups.length; i++) {
		this.current_groups[i].draw(this.display);
	}
};

Game = new GameController();
