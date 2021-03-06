function SnakeHead(){
	Entity.call(this);
	this.xVelocity = 20;
}

SnakeHead.prototype = Object.create(Entity.prototype);
SnakeHead.prototype.constructor = SnakeHead;

SnakeHead.prototype.update = function(){
	var snakehead = this;
	var speed = this.width;

	if (game.keyPressed.up && !(this.yVelocity == speed)){
		this.yVelocity = -speed;
		this.xVelocity = 0;
	}
	else if(game.keyPressed.down && !(this.yVelocity == -speed)){
		this.yVelocity = speed;
		this.xVelocity = 0;
	} 
	else if (game.keyPressed.right && !(this.xVelocity == -speed)){
		this.xVelocity = speed;
		this.yVelocity = 0;
	}
	else if(game.keyPressed.left && !(this.xVelocity == speed)){
		this.xVelocity = -speed;
		this.yVelocity = 0;
	}

	if (this.x > game.width)
		game.init();
	if (this.x < 0)  
		game.init();
	if (this.y > game.height)
		game.init();
	if (this.y < 0)
		game.init();


	// Intersection with the snake itself

	for (var i = 1 ; i < game.snake.body.length ; i++){
		if(this.intersect(game.snake.body[i]))
			game.init();
	}

	// Checking for intersection with food

	game.foodgrid.entities.forEach(function(food){
		if( snakehead.intersect(food) )
			game.snake.eat(food);
	});

	Entity.prototype.update.apply(this,arguments);


}

SnakeHead.prototype.draw = function(context){
	context.fillStyle = '#1abc9c';
  	context.fillRect(this.x, this.y, this.width, this.height)

}

