console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);
app.controller("hangmanController", hangmanController);
function hangmanController(){
  this.game = new HangmanGame(5);
  this.guess = "";
  this.guessLetter = function(){
    this.game.guess(this.guess);
    this.guess = "";
    if(this.game.gameWon){
      this.game.glyph = "glyphicon-ok";
      this.game.reset();
    }else if(!this.game.gameWon === false){
      this.game.glyph = "glyphicon-remove";
      debugger;
      this.game.reset();
    }
  }
}
