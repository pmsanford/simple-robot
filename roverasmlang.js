define({
  mnemonics: ['ADD', 'ADC', 'SUB', 'SUF', 'MUL', 'DIV', 'JMP', 'JLT', 'JGT', 'JEQ', 
              'JNE', 'LDR', 'STR', 'CMP', 'AND', 'ORR', 'NOT', 'XOR', 'CLC', 'STC', 
              'ROR', 'ROL', 'RRC', 'RLC', 'SHR', 'SHL', 'XCH', 'JSG', 'JSL', 'LJP', 
              'HLT', 'NOP'],

  defaultToken: 'invalid',

  // The main tokenizer for our languages
  tokenizer: {
    root: [
      [/^\t/, { token: 'white', next: '@mnem' }],
      [/^[a-zA-Z]+\t/, { token: 'variable.name', next: '@mnem' }],
    ],

    mnem: [
      [/[a-zA-Z]+/, { cases: {'@mnemonics': {token: 'keyword', next: '@targ'}},
                                   '@default': {token: 'invalid', next: '@pop'}}]
    ],

    targ: [
      [/\t/, 'white'],
      [/[a-zA-Z]+/, { token: 'variable.name', next: '@popall' }],
      [/\[/, { token: '@brackets', bracket: '@open', next: '@targ_brackets' }],
      [/0[xX][0-9a-fA-F]+/, { token: 'number.hex', next: '@popall' }],
      [/\d+/, { token: 'number', next: '@popall' }],
      [/!/, 'identifier']
    ],

    targ_brackets: [
      [/[a-zA-Z]+/, { token: 'variable.name', next: '@t_bracket_end' }],
      [/0[xX][0-9a-fA-F]+/, { token: 'number.hex', next: '@t_bracket_end' }],
      [/\d+/, { token: 'number', next: '@t_bracket_end' }],
      [/!/, 'identifier']
    ],

    t_bracket_end: [
      [/\]/, { token: '@brackets', bracket: '@close', next: '@popall' }],
    ]
  },
});