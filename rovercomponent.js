define(
	function() {
		var RoverComponent = function(rover, name) {
		  this.rover = rover;
		  this.name = name;
		};

		RoverComponent.prototype.write_data = function(data) {
		  
		};

		RoverComponent.prototype.read_data = function() {
		  return 0x0;
		};

		RoverComponent.prototype.toString = function() {
			return this.name;
		};

		return RoverComponent;
});