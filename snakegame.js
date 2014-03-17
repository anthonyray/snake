function Background(){

}

Background.prototype.draw = function(context){
	context.fillStyle = '#34495e';
	context.fillRect(0,0,game.width,game.height);
}

var canvas = $('canvas')[0],
	game = new Game(canvas);




game.init();

game.start();

canvas.focus();