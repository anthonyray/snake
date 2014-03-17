function Score(){
	this.value = 0;
	this.restart = 0;
	this.highest = 0;

}

Score.prototype.increase = function(){
	this.value += 1;
	$("#score").text(this.value);
}


