define(['rot'],
	function(ROT) {
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
});