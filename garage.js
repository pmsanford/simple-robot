var Garage = function(rover, display, components) {
  this.rover = rover;
  this.display = display;
  this.equipment = components;
};

Garage.prototype.draw = function() {
	var opts = this.display.getOptions();
	for (var x = 0; x < opts.width; x++) {
		this.display.draw(x, 0, '#');
		this.display.draw(x, opts.height - 1, '#');
	}

	for (var y = 0; y < opts.height; y++) {
		this.display.draw(0, y, '#');
		this.display.draw(opts.width/2>>0, y, '|');
		this.display.draw(opts.width - 1, y, '#');
	}

	var installed = this.rover.get_components();

	for (var i = 0; i < 0x10; i++) {
		var disp = "Empty";
		if (installed[i] !== undefined)
			disp = installed[i];

		this.display.drawText(2, i + 2, i.toString(16).toUpperCase() + ". " + disp);
	}
};