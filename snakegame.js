function Background(){

}

Background.prototype.draw = function(context){
	context.fillStyle = '#327480';
	context.fillRect(0,0,game.width,game.height);
}

var canvas = $('canvas')[0],
	game = new Game(canvas);

game.entities = [
	new Background(),
	game.snake = new Snake(),
	new Food()
];

game.snake.body = [new SnakeHead()];

game.snake.eat(new SnakeElement());
game.snake.eat(new SnakeElement());
game.snake.eat(new SnakeElement());
game.snake.eat(new SnakeElement());



game.start();

canvas.focus();