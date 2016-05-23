var Controller = function(game) {
	this.game = game;
	this.running = false;
	this.stop = false;
};

Controller.prototype.act = function() {
	if (!this.running || this.stop) {
		this.game.engine.lock();
		if (this.stop) {
			this.running = false;
			this.stop = false;
		}
		window.addEventListener("keydown", this);
	}
	if (this.running) {
		this.game.engine.lock();
		window.setTimeout(this.game.engine.unlock.bind(this.game.engine), 250);
	}
};

Controller.prototype.handleEvent = function(e) {
	var assembly = $('#assembly');
	if (assembly.is(':focus')) {
		return;
	}
	if (e.keyCode == ROT.VK_SPACE && !this.running) {
		window.removeEventListener("keydown", this);
		this.game.engine.unlock();
	}
	if (e.keyCode == ROT.VK_R) {
		if (this.running) {
			this.stop = true;
		} else {
			this.running = true;
			this.game.engine.unlock();
		}
	}
};