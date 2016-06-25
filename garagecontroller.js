define(['rot'],
	function() {
		var GarageController = function(garage, done_cb, draw_cb) {
			this.garage = garage;
			this.cb = done_cb;
			this.draw = draw_cb;
		};

		GarageController.prototype.hook = function() {
			window.addEventListener("keydown", this);
		};

		GarageController.prototype.handleEvent = function(e) {
			if (e.keyCode === ROT.VK_ESCAPE) {
				window.removeEventListener("keydown", this);
				this.leave();
			}
			if (e.keyCode >= ROT.VK_0 && e.keyCode <= ROT.VK_9) {
				this.garage.select(e.keyCode - ROT.VK_0);
			}
			this.draw();
		};

		GarageController.prototype.leave = function() {
			this.cb();
		};

		return GarageController;
});