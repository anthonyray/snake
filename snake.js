function Snake() {
	Entity.call(this);
	this.moveQueue = [];

}
Snake.prototype = Object.create(Entity.prototype);
Snake.prototype.constructor = Snake;

Snake.prototype.init = function(){
	var self = this;
	this.body.forEach(function(element){
		self.moveQueue.push({xVelocity : element.xVelocity, yVelocity : element.yVelocity});
	});
}

Snake.prototype.update = function(){
	var self = this;
	this.body[0].update();
	for (var i = 1 ; i < this.moveQueue.length ; i++){
		this.body[i].update( this.moveQueue[i-1] );
	}
	var mvt = {xVelocity : this.body[0].xVelocity, yVelocity : this.body[0].yVelocity,x : this.body[0].x, y : this.body[0].y };
	this.moveQueue.unshift(mvt);
	this.moveQueue.pop();
}

Snake.prototype.draw = function(context){
	this.body.forEach(function(element){
		element.draw(context);
	});
}

Snake.prototype.eat = function(food){
	// Append a snake element to the body of the snake
	var element = new SnakeElement();
	element.x = this.body[this.body.length - 1].x - this.body[this.body.length - 1].width;
	element.y = this.y; 
	this.body.push(element);
	this.moveQueue.push({xVelocity : element.xVelocity, yVelocity : element.yVelocity}); 

	// Remove the eaten food from the foodgrid

	game.foodgrid.destroy(food);
	game.foodgrid.spawn();

	// Increase score

	game.score.increase();
}
