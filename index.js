function SnakesLadders() {
  //if die1 and die2 are the same, then you can play again
  //consequences of snakes and ladders happens after plays
  //so maybe the consequences/conditionals should go up here
  // i need a way to tell this guy which player I am on.
}

SnakesLadders.prototype.play = function(die1, die2) {
  //x will be the place on the board
  //x is found by adding die1 and die2
  //ladders are x === 2, 7 , 8, 15, 21, 28, 36, 51, 71, 78, 87
  //x===2? x=38 : 7? 14 : 8? 31 : 15? 26 :  21? 42: 28? 84 :  36? 44: 51? 67: 71? 91: 78? 98: 87? 94;
  let playerPlacement = "Player 1 is on square ";
  //if(die1===die2) the player gets another turn
  // figure out how to switch players and
  let x = 0;
  x += die1 + die2;

  if (x === 2) {
    x = 38;
  } else if (x === 7) {
    x = 14;
  } else if (x === 8) {
    x = 31;
  } else if (x === 15) {
    x = 26;
  } else if (x === 21) {
    x = 42;
  } else if (x === 28) {
    x = 28;
  } else if (x === 51) {
  } else if (x === 71) {
    x = 91;
  } else if (x === 78) {
    x = 98;
  } else if (x === 87) {
    x = 94;
  }
  //snakes (heads) are 16, 46, 49, 62, 64, 74, 89, 92, 95,  99
  //x===99? : x=80 95? 75 : 92? 88: 89? 68 : 74? 53:  64? 60: 49?11: 46? 25: 16? 6;
  if (x === 16) {
    x = 6;
  } else if (x === 46) {
    x = 25;
  } else if (x === 49) {
    x = 11;
  } else if (x === 62) {
    x = 19;
  } else if (x === 64) {
    x = 60;
  } else if (x === 74) {
    x = 53;
  } else if (x === 89) {
    x = 68;
  } else if (x === 92) {
    x = 88;
  } else if (x === 95) {
    x = 75;
  } else if (x === 99) {
    x = 80;
  }
  let result = null;
  //if x > 100 then
  if (x < 100) {
    result = playerPlacement + x;
  } else if (x === 100) {
    result = "Game Over";
  } else if (x > 100) {
    x = 100 - (x - 100);
  }

  return result;
};

var game = new SnakesLadders();
console.log(game.play(1, 1) + " Should return: 'Player 1 is on square 38'"); //, "Player 1 is on square 38", "Should return: 'Player 1 is on square 38'");
console.log(game.play(1, 5) + " Should return: 'Player 1 is on square 44'"); //, "Player 1 is on square 44", "Should return: 'Player 1 is on square 44'");
console.log(game.play(6, 2) + " Should return: 'Player 2 is on square 31'"); //, "Player 2 is on square 31", "Should return: 'Player 2 is on square 31'");
console.log(game.play(1, 1) + " Should return: 'Player 1 is on square 25'"); //, "Player 1 is on square 25", "Should return: 'Player 1 is on square 25'");
