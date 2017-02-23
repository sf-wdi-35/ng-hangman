console.log('app.js loaded!');

var app = angular.module("hangmanApp", []);
app.controller("HangmanController", HangmanController)
// App
angular
  .module("hangmanApp", [])
  .controller("HangmanController", HangmanController);

function HangmanController() {
  var vm = this;
  // create a new game
  vm.hangman = new HangmanGame("elephant");
  
  vm.guessLetter = function(input) {
    // guess letter
    vm.hangman.guess(input);
    // clear input
    vm.hangman.input = "";
  }
}