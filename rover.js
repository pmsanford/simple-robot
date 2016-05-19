var Rover = function(x, y) {
	this.x = x;
	this.y = y;
	this.char = 'R';
	this.mem = new Uint8Array(0x100);
	this.pc = 0x10;
	this.cc = 0x00;
	this.regA = 0x00;
	this.heading = 0x00;
	this.speed = 0x00;
	this.turn = 0x00;
	this.running = true;
	this.icount = 0;
};

Rover.prototype.draw = function(display) {
	display.draw(this.x, this.y, this.char, '#ff0');
};

Rover.prototype.load = function(prog) {
	var max = prog.length > 0xEF ? 0xFF : prog.length + 0x10;
	for (var i = 0x10; i < max; i++) {
		this.mem[i] = prog[i - 0x10];
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
	if (addr == 0x00)
		this.speed = val;
	if (addr == 0x01)
		this.turn = val;
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
		return this.speed;
	if (addr == 0x01)
		return this.turn;
	if (addr == 0x02)
		return this.heading;
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
	var address = this.get_address(inst);
	if (inst.immediate && !inst.indirect && !inst.register) {
		return inst.target;
	}
	return this.get_mem(address);
}

Rover.prototype.get_address = function(inst) {
	var tarval = this.byte_val(inst.target);
	if (!inst.immediate && !inst.indirect && !inst.register) {
		return this.pc + tarval;
	}
	if (inst.immediate && inst.indirect) {
		return inst.target;
	}
	if (inst.immediate) {
		return inst.target;
	}
	if (inst.indirect) {
		return this.get_mem(tarval + this.pc);
	}
};

Rover.prototype.step = function() {
	var ibyte = this.mem[this.pc];
	var tbyte = this.mem[this.pc + 1];
	this.pc += 2;
	var inst = this.decode(ibyte, tbyte);
	console.log(inst.instruction + ": " + inst.target + "(" + this.get_address(inst) + ")");
	console.log("Immed: " + inst.immediate + " Indir: " + inst.indirect + " Reg: " + inst.register);
	this.run_instruction(inst);
	console.log("PC: " + this.pc + " A: " + this.regA + " Heading: " + this.heading + " Turn: " + this.turn + " Speed: " + this.speed);
};

Rover.prototype.run_instruction = function(inst) {
	var addr = this.get_address(inst);
	var val = this.get_value(inst);
	switch (inst.instruction) {
		case 'LDR':
			this.regA = val;
			break;
		case 'STR':
			this.set_mem(addr, this.regA);
			break;
		case 'CMP':
			if (this.regA > val) {
				this.cc = 1;
			} else if (this.regA < val) {
				this.cc = -1;
			} else {
				this.cc = 0;
			}
			break;
		case 'JMP':
			this.pc = addr;
			break;
		case 'JEQ':
			if (this.cc == 0) {
				this.pc = addr;
			}
			break;
		case 'HLT':
			this.running = false;
			break;
	}
};

Rover.prototype.decode = function(ibyte, target) {
	return new Instruction(ibyte, target);
};

Rover.prototype.doTurning = function() {
	if (this.turn != 0) {
		var dir = this.turn / Math.abs(this.turn);
		this.heading += dir;
		if (this.heading === 8)
			this.heading = 0;
		if (this.heading === -1)
			this.heading = 7;
	}
}

Rover.prototype.doMove = function() {
	if (this.speed != 0) {
		var dir = this.speed / Math.abs(this.speed);
		if (this.heading === 7 || this.heading === 0 || this.heading === 1)
			this.y -= dir;
		if (this.heading === 5 || this.heading === 4 || this.heading === 3)
			this.y += dir;
		if (this.heading === 5 || this.heading === 6 || this.heading === 7)
			this.x -= dir;
		if (this.heading === 1 || this.heading === 2 || this.heading === 3)
			this.x += dir;
		console.log("Updating position: " + this.x + ", " + this.y);
	}
}

Rover.prototype.updateHardware = function() {
	this.doTurning();
	this.doMove();
}

Rover.prototype.act = function() {
	if (this.running) {
		this.step();
	}
	this.icount += 1;
	if (this.icount % 10 === 0) {
		this.updateHardware();
	}
}