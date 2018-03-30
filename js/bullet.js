function Bullet(game) {
  this.game = game;

  this.x = this.game.player.x;
  this.y = this.game.player.y;
  this.vy = 0;
  this.g = 0.25;

  
  this.r = 5;

}

Bullet.prototype.draw = function() {
  
  this.game.ctx.fillRect(this.x, this.y, 10, 10);
  this.game.ctx.strokeStyle = "green";
};

Bullet.prototype.move = function() {
  this.x += 15;
  this.vy++;
  this.y += this.vy;
  if (this.y > this.game.canvas.height - 150) this.vy *= -1;

};