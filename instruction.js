var Instruction = function(ibyte, target) {
	this._ibyte = ibyte & 0b11111000;
	this.target = target;
	this.instruction = this.get_instruction_string();
	this.immediate = (ibyte & 0b100) > 0;
	this.indirect = (ibyte & 0b10) > 0;
	this.register = (ibyte & 0b1) > 0;
};

Instruction.prototype.get_instruction_string = function() {
	switch (this._ibyte) {
		case 0b00000000:
			return 'ADD';
		case 0b01011000:
			return 'LDR';
		case 0b01100000:
			return 'STR';
		case 0b01101000:
			return 'CMP';
		case 0b00110000:
			return 'JMP';
		case 0b01010000:
			return 'JNE';
		case 0b01001000:
			return 'JEQ';
		case 0b11110000:
			return 'HLT';
		case 0b11111000:
			return 'NOP';
	}
	return 'NOP';
};
