function Background(){

}

Background.prototype.draw = function(context){
	context.fillStyle = '#34495e';
	context.fillRect(0,0,game.width,game.height);
}

var canvas = $('canvas')[0],
	game = new Game(canvas);

game.entities = [
	new Background(),
	game.snake = new Snake(),
	game.foodgrid = new FoodGrid()
];

game.score = new Score();
game.snake.body = [new SnakeHead()];

game.snake.eat(new SnakeElement());
game.snake.eat(new SnakeElement());
game.snake.eat(new SnakeElement());
game.snake.eat(new SnakeElement());



game.start();

canvas.focus();