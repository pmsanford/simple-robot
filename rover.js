var Rover = function(x, y) {
	this.x = x;
	this.y = y;
	this.char = 'R';
	this.mem = new Uint8Array(0x100);
	this.pc = 0x10;
	this.cc = 0x00;
	this.regA = 0x00;
	this.regB = 0x00;
	this.heading = 0x00;
	this.speed = 0x00;
	this.turn = 0x00;
	this.running = true;
	this.icount = 0;
	this.carry = 0;
	this.overflow = 0;
	this.sc = 0;
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
		this.speed = this.byte_val(val);
	if (addr == 0x01)
		this.turn = this.byte_val(val);
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
		return this.get_heading();
};

Rover.prototype.get_heading = function() {
	var calc_heading = Math.round(this.heading);
	if (calc_heading === 8)
		calc_heading = 0;
	return calc_heading;
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

Rover.prototype.add_clamp = function(arg1, arg2) {
	var res = arg1 + arg2;
	return this.clamp(res);
};

Rover.prototype.clamp = function(val) {
	return val & 0b11111111;
}

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
			var as = this.byte_val(this.regA);
			var vs = this.byte_val(val);
			if (as > vs) {
				this.sc = 1;
			} else if (as < vs) {
				this.sc = -1;
			} else {
				this.sc = 0;
			}
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
		case "ADC":
			this.regA += this.carry;
		case "ADD":
			if (this.regA + val > 0xFF)
				this.overflow = 1;
			else
				this.overflow = 0;
			if ((this.regA < 128 && (this.regA + val) >= 128) ||
				(this.regA >= 128 && (this.regA + val) < 128))
				this.carry = 1;
			else
				this.carry = 0;
			this.regA = this.add_clamp(this.regA, val);
			break;
		case "SBB":
			this.regA -= this.carry;
		case "SUB":
			if (this.regA + val > 0xFF)
				this.overflow = 1;
			else
				this.overflow = 0;
			if ((this.regA < 128 && (this.regA + val) >= 128) ||
				(this.regA >= 128 && (this.regA + val) < 128))
				this.carry = 1;
			else
				this.carry = 0;
			this.regA = this.add_clamp(this.regA, -1 * val);
			break;
		case "MUL":
			if (this.regA * val > 0xFF) {
				this.overflow = 1;
				this.carry = 1;
			} else {
				this.overflow = 0;
				this.carry = 0;
			}
			this.regA = this.clamp(this.regA * val);
			break;
		case "DIV":
			if ((this.regA / val) >> 0 > 0xFF) {
				this.overflow = 1;
				this.carry = 1;
			} else {
				this.overflow = 0;
				this.carry = 0;
			}
			this.regA = this.clamp((this.regA / val) >> 0);
			this.regB = this.clamp(this.regA % val);
			break;
		case "JLT":
			if (this.cc == -1) {
				this.pc = addr;
			}
			break;
		case "JGT":
			if (this.cc == 1) {
				this.pc = addr;
			}
			break;
		case "JNE":
			if (this.cc != 0) {
				this.pc = addr;
			}
			break;
		case "AND":
			this.regA = this.regA & val;
			break;
		case "ORR":
			this.regA = this.regA | val;
			break;
		case "NOT":
			this.regA = ~this.regA;
			break;
		case "XOR":
			this.regA = this.regA ^ val;
			break;
		case "CLC":
			this.carry = 0;
			break;
		case "STC":
			this.carry = 1;
			break;
		case "ROR":
			console.log("Not implemented");
			break;
		case "ROL":
			console.log("Not implemented");
			break;
		case "RRC":
			console.log("Not implemented");
			break;
		case "RLC":
			console.log("Not implemented");
			break;
		case "SHR":
			console.log("Not implemented");
			break;
		case "SHL":
			console.log("Not implemented");
			break;
		case "XCH":
			var aval = this.regA;
			this.regA = val;
			this.set_mem(addr, aval);
			break;
		case "JSG":
			if (this.sc == 1) {
				this.pc = addr;
			}
			break;
		case "JSL":
			if (this.sc == -1) {
				this.pc = addr;
			}
			break;
		case "LJP":
			console.log("Not implemented");
			break;
		case "NOP":
			break;
	}
};

Rover.prototype.decode = function(ibyte, target) {
	return new Instruction(ibyte, target);
};

Rover.prototype.doTurning = function() {
	if (this.turn != 0) {
		this.heading += this.turn * 0.001; // Maxes out at 1.3 dir changes in one clock cycle
		if (this.heading >= 8)
			this.heading -= 8;
		if (this.heading < 0)
			this.heading += 7;
	}
}

Rover.prototype.doMove = function() {
	if (this.speed != 0) {
		var calc_heading = this.get_heading();
		var dir = this.speed / Math.abs(this.speed);
		if (calc_heading === 7 || calc_heading === 0 || calc_heading === 1)
			this.y -= dir;
		if (calc_heading === 5 || calc_heading === 4 || calc_heading === 3)
			this.y += dir;
		if (calc_heading === 5 || calc_heading === 6 || calc_heading === 7)
			this.x -= dir;
		if (calc_heading === 1 || calc_heading === 2 || calc_heading === 3)
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
	this.updateHardware();
}