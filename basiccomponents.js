var HeadingSensor = function(rover) {
  RoverComponent.call(this, rover, "Heading Sensor");
};

HeadingSensor.extend(RoverComponent);

HeadingSensor.prototype.read_data = function() {
  return this.rover.get_heading();
};

var SpeedControl = function(rover) {
  RoverComponent.call(this, rover, "Speed Control");
};
SpeedControl.extend(RoverComponent);

SpeedControl.prototype.write_data = function(data) {
  this.rover.speed = this.rover.byte_val(data);
};

SpeedControl.prototype.read_data = function() {
  return this.rover.speed;
};

var TurnControl = function(rover) {
  RoverComponent.call(this, rover, "Turn Control");
}
TurnControl.extend(RoverComponent);

TurnControl.prototype.write_data = function(data) {
  this.rover.turn = this.rover.byte_val(data);
};

TurnControl.prototype.read_data = function() {
  return this.rover.turn;
};

var PositionSensors = {};

PositionSensors.X = function(rover) {
  RoverComponent.call(this, rover, "Position Sensor (X)");
};

PositionSensors.X.extend(RoverComponent);

PositionSensors.X.prototype.read_data = function() {
  return this.rover.x;
};

PositionSensors.Y = function(rover) {
  RoverComponent.call(this, rover, "Position Sensor (Y)");
};

PositionSensors.Y.extend(RoverComponent);

PositionSensors.Y.prototype.read_data = function() {
  return this.rover.y;
};