define(
	function() {
		var RenderGroup = function() {
			this.render_targets = [];
		};

		RenderGroup.prototype.draw = function(display) {
			for (var i = 0; i < this.render_targets.length; i++) {
				this.render_targets[i].draw(display);
			}
		};

		RenderGroup.prototype.add = function(drawable) {
			this.render_targets.push(drawable);
		};

		RenderGroup.prototype.remove = function(drawable) {
			this.render_targets.splice(this.render_targets.indexOf(drawable), 1);
		};

		return RenderGroup;
});