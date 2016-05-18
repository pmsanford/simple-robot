var XY = function(x, y) {
	this.x = x;
	this.y = y;
};

XY.prototype.toString = function() {
	return this.x + "," + this.y;
};
