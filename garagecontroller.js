var GarageController = function(garage, done_cb, draw_cb) {
	this.garage = garage;
	this.cb = done_cb;
	this.draw = draw_cb;
};

GarageController.prototype.hook = function() {
	window.addEventListener("keydown", this);
};

GarageController.prototype.handleEvent = function(e) {
	if (e.keyCode === ROT.VK_ESCAPE) {
		window.removeEventListener("keydown", this);
		this.leave();
	}
	this.draw();
};

GarageController.prototype.leave = function() {
	this.cb();
};