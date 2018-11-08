class Obstacle {
  constructor(_ctx, _width, _height, _color, _x, _y) {
    this.ctx = _ctx;
    this.width = _width;
    this.height = _height;
    this.color = _color;
    this.x = _x;
    this.y = _y;

    this.left = function () { return this.x; };
    this.right = function () { return (this.x + this.width); };
    this.top = function () { return this.y; };
    this.bottom = function () { return this.y + (this.height); };
  }

  update() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}


// class Obstacle {
//   constructor(assets) {
//     this.assets = assets;
//     this.width = Math.random() * assets.ctx.width - 100;
//     this.height = 50;
//     this.x = Math.random() * assets.ctx.width - this.width;
//     this.y = 0;
//     this.score = this.assets.obstacleScore[Math.floor(Math.random() * this.assets.obstacleScore.length)];
//     this.avoided = false;
//   }

//   drawObstacle() {
//     this.assets.ctx.fillStyle = this.assets.red;
//     this.assets.ctx.fillRect(this.x, this.y, this.width, this.height);
//   }

//   updatePosition() {
//     if (this.y > this.assets.ctx.height) return;
//     this.y += this.assets.obstacleIncrement;
//   }

//   score() {
//     return this.score;
//   }
// }
