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
//preset colors of a3 a1 c3 c1 so 'null' values aren't evaluated to being equal
a3.style.background = 'white';
a1.style.background = 'white';
c3.style.background = 'white';
c1.style.background = 'white';

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
  if (a3.dataset.click === 'false') {
    a3.style.background = currentColor.color; //change background color to current players color
    playCount++; //increment play count
    checkWinner(); //check to see if there is a winner
    a3.dataset.click = 'true';
  }
});
a2.addEventListener('click', function(e) {
  e.preventDefault();
  if (a2.dataset.click === 'false') {
    a2.style.background = currentColor.color;
    playCount++;
    checkWinner();
    a2.dataset.click = 'true';
  }
});
a1.addEventListener('click', function(e) {
  e.preventDefault();
  if (a1.dataset.click === 'false') {
    a1.style.background = currentColor.color;
    playCount++;
    checkWinner();
    a1.dataset.click = 'true';
  }
});
b3.addEventListener('click', function(e) {
  e.preventDefault();
  if (b3.dataset.click === 'false') {
    b3.style.background = currentColor.color;
    playCount++;
    checkWinner();
    b3.dataset.click = 'true';
  }
});
b2.addEventListener('click', function(e) {
  e.preventDefault();
  if (b2.dataset.click === 'false') {
    b2.style.background = currentColor.color;
    playCount++;
    checkWinner();
    b2.dataset.click = 'true';
  }
});
b1.addEventListener('click', function(e) {
  e.preventDefault();
  if (b1.dataset.click === 'false') {
    b1.style.background = currentColor.color;
    playCount++;
    checkWinner();
    b1.dataset.click = 'true';
  }
});
c3.addEventListener('click', function(e) {
  e.preventDefault();
  if (c3.dataset.click === 'false') {
    c3.style.background = currentColor.color;
    playCount++;
    checkWinner();
    c3.dataset.click = 'true';
  }
});
c2.addEventListener('click', function(e) {
  e.preventDefault();
  if (c2.dataset.click === 'false') {
    c2.style.background = currentColor.color;
    playCount++;
    checkWinner();
    c2.dataset.click = 'true';
  }
});
c1.addEventListener('click', function(e) {
  e.preventDefault();
  if (c1.dataset.click === 'false') {
    c1.style.background = currentColor.color;
    playCount++;
    checkWinner();
    c1.dataset.click = 'true';
  }
});

/**
 * Winning conditions
 */

checkWinner = () => {
  //check winner only if at least 5 plays have been made
  if (playCount >= 5) {
    /*****************************
     * //straight across a3, b3, c3
     */
    if (a3.style.background === b3.style.background && b3.style.background === c3.style.background) {
      if (a3.style.background === 'red' && b3.style.background === 'red' && c3.style.background === 'red') {
        console.log('PLAYER 1 WINS');
      } else if (a3.style.background === 'blue' && b3.style.background === 'blue' && c3.style.background === 'blue') {
        console.log('PLAYER 2 WINS');
      }
    }

    /*****************************
     * straight across a2, b2, c2
     */
    if (a2.style.background === b2.style.background && b2.style.background === c2.style.background) {
      if (a2.style.background === 'red' && b2.style.background === 'red' && c2.style.background === 'red') {
        console.log('PLAYER 1 WINS');
      } else if (a2.style.background === 'blue' && b2.style.background === 'blue' && c2.style.background === 'blue') {
        console.log('PLAYER 2 WINS');
      }
    }

    /*****************************
     * straight across a1, b1, c1
     */
    if (a1.style.background === b1.style.background && b1.style.background === c1.style.background) {
      if (a1.style.background === 'red' && b1.style.background === 'red' && c1.style.background === 'red') {
        console.log('PLAYER 1 WINS');
      } else if (a1.style.background === 'blue' && b1.style.background === 'blue' && c1.style.background === 'blue') {
        console.log('PLAYER 2 WINS');
      }
    }
    /*****************************
     * straight down a3, a2, a1
     */

    if (a3.style.background === a2.style.background && a2.style.background === a1.style.background) {
      if (a3.style.background === 'red' && a2.style.background === 'red' && a1.style.background === 'red') {
        console.log('PLAYER 1 WINS');
      } else if (a3.style.background === 'blue' && a2.style.background === 'blue' && a1.style.background === 'blue') {
        console.log('PLAYER 2 WINS');
      }
    }

    /*****************************
     * straight down b3 b2 b1
     */
    if (b3.style.background === b2.style.background && b2.style.background === b1.style.background) {
      if (b3.style.background === 'red' && b2.style.background === 'red' && b1.style.background === 'red') {
        console.log('PLAYER 1 WINS');
      } else if (b3.style.background === 'blue' && b2.style.background === 'blue' && b1.style.background === 'blue') {
        console.log('PLAYER 2 WINS');
      }
    }

    /*****************************
     * straight down c3 c2 c1
     */
    if (c3.style.background === c2.style.background && c2.style.background === c1.style.background) {
      console.log('straight down c3 c2 c1');
      if (c3.style.background === 'red' && c2.style.background === 'red' && c1.style.background === 'red') {
        console.log('PLAYER 1 WINS');
      } else if (c3.style.background === 'blue' && c2.style.background === 'blue' && c1.style.background === 'blue') {
        console.log('PLAYER 2 WINS');
      }
    }

    /*****************************
     * diagonals a3, b2, c1
     */
    if (a3.style.background === b2.style.background && b2.style.background === c1.style.background) {
      console.log('diagonals a3, b2, c1');
      if (a3.style.background === 'red' && b2.style.background === 'red' && c1.style.background === 'red') {
        console.log('PLAYER 1 WINS');
      } else if (a3.style.background === 'blue' && b2.style.background === 'blue' && c1.style.background === 'blue') {
        console.log('PLAYER 2 WINS');
      }
    }

    /*****************************
     * diagonals c3, b2, a1
     */
    if (c3.style.background === b2.style.background && b2.style.background === a1.style.background) {
      console.log('diagonals c3, b2, a1');
      if (c3.style.background === 'red' && b2.style.background === 'red' && a1.style.background === 'red') {
        console.log('PLAYER 1 WINS');
      } else if (c3.style.background === 'blue' && b2.style.background === 'blue' && a1.style.background === 'blue') {
        console.log('PLAYER 2 WINS');
      }
    }
  }
};
