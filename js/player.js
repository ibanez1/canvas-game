function Player(game) {
  this.game = game;

  this.x = this.game.canvas.width * 0.1;
  this.y0 = 500;
  this.y = this.y0 - 200;
  this.w = 50;
  this.h = 75;

  this.vy = 0;
  this.g = 0.4;

  this.img = new Image();
  this.img.src = "img/player.png";
  this.img.frames = 3;
  this.img.frameIndex = 0;
  this.setListeners();
}

Player.prototype.draw = function() {
  this.game.ctx.drawImage(
    //drawImage(image1, sx1, sy1, sWidth1, sHeight1, dx, dy, dWidth, dHeight);
    this.img, //imagen
    this.img.frameIndex * Math.floor(this.img.width / this.img.frames),
    0,
    Math.floor(this.img.width / this.img.frames),
    this.img.height,
    this.x,
    this.y,
    this.w,
    this.h
  );
  if (this.game.framesCounter % 10 === 0) {
    this.animateImg();
  }
};

Player.prototype.setListeners = function() {
  document.onkeydown = function(event) {
    if (event.keyCode === KEY_UP) {
      if (this.y === this.y0) {
        this.y -= 5;
        this.vy -= 10;
      }
    }
  }.bind(this);
};

Player.prototype.shoot = function() {};

Player.prototype.animateImg = function() {
  if (this.img.frameIndex >= 2) {
    this.img.frameIndex = 0;
  } else {
    this.img.frameIndex++;
  }
};

Player.prototype.move = function() {
  if (this.y > this.y0) {
    this.y = this.y0;
    this.vy = 0;
    return;
  }
  this.vy += this.g;
  this.y += this.vy;
};

var KEY_UP = 38;
