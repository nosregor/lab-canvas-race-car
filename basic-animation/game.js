class Game {
  constructor(_ctx) {
    this.ctx = _ctx;
    this.frames = 0;
    this.points = 0;
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }

  // keep score of game
  score() {
    this.points = (Math.floor(this.frames / 5));
    this.ctx.font = '18px serif';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText(`Score: ${this.points}`, 350, 50);
  }

  // this function will stop our setInterval().
  stop() {
    clearInterval(this.interval);
  }
}
