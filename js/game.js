function Game(canvadId) {
  this.canvas = document.getElementById(canvadId);
  this.ctx = this.canvas.getContext("2d");
  this.background = new Background(this);
  this.player = new Player(this);

  this.obstacles = [];

  this.reset();

  this.framesCounter = 0;
  this.obstaclesCounter = 0;
}

Game.prototype.start = function() {
  setInterval(
    function() {
      this.clear();
      this.draw();
      this.moveAll();

      if (this.framesCounter % (Math.floor(Math.random() * 55) + 105) == 0) {
        this.generateObstacle();
      }
      this.clearObstacles();
      if (this.framesCounter++ > 1000) this.framesCounter = 0;
    }.bind(this),
    16
  );
};

Game.prototype.stop = function() {};

Game.prototype.gameOver = function() {
  this.stop();

  if (confirm("GAME OVER. Play again?")) {
    this.reset();
    this.start();
  }
};

Game.prototype.reset = function() {};

Game.prototype.isCollision = function() {};

Game.prototype.clearObstacles = function() {
  
this.obstacles = this.obstacles.filter(function(e) {
    console.log(e.x)
    return e.x > 0;

  }.bind(this));
};

Game.prototype.generateObstacle = function() {
  this.obstacles.push(new Obstacle(this));
};

Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.player.draw();
  this.obstacles.forEach(function(e) {
    e.draw();
  });
};

Game.prototype.moveAll = function() {
  this.background.move();
  this.player.move();
  this.obstacles.forEach(function(e) {
    e.move();
  });
};
