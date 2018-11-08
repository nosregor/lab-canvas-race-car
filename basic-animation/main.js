window.onload = function () {
  document.getElementById('start-button').onclick = function () {
    startGame();
  };

  function startGame() {
    start();
  }
};


// Global variables
// Canvas config
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
// const speed = 2;
let interval;
let myObstacles = [];

// function startGame() {
//   // const game = new GameArea(ctx);
//   // game.start();
//   // const player = new Component(ctx, 30, 30, 'red', 0, 110);
//   // console.log(player);
// }

// Instance variables
const game = new Game(ctx);
const player = new Component(ctx, 30, 30, 'red', 0, 110);

// Main functions
// function update() {
// game.frames++;
// ctx.clearRect(0, 0, canvas.width, canvas.height);
// game.start();
// player.newPos();
// player.draw();
// updateGameArea();
// }

// Auxiliary functions
function updateGameArea() {
  // we need to check if player collides with obstacle every time we update our game,
  // and call game.stop() if this happens.
  for (let i = 0; i < myObstacles.length; i += 1) {
    if (player.crashWith(myObstacles[i])) {
      game.stop();
      return;
    }
  }

  game.clear();
  game.frames += 1;

  if (game.frames % 100 === 0) {
    const x = game.ctx.canvas.width;
    const minHeight = 20;
    const maxHeight = 200;
    const height = Math.floor(Math.random() * (maxHeight - minHeight + 1) + minHeight);
    const minGap = 50;
    const maxGap = 200;
    const gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap);

    // top obstacle
    myObstacles.push(new Component(ctx, 10, height, 'green', x, 0));
    // bottom obstacle
    myObstacles.push(new Component(ctx, 10, x - height - gap, 'green', x, height + gap));
  }

  // draw obstacles on canvas
  for (let i = 0; i < myObstacles.length; i += 1) {
    myObstacles[i].x += -1;
    myObstacles[i].draw();
  }
  // myObstacles.forEach((obs) => {
  //   obs.x += -1;
  //   obs.draw();
  // });

  // updates position of player
  player.newPos();
  player.draw();
  game.score();
}

// calls the callback function updates
function start() {
  if (interval) return;
  myObstacles = [];
  game.frames = 0;
  interval = setInterval(updateGameArea, 1000 / 60);
}

// Player moves / controls
function moveUp() {
  player.speedY -= 1;
}
function moveDown() {
  player.speedY += 1;
}

function moveLeft() {
  player.speedX -= 1;
}

function moveRight() {
  player.speedX += 1;
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
    default:
      console.log('error');
  }
};

function stopMove() {
  player.speedX = 0;
  player.speedY = 0;
}

document.onkeyup = function (e) {
  stopMove();
};


// startGame();
start();
