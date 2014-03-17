function Food(x,y){
	Entity.call(this);
	this.width = 15;
	this.height = 15;
	this.xVelocity = 0;
	this.yVelocity = 0;
	this.x = x;
	this.y = y

}

Food.prototype = Object.create(Entity.prototype);
Food.prototype.constructor = Food;


