// initialize the application
angular
  .module("hangmanApp", [])
  .controller("hangmanCtrl", hangmanCtrl)


function hangmanCtrl(){

  var word = words[Math.floor(Math.random() * words.length)]

  var vm = this;

  this.newGame = new HangmanGame(word);

  this.guess;

  this.glyph;

  this.guessLetter = function(){
    this.newGame.guess(this.guess);
    this.guess = null;
    if(this.newGame.gameWon){
      this.glyph = "glyphicon-ok";
    } else if (this.newGame.gameWon===false){
      this.glyph = "glyphicon-remove";
    }
  }

}
