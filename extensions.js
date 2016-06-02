ROT.Display.prototype.drawTextColor = function(x, y, text, color, maxWidth) {
	if (color === undefined) {
		this.drawText(x, y, text, maxWidth);
	} else {
		var oldColor = this.getOptions().fg;
		this.setOptions({fg: color});
		this.drawText(x, y, text, maxWidth);
		this.setOptions({fg: oldColor});
	}
};

function types_match(a, b) {
  return a.constructor === b.constructor;
};

function get_values(obj) {
  var lst = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      lst.push(obj[key]);
    }
  }
  return lst;
};