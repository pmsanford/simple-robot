var RoverStatus = function(x, y, rover) {
	this.rover = rover;
	this.x = x;
	this.y = y;
};

RoverStatus.prototype.draw = function(display) {
	display.drawText(this.x + 1, this.y + 1, "Heading: " + this.rover.get_heading());
	display.drawText(this.x + 1, this.y + 2, "Speed: " + this.rover.speed);
	display.drawText(this.x + 1, this.y + 3, "Turning: " + this.rover.turn);
	display.drawText(this.x + 1, this.y + 4, "PC: " + this.rover.pc.toString(16) +
	                  " A: " + this.rover.regA + " CC: " +
	                  this.rover.cc);
	for (var y = 0x00; y <= 0xF0; y += 0x10) {
  	for (var x = 0x00; x <= 0x0F; x++) {
  	  var ostring = "00" + this.rover.mem[x + y].toString(16);
  	  var color = '#ddd';
  	  var oldcolor = display.getOptions().fg;
  	  if ((x+y) == this.rover.pc) {
  	    color = '#0ff';
  	  }
  	  if ((x+y) == this.rover.pc + 1) {
  	    color = '#0cc';
  	  }
  	  display.setOptions({fg: color});
  	  ostring = ostring.substr(ostring.length - 2);
  	  display.drawText(this.x + x*3 + 1, this.y + y/0x10 + 5, ostring);
  	  display.setOptions({fg: oldcolor});
  	}
	}
}