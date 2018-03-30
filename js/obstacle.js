function Obstacle(game) {
  this.game = game;
  this.h = 50;
  this.w = 60;
  this.x = this.game.canvas.width;
  this.y = this.game.player.y0 + this.game.player.h - this.h;
  this.dx = 5;

  this.img = new Image();
  this.img.src = "img/obstaculo.png";
}

Obstacle.prototype.draw = function() {

    this.game.ctx.drawImage(this.img, this.x, this.y, this.w, this.h); 
  
};

Obstacle.prototype.move = function() {
  this.x -=  this.dx;
};
