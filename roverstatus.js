var RoverStatus = function(x, y, rover) {
	this.rover = rover;
	this.x = x;
	this.y = y;
};

RoverStatus.prototype.draw = function(display) {
	display.drawText(this.x + 1, this.y + 1, "Heading: " + this.rover.heading);
	display.drawText(this.x + 1, this.y + 2, "Speed: " + this.rover.speed);
	display.drawText(this.x + 1, this.y + 3, "Turning: " + this.rover.turn);
}