console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller('hangmanCtrl', hangmanCtrl);

function hangmanCtrl(){
  var vm = this;

  vm.hangman = new HangmanGame('foie gras');
  vm.guessLetter = function(input) {
    vm.hangman.guess(input);
    vm.hangman.input = '';
  }
}
