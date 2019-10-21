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
const gameSpace = document.querySelector('.game-page-box');

class Color {
  constructor(color) {
    this.color = color;
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
}

let currentColor = new Color('red');

//create logic to switch between players on click
switchPlayer = number => {
  //if playerNumber = 1, colors only changes to blue
  //if playerNumber = 2, colors only change to red
  if (number === 1) {
    return 2;
  }
  if (number === 2) {
    return 1;
  }
};

//if you click inside game space color automatically switches
gameSpace.addEventListener('click', function(e) {
  currentColor.switchColor();
});

//add event listeners for each variable so when they are clicked their color changes
a3.addEventListener('click', function(e) {
  e.preventDefault();
  a3.style.background = currentColor.color;
});
a2.addEventListener('click', function(e) {
  e.preventDefault();
  a2.style.background = currentColor.color;
});
a1.addEventListener('click', function(e) {
  e.preventDefault();
  a1.style.background = currentColor.color;
});
b3.addEventListener('click', function(e) {
  e.preventDefault();
  b3.style.background = currentColor.color;
});
b2.addEventListener('click', function(e) {
  e.preventDefault();
  b2.style.background = currentColor.color;
});
b1.addEventListener('click', function(e) {
  e.preventDefault();
  b1.style.background = currentColor.color;
});
c3.addEventListener('click', function(e) {
  e.preventDefault();
  c3.style.background = currentColor.color;
});
c2.addEventListener('click', function(e) {
  e.preventDefault();
  c2.style.background = currentColor.color;
});
c1.addEventListener('click', function(e) {
  e.preventDefault();
  c1.style.background = currentColor.color;
});
