function FoodGrid(){ // The foodgrid stores all the food on the map. 
	Entity.call(this);
	this.entities = [];
}

FoodGrid.prototype = Object.create(Entity.prototype);
FoodGrid.prototype.constructor = FoodGrid;

FoodGrid.prototype.draw = function(context){
	this.entities.forEach(function(food){
		food.draw(context);
	});
}

FoodGrid.prototype.spawn = function(){

	var x = Math.floor(Math.random() * (game.width / this.width) )*this.width ; // Generate random coordinates for the food 
	var y = Math.floor(Math.random() * (game.height / this.width) )*this.width; // Generate random coordinates for the food
	this.entities.push(new Food(x,y)); // Add the newly created food object to the grid
}

FoodGrid.prototype.destroy = function(food){ // When the food is eaten by the snake, it should be turned destroyed from the grid 
	var index = this.entities.indexOf(food);
	this.entities.splice(index,1);
}
