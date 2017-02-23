console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);
app.controller("hangmanCtrl", hangmanCtrl);

function hangmanCtrl() {
  var vm = this;
  // var randWord = ["icecream", "rainbows", "elephant", "racecar"][randNum(0, 3)];

  // function randNum(min, max){
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  vm.game = new HangmanGame("elephant");
  vm.guessLetter = function (guessedLetter) {
    vm.game.guess(guessedLetter);
    vm.game.guessedLetter = "";
  }
}


var game = new HangmanGame('supersecretword');





