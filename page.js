function get_asm() {
	return editor.getValue();
}

function set_asm(val) {
	editor.setValue(val);
}

function fmt_bin(num) {
  var rstr = num.toString(2);
  rstr = "00000000" + rstr;
  rstr = rstr.substr(rstr.length - 8);
  rstr = rstr.substr(0, 4) + " " + rstr.substr(4);
  return rstr;
}

//from http://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
function get_param(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}
var editor = null;

function setup($, Game, Assembler, RoverAsm) {
	$(document).ready(function() {
		$('#asmbtn').on('click', function() {
			var asm = new Assembler(get_asm());
			var cmp = asm.assemble();
			cmp = new Uint8Array(cmp);
			window.localStorage.setItem("rover-program", Assembler.serialize(cmp));
			var html = '';
			for (var i = 0; i < cmp.length; i += 2) {
				html = html + '<br />' +
				fmt_bin(cmp[i]) +
				'&nbsp;&nbsp;&nbsp;' +
				fmt_bin(cmp[i+1]);
			}
			$('#tdiv').html(html);
		});
		$('#load').on('click', function() {
			var prog = Assembler.deserialize(window.localStorage.getItem("rover-program"));
			Game.reset_rover(prog);
		});
		$('#link').on('click', function() {
			var prog = get_asm();
			prog = encodeURIComponent(prog);
			var base = window.location.href.split('?')[0];
			window.history.replaceState(prog, "", base + "?program=" + prog);
		});
		monaco.languages.register({ id: 'roverAsm' });
		monaco.languages.setMonarchTokensProvider('roverAsm', RoverAsm);
		monaco.languages.registerCompletionItemProvider('roverAsm', RoverAsm);
        editor = monaco.editor.create(document.getElementById('asm_code'), {
            language: 'roverAsm',
            scrollBeyondLastLine: false
        });
        editor.getModel().updateOptions({ insertSpaces: false });
		var prog = get_param("program");
		if (prog !== undefined && prog !== null && prog !== "") {
			prog = decodeURIComponent(prog);
			set_asm(prog);
		} else {
	        $.get('demo.asm', function(asm) {
	        	set_asm(asm);
	        });
		}
		Game.init($('#gamediv'));
	});
}

requirejs.config({
	shim: {
		'rot': {
			exports: 'ROT'
		}
	},
	paths: { 'vs': 'monaco-editor/dev/vs' }
})

requirejs(['jquery', 'game', 'assembler', 'roverasmlang', 'vs/editor/editor.main'], setup);