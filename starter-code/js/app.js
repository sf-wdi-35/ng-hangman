//console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);
app.controller("hangmanCtrl", hangmanCtrl)


function hangmanCtrl(){
  var vm = this;
   vm.game = new HangmanGame('elephant', 8);  //Let's give em an extra shot.

   vm.guessLetter = function(input){
      console.log(input);  //attempt to get results from this function

   }
 }
  //  vm.guessLetter = function(input) {
  //   // guess the letter
  //   console.log("I am guessing the letter");
  // }
  // //   vm.hangman.guess(input);
  // //   // clear the input
  // //   vm.hangman.input = "";
  // // }
