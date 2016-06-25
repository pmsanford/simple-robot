define(
	function() {
		var RenderController = function(game) {
			this.game = game;
		};

		RenderController.prototype.act = function() {
			this.game.render();
		};

		return RenderController;
});