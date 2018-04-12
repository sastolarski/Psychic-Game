//first thing needed is to select a letter from the alphabet

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
// var currentGuesses = ;

//computer selects random letter from the string 



document.onkeyup = function(event) {

    var userGuess = event.key;
    
    var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerGuess);

    if (userGuess === computerGuess) {
        (wins++)
        console.log("you win");
    }






}