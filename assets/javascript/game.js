//first thing needed is to select a letter from the alphabet

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters= [];

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];


//computer selects random letter from the string 

//every time a user guesses, subtract one from guesses left

//display the user guess in current guesses array? and keep them all up on screen

//if guesses left reaches 0, add one point to losses

//if user guess is equal to computer guess, add one to wins and game restarts



document.onkeyup = function(event) {

    var userGuess = event.key;

    guessedLetters.push(userGuess);

    console.log(guessedLetters);

    console.log(computerGuess);


    if ((userGuess !== computerGuess) && (guessesLeft !== 1)) {
        (guessesLeft--);
      
    } else if (userGuess === computerGuess) {
        (wins++);
        (guessesLeft = 9);
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessedLetters = [];
       
    } else if (guessesLeft === 1) {
        (losses++);
        (guessesLeft = 9);
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        guessedLetters = [];
    }



    var html =
    
    "<p>wins: " + wins + "</p>" +
    "<p>losses: " + losses + "</p>" +
    "<p>guesses left: " + guessesLeft + "</p>" +
    "<p>guessed letters: " + guessedLetters.join(', ') + "</p>" ;
    
    document.querySelector("#psychicGame").innerHTML = html;






}