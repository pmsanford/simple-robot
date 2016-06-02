var Garage = function(rover, display, components) {
  this.rover = rover;
  this.display = display;
  this.equipment = components;
  this.selected = null;
};

Garage.prototype.draw = function() {
	var opts = this.display.getOptions();
	for (var x = 0; x < opts.width; x++) {
		this.display.draw(x, 0, '#');
		this.display.draw(x, opts.height - 1, '#');
	}

	var center = opts.width/2>>0;

	for (var y = 0; y < opts.height; y++) {
		this.display.draw(0, y, '#');
		this.display.draw(center, y, '|');
		this.display.draw(opts.width - 1, y, '#');
	}

	var installed = this.rover.get_components();

	for (var i = 0; i < 0x10; i++) {
		var disp = "Empty";
		var fg = i == this.selected ? "#FF0" : undefined;
		if (installed[i] !== undefined)
			disp = installed[i];

		this.display.drawTextColor(2, i + 2, i.toString(16).toUpperCase() + ". " + disp, fg);
	}
	
	if (this.selected !== null) {
	  for (i = 0; i < this.equipment.length; i++) {
	    var fg = get_values(installed).some(function(a) { return types_match(this.equipment[i], a); }.bind(this)) ? "#999" : undefined;
	    this.display.drawTextColor(center + 2, i + 2, i.toString(16).toUpperCase() + ". " + this.equipment[i], fg);
	  }
	}
};

Garage.prototype.select = function(num) {
	this.selected = num;
};