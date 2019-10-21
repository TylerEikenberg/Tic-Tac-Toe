/**
 * Tic Tac Toe
 *
 * Tyler Eikenberg
 * *****************************
 */

//gather all separate squares in individual variables
const a3 = document.querySelector('#a3');
const b3 = document.querySelector('#b3');
const c3 = document.querySelector('#c3');
const a2 = document.querySelector('#a2');
const b2 = document.querySelector('#b2');
const c2 = document.querySelector('#c2');
const a1 = document.querySelector('#a1');
const b1 = document.querySelector('#b1');
const c1 = document.querySelector('#c1');
//get div for gameSpace
const gameSpace = document.querySelector('.game-page-box');
const gameStatusText = document.querySelector('.game-text');

/**
 * Class color creates a new color
 *
 * Method switchColor checks what the current value of color is and switches it
 * to the opposite color
 */
class Color {
  constructor(color, player) {
    this.color = color;
    this.player = player;
  }
  switchColor() {
    if (this.color === 'red') {
      this.color = 'blue';
      console.log(this.color);
    } else if (this.color === 'blue') {
      this.color = 'red';
      console.log(this.color);
    }
  }
  switchPlayer() {
    if (this.player === 'One') {
      this.player = 'Two';
      console.log(this.player);
    } else if (this.player === 'Two') {
      this.player = 'One';
      console.log(this.player);
    }
  }
}

//create new color to start game with red
let currentColor = new Color('red', 'one');

//create variable to keep track of number of plays
let playCount = 0;

//if you click inside game space color automatically switches
gameSpace.addEventListener('click', function(e) {
  currentColor.switchColor();
  currentColor.switchPlayer();
});

//add event listeners for each variable so when they are clicked their color changes
a3.addEventListener('click', function(e) {
  e.preventDefault();
  a3.style.background = currentColor.color; //change background color to current players color
  playCount++; //increment play count
  checkWinner(); //check to see if there is a winner
});
a2.addEventListener('click', function(e) {
  e.preventDefault();
  a2.style.background = currentColor.color;
  playCount++;
  checkWinner();
});
a1.addEventListener('click', function(e) {
  e.preventDefault();
  a1.style.background = currentColor.color;
  playCount++;
  checkWinner();
});
b3.addEventListener('click', function(e) {
  e.preventDefault();
  b3.style.background = currentColor.color;
  playCount++;
  checkWinner();
});
b2.addEventListener('click', function(e) {
  e.preventDefault();
  b2.style.background = currentColor.color;
  playCount++;
  checkWinner();
});
b1.addEventListener('click', function(e) {
  e.preventDefault();
  b1.style.background = currentColor.color;
  playCount++;
  checkWinner();
});
c3.addEventListener('click', function(e) {
  e.preventDefault();
  c3.style.background = currentColor.color;
  playCount++;
  checkWinner();
});
c2.addEventListener('click', function(e) {
  e.preventDefault();
  c2.style.background = currentColor.color;
  playCount++;
  checkWinner();
});
c1.addEventListener('click', function(e) {
  e.preventDefault();
  c1.style.background = currentColor.color;
  playCount++;
  checkWinner();
});

/**
 * Winning conditions
 */

checkWinner = () => {
  //check winner only if at least 5 plays have been made
  if (playCount >= 5) {
    //straight across a3, b3, c3
    if (a3.style.background === b3.style.background && b3.style.background === c3.style.background) {
      console.log('straight across a3, b3, c3');
    }
    //straight across a2, b2, c2
    if (a2.style.background === b2.style.background && b2.style.background === c2.style.background) {
      console.log('straight across a2, b2, c2');
    }
    //straight across a1, b1, c1
    if (a1.style.background === b1.style.background && b1.style.background === c1.style.background) {
      console.log('straight across a1, b1, c1');
    }
    //straight down a3, a2, a1
    if (a3.style.background === a2.style.background && a2.style.background === a1.style.background) {
      console.log('straight down a3 a2 a1');
    }
    //straight down b3, b2, b1
    if (b3.style.background === b2.style.background && b2.style.background === b1.style.background) {
      console.log('straight down b3 b2 b1');
    }
    //straight down b3, b2, b1
    if (b3.style.background === b2.style.background && b2.style.background === b1.style.background) {
      console.log('straight down b3 b2 b1');
    }
    //straight down c3, c2, c1
    if (c3.style.background === c2.style.background && c2.style.background === c1.style.background) {
      console.log('straight down c3 c2 c1');
    }
    //diagonals a3, b2, c1
    if (a3.style.background === b2.style.background && b2.style.background === c1.style.background) {
      console.log('diagonals a3, b2, c1');
    }
    //diagonals c3, b2, a1
    if (c3.style.background === b2.style.background && b2.style.background === a1.style.background) {
      console.log('diagonals c3, b2, a1');
    }
  }
};
