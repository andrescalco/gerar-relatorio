var myFont = new FontFace('Museo', 'url(fonts/museo500-regular-webfont.woff)');

myFont.load().then(function(font){
	document.fonts.add(font);
	init();
});

function init() {
	
	var canvas = document.querySelector('#my-canvas');
	var ctx = canvas.getContext( '2d' );

	canvas.width = 850;
	canvas.height = 947;
	
	var obj = {};

	var img1 = new Image();

	img1.onload = function () {
	    
	    ctx.drawImage(img1, 0, 0);

	    obj = {
	    	mes : 'JANEIRO',
	    	ano : '2017',
	    	alvo : '5.538,73',
	    	entradas : '5.105,02',
	    	saidas : '4.141,00',
	    	saldo : '964,02',
	    }

		drawAll(obj);

	};

	img1.src = 'img/bg-relatorio.jpg';

	function $(ele) {
		return document.getElementById(ele);
	}

	function drawMonth(obj) {
		ctx.font = "30px 'Museo'";
		ctx.textAlign = "center";
		ctx.fillText(obj.mes+' '+obj.ano, (canvas.width / 2), 150);
	}

	function drawAlvo(obj) {
		ctx.font = "32px 'Museo'";
		ctx.textAlign = "left";
		ctx.fillText('R$ ' + obj.alvo, 80, 535);
	}

	function drawEntradas(obj) {
		ctx.font = "32px 'Museo'";
		ctx.textAlign = "left";
		ctx.fillText('R$ ' + obj.entradas, 340, 535);
	}

	function drawSaidas(obj) {
		ctx.font = "32px 'Museo'";
		ctx.textAlign = "left";
		ctx.fillText('R$ ' + obj.saidas, 603, 535);
	}

	function drawSaldo(obj) {
		ctx.font = "33px 'Museo'";
		ctx.textAlign = "left";
		ctx.fillText('R$ ' + obj.saldo, 377, 738);
	}

	function drawAll(obj) {
		drawMonth(obj);
		drawAlvo(obj);
		drawEntradas(obj);
		drawSaidas(obj);
		drawSaldo(obj);
	}

	function reset() {
		ctx.drawImage(img1, 0, 0);
	}
	    
	$('download').addEventListener('click', function() {
	    var nome = `RELATORIO-FINANCEIRO-${obj.mes}-${obj.ano}.png`;
	    this.href = canvas.toDataURL();
	    this.download = nome.toLowerCase();
	}, false);

	$('mes').addEventListener('keyup', function() {
		obj.mes = this.value.toUpperCase();
		reset();
		drawAll(obj);
	});

	$('ano').addEventListener('keyup', function() {
		obj.ano = this.value.toUpperCase();
		reset();
		drawAll(obj);
	});

	$('alvo').addEventListener('keyup', function() {
		obj.alvo = this.value.toUpperCase();
		reset();
		drawAll(obj);
	});

	$('entradas').addEventListener('keyup', function() {
		obj.entradas = this.value.toUpperCase();
		reset();
		drawAll(obj);
	});

	$('saidas').addEventListener('keyup', function() {
		obj.saidas = this.value.toUpperCase();
		reset();
		drawAll(obj);
	});

	$('saldo').addEventListener('keyup', function() {
		obj.saldo = this.value.toUpperCase();
		reset();
		drawAll(obj);
	});
}

init();