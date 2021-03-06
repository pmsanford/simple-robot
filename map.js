define(['xy'],
	function(XY) {
		var GameMap = function(x, y) {
			this.height = y;
			this.width = x;
			this.objects = {};
		};

		GameMap.prototype.get_char_at = function(x, y) {
			var xy = new XY(x, y);
			if (this.objects[xy] !== undefined) {
				return this.objects[xy].char;
			}
			if (x === 0 || x === this.width - 1 ||
				y === 0 || y === this.height - 1)
				return '#';
			return '.';
		};

		GameMap.prototype.add_object = function(x, y, object) {
			var xy = new XY(x, y);
			if (this.objects[xy] !== undefined) {
				this.objects.remove(xy);
			}
			this.objects[xy] = object;
		};

		GameMap.prototype.draw = function(display) {
			for (var x = 0; x < this.width; x++) {
				for (var y = 0; y < this.height; y++) {
					display.draw(x, y, this.get_char_at(x, y));
				}
			}
		};

		GameMap.prototype.check_collision = function(x, y) {
			if (x === 0 || x === this.width - 1 ||
				y === 0 || y === this.height - 1) {
				return true;
			}

			var xy = new XY(x, y);

			if (this.objects[xy] !== undefined) {
				return this.objects[xy].blocking;
			}

			return false;
		};

		return GameMap;
});