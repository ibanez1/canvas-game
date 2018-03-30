function Obstacle(game) {
  this.game = game;
  this.h = 20;
  this.w = 20;
  this.x = this.game.canvas.width;
  this.y = this.game.player.y0 + this.game.player.h - this.h;
  this.dx = 5;
}

Obstacle.prototype.draw = function() {

    this.game.ctx.fillRect(this.x, this.y, this.w, this.h); 
  
};

Obstacle.prototype.move = function() {
  this.x -=  this.dx;
};
