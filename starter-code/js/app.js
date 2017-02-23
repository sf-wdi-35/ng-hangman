console.log('app.js loaded!');

// initialize the application
angular
	.module("hangmanApp", [])
	.controller("Hangman", Hangman);

function Hangman(){

	var vm= this;

	vm.hangman = new HangmanGame("Hakuna-Matata");

	  vm.guessLetter = function(input) {

	    vm.hangman.guess(input);

	    vm.hangman.input = "";
	  }
	}