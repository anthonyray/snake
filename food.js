function Food(x,y){ // Food are entities that pop up randomly on the map. 
	Entity.call(this);

	this.xVelocity = 0;
	this.yVelocity = 0;
	this.x = x;
	this.y = y

}

Food.prototype = Object.create(Entity.prototype);
Food.prototype.constructor = Food;


