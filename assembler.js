var Assembler = function(text) {
	this.text = text;
	this.syms = {};
	this.re = new RegExp(/(0x[0-9a-fA-F]+)|([0-9]+)/);
	this.compiled = [];
};

Assembler.prototype.assemble =function() {
	this.do_pass(this.pass_one.bind(this));
	this.do_pass(this.pass_two.bind(this));
	return this.compiled;
}

Assembler.prototype.pass_one = function(i, toks) {
	if (toks[0].length > 0) {
		this.syms[toks[0].toUpperCase()] = i  * 2;
	}
};

Assembler.prototype.do_pass = function(func) {
	var lines = this.text.split('\n');
	for (var i = 0; i < lines.length; i++) {
		var toks = lines[i].split(/\s+/);
		func(i, toks);
	}
};

Assembler.prototype.get_inst_bin = function(mnem) {
	switch (mnem.toUpperCase()) {
		case "ADD":
			return 0b00000000;
		case "ADC":
			return 0b00001000;
		case "SUB":
			return 0b00010000;
		case "SBB":
			return 0b00011000;
		case "MUL":
			return 0b00100000;
		case "DIV":
			return 0b00101000;
		case "JMP":
			return 0b00110000;
		case "JLT":
			return 0b00111000;
		case "JGT":
			return 0b01000000;
		case "JEQ":
			return 0b01001000;
		case "JNE":
			return 0b01010000;
		case "LDR":
			return 0b01011000;
		case "STR":
			return 0b01100000;
		case "CMP":
			return 0b01101000;
		case "AND":
			return 0b01110000;
		case "ORR":
			return 0b01111000;
		case "NOT":
			return 0b10000000;
		case "XOR":
			return 0b10001000;
		case "CLC":
			return 0b10010000;
		case "STC":
			return 0b10011000;
		case "ROR":
			return 0b10100000;
		case "ROL":
			return 0b10101000;
		case "RRC":
			return 0b10110000;
		case "RLC":
			return 0b10111000;
		case "SHR":
			return 0b11000000;
		case "SHL":
			return 0b11001000;
		case "XCH":
			return 0b11010000;
		case "HLT":
			return 0b11110000;
		case "NOP":
			return 0b11111000;
	}
};

Assembler.prototype.pass_two = function(i, toks) {
	var mnem = toks[1];
	var bin  = this.get_inst_bin(mnem);
	var targ = toks[2];
	var indir = false;
	if (targ[0] === '[' && targ.slice(-1) === ']') {
		indir = true;
		targ = targ.slice(1, -1);
	}
	var immed = false;
	if (targ[0] === '!') {
		immed = true;
		targ = targ.slice(1);
	}
	if (indir) bin = bin | 0b10;
	if (immed) bin = bin | 0b100;
	var tbin = null;
	if (this.re.test(targ)) {
		tbin = parseInt(targ);
	} else if (targ.toUpperCase() in this.syms) {
		var lad = this.syms[targ.toUpperCase()];
		if (immed) {
			tbin = lad;
		} else {
			var pc = (i * 2) + 2;
			tbin = lad - pc;
		}
	} else {
		tbin = 0;
	}
	this.compiled.push(bin);
	this.compiled.push(tbin);
};