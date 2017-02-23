// initialize the application
var app = angular
  .module("hangmanApp", [])
  .controller("hangmanController", HangmanController);
//Controllers

function HangmanController(){
 var vm = this; // initialize new game
 vm.hangman = new HangmanGame('snollygoster'); // helper function for the view
 var input="";
 vm.guessLetter = function(input) {
  vm.hangman.guess(input);
  vm.hangman.input = "";
 }
};
