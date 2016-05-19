var RoverStatus = function(x, y, rover) {
	this.rover = rover;
	this.x = x;
	this.y = y;
};

RoverStatus.prototype.draw = function(display) {
	display.drawText(this.x + 1, this.y + 1, "Heading: " + this.rover.heading);
	display.drawText(this.x + 1, this.y + 2, "Speed: " + this.rover.speed);
	display.drawText(this.x + 1, this.y + 3, "Turning: " + this.rover.turn);
	for (var y = 0x00; y <= 0xF0; y += 0x10) {
  	for (var x = 0x00; x <= 0x0F; x++) {
  	  console.log(x + ', ' + y);
  	  var ostring = "00" + this.rover.mem[x + y].toString(16);
  	  ostring = ostring.substr(ostring.length - 2);
  	  display.drawText(this.x + x*3 + 1, this.y + y/0x10 + 4, ostring);
  	}
	}
}