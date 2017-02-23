angular
  .module("hangmanApp", [])
  .controller("HangmanController", HangmanController);

function HangmanController () {
  var vm = this;

  vm.hangman = new HangmanGame("because-potato");

  vm.guessLetter = function (letter) {
    vm.hangman.input = '';
    vm.hangman.guess(letter);
  }
}
