function FoodGrid(){
	Entity.call(this);
	this.entities = [];
	this.width = 15;
	this.height = 15;
}

FoodGrid.prototype = Object.create(Entity.prototype);
FoodGrid.prototype.constructor = FoodGrid;

FoodGrid.prototype.draw = function(context){
	this.entities.forEach(function(food){
		food.draw(context);
	});
}

FoodGrid.prototype.spawn = function(){

	var x = Math.floor(Math.random() * (game.width / this.width) )*this.width ; 
	var y = Math.floor(Math.random() * (game.height / this.width) )*this.width
	this.entities.push(new Food(x,y));
}

FoodGrid.prototype.destroy = function(food){
	var index = this.entities.indexOf(food);
	this.entities.splice(index,1);
}
