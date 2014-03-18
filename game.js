// The game engine

function Game(canvas) {
  var self = this

  this.context = canvas.getContext("2d")
  this.width = canvas.width
  this.height = canvas.height

  // Keep track of key states
  // Eg.:
  //   game.keyPressed.up === true  // while UP key is pressed
  //   game.keyPressed.up === false // when UP key is released
  this.keyPressed = {}

  $(canvas).on('keydown keyup', function(e) {
    // Convert key code to key name
    var keyName = Game.keys[e.which]

    if (keyName) {
      // eg.: `self.keyPressed.up = true` on keydown
      // Will be set to `false` on keyup
      self.keyPressed[keyName] = e.type === 'keydown'
      e.preventDefault()
    }
  })
}

// Some key codes to key name mapping
Game.keys = {
  32: 'space',
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
}

Game.prototype.update = function(){
  var self = this;
  this.entities.forEach(function(entity){
    if(entity.update)
      entity.update();
  });
}

Game.prototype.draw = function(){
  var self = this;
  this.entities.forEach(function(entity){
    if (entity.draw){
      entity.draw(self.context);
    }
    
  });
}

Game.prototype.init = function() { // Function used to initialize the game and to restard it when the player looses. 
  game.entities = [
    new Background(),
    game.snake = new Snake(),
    game.foodgrid = new FoodGrid()
  ];

  game.score = new Score();
  game.snake.body = [new SnakeHead()];

  game.snake.eat(new SnakeElement());
  game.snake.eat(new SnakeElement());
  game.snake.eat(new SnakeElement());
  game.snake.eat(new SnakeElement());
}

Game.prototype.start = function() {
  var self = this;

  this.lastUpdateTime = new Date().getTime(); // Get the current time

  onFrame(function() {
    self.fixedTimeStep()
  });
}

var onFrame = function(callback) {
  if (window.requestAnimationFrame){ // Make sure the browser has this function
    requestAnimationFrame(function() {
      callback();
      onFrame(callback)
    });
  } else {
    var fps = 20;
    setInterval(callback,1000 / fps);
  }
}

Game.prototype.fixedTimeStep = function() {
  var fps = 25,
      interval = 1000 / fps, 
      updated = false;

  // While we're not up to date 
  while (this.lastUpdateTime < new Date().getTime()) {
    this.update();
    updated = true;
    // Jumping at fixed interval until we catch up the current time
    this.lastUpdateTime += interval;
  }

  if (updated) this.draw()
  updated = false;
}