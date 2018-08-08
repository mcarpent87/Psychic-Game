//Variables

var wins = 0;
var losses = 0;
var guessesLeft = 9; //User has 9 guesses
var guessesSoFar = []; // array to push user choices to
    var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

    document.onkeyup = function(event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //taking in user guess
        var computerGuess = computerChoices[Math.floor(Math.random()*computerChoices.length)]; //computer selects random letter
        guessesSoFar.push(userGuess); //pushing user guess to guesses so far

//If else statements
    if (userGuess == computerGuess) {
        wins++;
        alert("You guessed correctly!")
        guessesLeft = 9; //Resetting the amount of guesses remaining to 9
        guesses.length = 0; // Removes any letters from the guesses array 
    }
    else if (guessesLeft == 0) {
        losses++;
        alert("You Lose! Game Over!");
        guessesLeft = 9;
        guessesSoFar.length =0;
    }

    else if (userGuess !== computerGuess) {
        guessesLeft --; //subtract one from guesses left
    }

    
//Displaying win loss record in HTML

var html = "<h1>The Psychic Game</h1>" + 
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Total Wins: " + 
        wins + 
        "</p>" +
        "<p>Total Losses: " + 
        losses + 
        "</p>" +
        "<p>Guesses Left: " + 
        guessesLeft + 
        "</p>" +
        "<p>Your Guesses so far: " +
        guessesSoFar +
        "</p>";

//place html into the game ID
    document.querySelector('#game').innerHTML = html;
}