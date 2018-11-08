class GameArea {
  constructor(_ctx, _width, _height) {
    this.ctx = _ctx;
    this.ctx.width = _width;
    this.ctx.height = _height;
    this.frames = 0;
    this.points = 0;
  }

  // start() {
  // this.canvas.width = 300;
  // this.canvas.height = 600;
  // this.context = this.canvas.getContext('2d');
  // this.drawRoad();
  // document.getElementById('game-board').insertBefore(this.canvas, document.getElementById('game-board').childNodes[0]);
  // this.interval = setInterval(updateGameArea, 20);
  // }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.width, this.ctx.height);
  }

  score() {
    this.points = (Math.floor(this.frames / 5));
    this.ctx.font = '18px serif';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${this.points}`, 50, 50);
  }

  stop() {
    clearInterval(this.interval);
    this.ctx.fillStyle = 'rgba(0,0,0,0.7)';
    this.ctx.fillRect(0, 0, 300, 600);
    this.ctx.font = '40px serif';
    this.ctx.fillStyle = 'red';
    this.ctx.fillText('Game Over!', 55, 300);
    this.ctx.fillStyle = 'white';
    this.ctx.fillText('Your final score', 20, 345);
    this.ctx.fillText(this.points, 120, 390);
  }

  drawRoad() {
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(0, 0, 300, 600);
    this.ctx.fillStyle = 'grey';
    this.ctx.fillRect(30, 0, 240, 600);
    this.ctx.strokeStyle = 'white';
    this.ctx.lineWidth = 5;
    this.ctx.setLineDash([15, 15]);
    this.ctx.moveTo(150, 15);
    this.ctx.lineTo(150, 600);
    this.ctx.clearRect(40, 0, 6, 600);
    this.ctx.clearRect(254, 0, 6, 600);
    this.ctx.stroke();
  }
}
