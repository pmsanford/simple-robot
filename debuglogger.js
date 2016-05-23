var DebugLogger = function(enabled) {
	this.enabled = enabled === true;
	this.sources = {};
};

DebugLogger.prototype.log = function(source, message) {
	if (this.enabled === true && source in this.sources && this.sources[source] === true) {
		console.log(message);
	}
};

DebugLogger.prototype.set_source = function(source, enabled) {
	this.sources[source] = enabled;
};