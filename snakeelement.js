function SnakeElement(){
	Entity.call(this);
	this.width = 20;
	this.height = 20;
	this.xVelocity = 0;
	this.yVelocity = 0;
}

SnakeElement.prototype = Object.create(Entity.prototype);
SnakeElement.prototype.constructor = SnakeElement;

SnakeElement.prototype.update = function(mvt){
	this.xVelocity = mvt.xVelocity;
	this.yVelocity = mvt.yVelocity;
	this.x = mvt.x ;
	this.y = mvt.y;

}


