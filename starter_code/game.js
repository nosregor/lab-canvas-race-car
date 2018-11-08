class Game {
  constructor(context) {
    this.ctx = context;
    this.assets = new Assets(this.ctx);
    this.car = new Car(this.assets);
    this.canvas = new Canvas(this.assets);
    this.obstacles = [];
    this.loopId;
    this.obstaclesId;
  }

  startGame(draw) {
    this.loopId = setInterval(draw, this.assets.interval);
    this.obstaclesId = setInterval(this.addObstacle, this.assets.obstaclesInterval);
  }

  stopGame() {
    clearInterval(this.loopId);
    clearInterval(this.obstaclesId);
    this.gameOver();
  }

  addObstacle() {
    this.obstacles.push(new Obstacle(this.assets));
  }

  gameOver() {
    this.ctx.font = '50px Arial';
    this.ctx.fillStyle = 'black';
    this.ctx.fillText('GAME OVER', this.ctx.width / 2 - 150, this.ctx.height / 2);
  }
  // Game.prototype.score = function(objectObstacle){
  //   this.ctx.font = "30px Arial";
  //   this.ctx.fillStyle = "black";
  //   var score = objectObstacle.score;
  //   thi}s.ctx.fillText(score + " points!", this.ctx.width/2 - 150, this.ctx.height/2);
  // }
}


const gameArea = {
  canvas: document.createElement('canvas'),
  start() {
    this.canvas.width = 300;
    this.canvas.height = 600;
    this.context = this.canvas.getContext('2d');
    this.drawRoad();
    document.getElementById('game-board').insertBefore(this.canvas, document.getElementById('game-board').childNodes[0]);
    this.interval = setInterval(updateGameArea, 20);
  },
  frames: 0,
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
  score() {
    points = (Math.floor(this.frames / 5));
    this.context.font = '18px serif';
    this.context.fillStyle = 'black';
    this.context.fillText(`Score: ${points}`, 50, 50);
  },
  stop() {
    clearInterval(this.interval);
    this.context.fillStyle = 'rgba(0,0,0,0.7)';
    this.context.fillRect(0, 0, 300, 600);
    this.context.font = '40px serif';
    this.context.fillStyle = 'red';
    this.context.fillText('Game Over!', 55, 300);
    this.context.fillStyle = 'white';
    this.context.fillText('Your final score', 20, 345);
    this.context.fillText(points, 120, 390);
  },
  drawRoad() {
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 300, 600);
    this.context.fillStyle = 'grey';
    this.context.fillRect(30, 0, 240, 600);
    this.context.strokeStyle = 'white';
    this.context.lineWidth = 5;
    this.context.setLineDash([15, 15]);
    this.context.moveTo(150, 15);
    this.context.lineTo(150, 600);
    this.context.clearRect(40, 0, 6, 600);
    this.context.clearRect(254, 0, 6, 600);
    this.context.stroke();
  },
};
