console.log('app.js loaded!');

// initialize the application
var app = angular
  .module("hangmanApp", []);

app.controller("HangmanController", HangmanController);

function HangmanController(){

	var vm = this;

	vm.game = new HangmanGame('mercurial');

	vm.guessLetter = function(input) {
    vm.game.guess(input);
    vm.game.input = "";
  }

}