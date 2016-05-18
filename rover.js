var Rover = function(x, y) {
	this.x = x;
	this.y = y;
	this.char = 'R';
	this.mem = new Uint8Array(0xFF);
	this.pc = 0x0F;
	this.cc = 0x00;
	this.regA = 0x00;
	this.heading = 0x00;
	this.speed = 0x00;
	this.turn = 0x00;
};

Rover.prototype.draw = function(display) {
	display.draw(this.x, this.y, this.char, '#ff0');
};

Rover.prototype.load = function(prog) {
	var max = prog.length > 0xEF ? 0xFF : prog.length + 0x0F;
	for (var i = 0x0F; i < max; i++) {
		this.mem[i] = prog[i - 0x0F];
	}
};

Rover.prototype.set_mem = function(addr, value) {
	if (addr < 0x0F) {
		this.set_hardware(addr, value);
	}
	else {
		this.mem[addr] = value;
	}
};

Rover.prototype.set_hardware = function(addr, val) {
	if (addr == 0x01)
		this.turn = val;
	if (addr == 0x02)
		this.speed = val;
};

Rover.prototype.get_mem = function(addr, value) {
	if (addr < 0x0F) {
		return this.get_hardware(addr);
	}
	else {
		return this.mem[addr];
	}
};

Rover.prototype.get_hardware = function(addr) {
	if (addr == 0x00)
		return this.heading;
	if (addr == 0x01)
		return this.turn;
	if (addr == 0x02)
		return this.speed;
};

Rover.prototype.byte_val = function(val) {
	var trunc = val & 0b11111111;
	if ((trunc & 0b10000000) > 0) {
		return (256 - trunc) * -1;
	}
	else {
		return trunc;
	}
};

Rover.prototype.get_value = function(inst) {
	var tarval = this.byte_val(inst.target);
	if (!inst.immediate && !inst.indirect && !inst.register) {
		return this.pc + tarval;
	}
	if (inst.immediate && inst.indirect) {
		return this.get_mem(tarval);
	}
	if (inst.immediate) {
		return tarval;
	}
	if (inst.indirect) {
		return this.get_mem(tarval + this.pc);
	}
};

Rover.prototype.step = function() {
	var inst = this.decode(this.mem[this.pc], this.mem[this.pc + 1]);
	console.log(inst.instruction + ": " + inst.target + "(" + this.get_value(inst) + ")");
	console.log("Immed: " + inst.immediate + " Indir: " + inst.indirect + " Reg: " + inst.indirect);
	this.pc += 2;
};

Rover.prototype.run_instruction = function(inst) {
	
};

Rover.prototype.decode = function(ibyte, target) {
	return new Instruction(ibyte, target);
};
