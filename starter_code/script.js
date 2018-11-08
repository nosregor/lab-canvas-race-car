// window.onload = function () {
//   document.getElementById('start-button').onclick = function () {
//     startGame();
//   };

// function startGame() {
//   // const gameArea = new GameArea(ctx, 300, 600);
//   // gameArea.drawRoad();
//   // const player = new Car(ctx, 130, 500, 40, 80);
//   const gameArea = new GameArea(ctx, width = 300, height = 600);
//   let player = new Car(ctx, 130, 500, 40, 80);

//   gameArea.start();
//   player = new Car(ctx, 130, 500, 40, 80);
//   player.update();
// }


// Global variables
// Canvas config
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
let interval;
let myObstacles;

// Instance variables
const gameArea = new GameArea(ctx, ctx.canvas.width, ctx.canvas.height);
const player = new Car(ctx, 130, 500, 40, 80);

// calls the callback function updates
function start() {
  if (interval) return;
  myObstacles = [];
  gameArea.frames = 0;
  interval = setInterval(updateGameArea, 1000 / 60);
}

function updateGameArea() {
  for (let i = 0; i < myObstacles.length; i += 1) {
    if (player.crashWith(myObstacles[i])) {
      gameArea.stop();
      return;
    }
  }

  gameArea.clear();
  gameArea.drawRoad();
  gameArea.frames++;

  if (gameArea.frames % 100 === 0) {
    // canvas with is 300
    const minWidth = 80;
    const maxWidth = 160;
    // how thick and long
    const width = Math.floor(Math.random() * (maxWidth - minWidth + 1) + minWidth);
    const height = 10;
    // positioning of block
    const x = 20 + Math.floor(Math.random() * (240 - width));
    const y = 0;
    const color = 'red';

    // (_ctx, _width, _height, _color, _x, _y)
    myObstacles.push(new Obstacle(ctx, width, height, color, x, y));
  }

  console.log(myObstacles);

  // draw obstacles on canvas
  for (let i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].y += 2;
    myObstacles[i].update();
  }

  player.newPos();
  player.update();
  gameArea.score();
}

function moveUp() {
  (player.y > 10) ? player.speedY -= 1 : player.speedY = 0;
}

function moveDown() {
  (player.y < 510) ? player.speedY += 1 : player.speedY = 0;
}

function moveLeft() {
  (player.x > 30) ? player.speedX -= 1 : player.speedX = 0;
}

function moveRight() {
  (player.x < 230) ? player.speedX += 1 : player.speedX = 0;
}

document.onkeydown = function (e) {
  switch (e.keyCode) {
    case 38:
      moveUp();
      break;
    case 40:
      moveDown();
      break;
    case 37:
      moveLeft();
      break;
    case 39:
      moveRight();
      break;
  }
};

document.onkeyup = function (e) {
  stopMove();
};

function stopMove() {
  player.speedX = 0;
  player.speedY = 0;
}


start();
