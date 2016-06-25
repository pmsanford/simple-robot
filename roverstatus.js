 define(
  function() {
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
    			if ((x+y) === this.rover.pc) {
    				color = '#0ff';
    			}
    			if ((x+y) === this.rover.pc + 1) {
    				color = '#0cc';
    			}
    			display.setOptions({fg: color});
    			ostring = ostring.substr(ostring.length - 2);
    			display.drawText(this.x + x*3 + 1, this.y + y/0x10 + 5, ostring);
    			display.setOptions({fg: oldcolor});
    		}
    	}

    	display.draw(this.x + 12, this.y + 1, String.fromCharCode(0x250C), this.rover.get_heading() === 7 ? "#f00" : undefined);
    	display.draw(this.x + 13, this.y + 1, "^", this.rover.get_heading() === 0 ? "#f00" : undefined);
    	display.draw(this.x + 14, this.y + 1, String.fromCharCode(0x2510), this.rover.get_heading() === 1 ? "#f00" : undefined);

    	display.draw(this.x + 12, this.y + 2, "<", this.rover.get_heading() === 6 ? "#f00" : undefined);
    	display.draw(this.x + 13, this.y + 2, "R", "#ff0");
    	display.draw(this.x + 14, this.y + 2, ">", this.rover.get_heading() === 2 ? "#f00" : undefined);

    	display.draw(this.x + 12, this.y + 3, String.fromCharCode(0x2514), this.rover.get_heading() === 5 ? "#f00" : undefined);
    	display.draw(this.x + 13, this.y + 3, "v", this.rover.get_heading() === 4 ? "#f00" : undefined);
    	display.draw(this.x + 14, this.y + 3, String.fromCharCode(0x2519), this.rover.get_heading() === 3 ? "#f00" : undefined);
    }

    return RoverStatus;
});