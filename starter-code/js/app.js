
// initialize the application
angular
  .module("hangmanApp", [])
  .controller("hangmanCtrl", hangmanCtrl)

function hangmanCtrl(){

  var vm = this;

  vm.newGame = new HangmanGame(prompt("pick a word"));

  this.guess;

  this.glyph;

  vm.guessLetter = function(){
    this.newGame.guess(this.guess);
    this.guess = null;
    if(this.newGame.gameWon){
      this.glyph = "glyphicon-ok";
    } else if (this.newGame.gameWon===false){
      this.glyph = "glyphicon-remove";
    }
  }

}
