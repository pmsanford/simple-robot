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
		case 0b00001000:
			return 'ADC';
		case 0b00010000:
			return 'SUB';
		case 0b00011000:
			return 'SUF';
		case 0b00100000:
			return 'MUL';
		case 0b00101000:
			return 'DIV';
		case 0b00110000:
			return 'JMP';
		case 0b00111000:
			return 'JLT';
		case 0b01000000:
			return 'JGT';
		case 0b01001000:
			return 'JEQ';
		case 0b01010000:
			return 'JNE';
		case 0b01011000:
			return 'LDR';
		case 0b01100000:
			return 'STR';
		case 0b01101000:
			return 'CMP';
		case 0b01110000:
			return 'AND';
		case 0b01111000:
			return 'ORR';
		case 0b10000000:
			return 'NOT';
		case 0b10001000:
			return 'XOR';
		case 0b10010000:
			return 'CLC';
		case 0b10011000:
			return 'STC';
		case 0b10100000:
			return 'ROR';
		case 0b10101000:
			return 'ROL';
		case 0b10110000:
			return 'RRC';
		case 0b10111000:
			return 'RLC';
		case 0b11000000:
			return 'SHR';
		case 0b11001000:
			return 'SHL';
		case 0b11010000:
			return 'XCH';
		case 0b11011000:
			return 'JSG';
		case 0b11100000:
			return 'JSL';
		case 0b11101000:
			return 'LJP';
		case 0b11110000:
			return 'HLT';
		case 0b11111000:
			return 'NOP';
	}
	return 'NOP';
};
