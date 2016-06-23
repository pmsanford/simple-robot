function get_asm() {
	return $('#assembly').val();
}

function set_asm(val) {
	$('#assembly').val(val);
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

function setup($, Game, Assembler) {
	$(document).delegate('#assembly', 'keydown', function(e) {
		var keycode = e.keyCode || e.which;

		// From: http://stackoverflow.com/questions/6637341/use-tab-to-indent-in-textarea
		if (keycode === 9) {
		    e.preventDefault();
		    var start = $(this).get(0).selectionStart;
		    var end = $(this).get(0).selectionEnd;

		    // set textarea value to: text before caret + tab + text after caret
		    $(this).val($(this).val().substring(0, start)
		                + "\t"
		                + $(this).val().substring(end));

		    // put caret at right position again
		    $(this).get(0).selectionStart =
		    $(this).get(0).selectionEnd = start + 1;
		}
	});
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
		var prog = get_param("program");
		if (prog !== undefined && prog !== null && prog !== "") {
			prog = decodeURIComponent(prog);
			set_asm(prog);
		}
		Game.init($('#gamediv'));
	});
}

requirejs.config({
	shim: {
		'game': {
			deps: ['rot.min', 'debuglogger', 'map', 'rover', 'roverstatus', 'controller', 'rendercontroller'],
			exports: 'Game'
		},
		'assembler': {
			exports: 'Assembler'
		},
		'controller': {
			deps: ['rot.min'],
			exports: 'Controller'
		},
		'debuglogger': {
			exports: 'Debuglogger'
		},
		'map': {
			deps: ['xy'],
			exports: 'GameMap'
		},
		'rendercontroller': {
			exports: 'RenderController'
		},
		'instruction': {
			exports: 'Instruction'
		},
		'rot.min': {
			exports: 'ROT'
		},
		'rover': {
			deps: ['instruction'],
			exports: 'Rover'
		},
		'roverstatus': {
			exports: 'RoverStatus'
		},
		'xy': {
			exports: 'XY'
		}
	}
})

requirejs(['jquery', 'game', 'assembler'], setup);