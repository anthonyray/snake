function SnakeHead(){
	Entity.call(this);
	this.width = 20;
	this.height = 20;
}

SnakeHead.prototype = Object.create(Entity.prototype);
SnakeHead.prototype.constructor = SnakeHead;

SnakeHead.prototype.update = function(){
	
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

	if (this.x >= game.width)
		this.x = -this.width;
	if (this.x < -this.width)
		this.x = game.width;
	if (this.y > game.height)
		this.y = -this.width;
	if (this.y < -this.height)
		this.y = game.height + this.height;	


	
	Entity.prototype.update.apply(this,arguments);


}

SnakeHead.prototype.draw = function(context){
	context.fillStyle = '#1abc9c';
  	context.fillRect(this.x, this.y, this.width, this.height)

}

