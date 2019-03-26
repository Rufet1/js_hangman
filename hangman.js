var letters = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"];

var guessed = [];

var leftguess = 9;

var wins = 0;

var losses = 0;

var letter_to_guess = null;



var left_guess_func = function(){

 document.querySelector("#guesses-left").innerHTML = leftguess;
};

var randomguess = function(){

    letter_to_guess = letters[Math.floor(Math.random * letters.length)];

};

var updateguesses = function() {
    document.querySelector("#your-guesses").innerHTML = guessed.join(", ");
  };
var reset = function(){

    leftguess = 9;
    guessed = [];
    left_guess_func();
    randomguess ();
    updateguesses();
};

left_guess_func();
randomguess();

document.onkeydown = function(event) {
    leftguess--;

    var letter = String.fromCharCode(event.which).toLowerCase();
    guessed.push(letter);
    left_guess_func();
    updateguesses();

    if (letter === letter_to_guess){
        wins++;
        document.querySelector("#wins").innerHTML= wins;
        reset();
    };

    if (leftguess===0) {
    losses++;
    document.querySelector("#losses").innerHTML = losses;
    reset();
    }
};