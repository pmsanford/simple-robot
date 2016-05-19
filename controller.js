var Controller = function(game) {
	this.game = game;
};

Controller.prototype.act = function() {
	this.game.engine.lock();
	window.addEventListener("keydown", this);
};

Controller.prototype.handleEvent = function(e) {
	if (e.keyCode == ROT.VK_SPACE) {
		window.removeEventListener("keydown", this);
		this.game.render();
		this.game.engine.unlock();
	}
};