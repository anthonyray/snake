function Food(){
	Entity.call(this);
	this.width = 20;
	this.height = 20;
	this.xVelocity = 0;
	this.yVelocity = 0;
	this.x = Math.floor(Math.random() * (game.width / this.width) )*this.width;
	this.y = Math.floor(Math.random() * (game.height / this.width) )*this.width;
}

Food.prototype = Object.create(Entity.prototype);
Food.prototype.constructor = Food;


