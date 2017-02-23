console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller("HangmanController", HangmanController);

function HangmanController() {
  var vm = this;

  vm.hangman = new HangmanGame('bazooka', 5);
  vm.guessLetter = function(letter){
    vm.hangman.guess(letter);
    vm.hangman.input = "";
  }
}