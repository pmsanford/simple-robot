var HeadingSensor = function(rover) {
  RoverComponent.call(this, rover);
};

HeadingSensor.extend(RoverComponent);

HeadingSensor.prototype.read_data = function() {
  return this.rover.get_heading();
};

var SpeedControl = function(rover) {
  RoverComponent.call(this, rover);
};
SpeedControl.extend(RoverComponent);

SpeedControl.prototype.write_data = function(data) {
  this.rover.speed = this.rover.byte_val(data);
};

SpeedControl.prototype.read_data = function() {
  return this.rover.speed;
};

var TurnControl = function(rover) {
  RoverComponent.call(this, rover);
}
TurnControl.extend(RoverComponent);

TurnControl.prototype.write_data = function(data) {
  this.rover.turn = this.rover.byte_val(data);
};

TurnControl.prototype.read_data = function() {
  return this.rover.turn;
};