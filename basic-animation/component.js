class Component {
  constructor(_ctx, _width, _height, _color, _x, _y) {
    this.ctx = _ctx;
    this.width = _width;
    this.height = _height;
    this.color = _color;
    this.x = _x;
    this.y = _y;
    this.speedX = 0;
    this.speedY = 0;

    this.left = function () { return this.x; };
    this.right = function () { return (this.x + this.width); };
    this.top = function () { return this.y; };
    this.bottom = function () { return this.y + (this.height); };
  }

  draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  newPos() {
    const minHeight = 0;
    const maxHeight = this.ctx.canvas.height - this.height;
    const minWidth = 0;

    this.x += this.speedX;
    this.y += this.speedY;

    // Left side boundaries
    if (this.x < 0) {
      this.x = minWidth;
    } else {
      this.x += this.speedX;
    }

    // Bottom-Top boundaries
    if (this.y < minHeight) {
      this.y = minHeight;
    } else if (this.y > maxHeight) {
      this.y = maxHeight;
    } else {
      this.y += this.speedY;
    }
  }

  // checks if the position of the player is not the same as the obstacle's one.
  crashWith(obstacle) {
    return !((this.bottom() < obstacle.top())
      || (this.top() > obstacle.bottom())
      || (this.right() < obstacle.left())
      || (this.left() > obstacle.right()));
  }
}
