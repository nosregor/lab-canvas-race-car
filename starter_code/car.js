class Car {
  constructor(_ctx, _x, _y, _width, _height) {
    this.ctx = _ctx;
    this.x = _x;
    this.y = _y;
    this.width = _width;
    this.height = _height;

    this.speedX = 0;
    this.speedY = 0;

    this.img = new Image();
    this.img.src = 'images/car.png';

    this.left = function () { return this.x; };
    this.right = function () { return (this.x + this.width); };
    this.top = function () { return this.y; };
    this.bottom = function () { return this.y + (this.height); };
  }

  update() {
    this.ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  newPos() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  crashWith(obstacle) {
    return !((this.bottom() < obstacle.top())
      || (this.top() > obstacle.bottom())
      || (this.right() < obstacle.left())
      || (this.left() > obstacle.right()));
  }
}


// class Car {
//   constructor(assets) {
//     this.assets = assets;
//     this.carX = this.assets.carX; // coordenada de més a l'esquerra
//     this.carY = this.assets.carY;
//     this.carWidth = this.assets.carWidth;
//   }

//   moveRight() {
//     if (this.carX < this.assets.ctx.width - this.assets.carIncrement - this.assets.carWidth) this.carX += this.assets.carIncrement;
//   }

//   moveLeft() {
//     if (this.carX > this.assets.carIncrement) this.carX -= this.assets.carIncrement;
//   }

//   drawCar() {
//     this.assets.ctx.drawImage(this.assets.imgCar, this.carX, this.carY, this.assets.carWidth, 100);
//   }

//   hasCollided(objectObstacle) {
//     if ((this.carY >= objectObstacle.y)
//       && (this.carY <= objectObstacle.y + objectObstacle.height)
//       && (this.carX <= objectObstacle.x + objectObstacle.width
//         || this.carX + this.width >= objectObstacle.x)) {
//       return true;
//     }
//     return false;
//   }
//   // Car.prototype.hasAvoided = function(objectObstacle){
//   //   if(this.carY >= objectObstacle.y)
//   //   {
//   //     objectObstacle.avoided = true;
//   //     return true;
//   //   }
//   //   return false;
//   // }
// }
