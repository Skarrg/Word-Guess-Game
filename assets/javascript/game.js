window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wordlist = ['duckling', 'chipmunk', 'flamingo', 'blowfish', 'numbat', 'nightjar', 'ovenbird', 'lovebird', 'hamster', 'leopard'];

    var word;               //Current word
    var guess;              //Most recent guess
    var guesses = [];       //previous guesses
    var wins = 0;
    var lives = 15;         //#of guesses total
    var livesLeft;          //guesses remaining
    var correctGuesses = 0;
    var chosenWordA = [];
    //spaces in the word

    //Word selected at start
    function WordSelect() {
        word = wordlist[Math.floor(Math.random() * wordlist.length)];
        //change word to an array to turn into _
        chosenWordA = [...word];
    }

    //display chosen word array as _s
    function displayUnderscores() {
        for (var i = 0; i < chosenWordA.length; i++) {
            var newDiv = document.createElement('div');
            size = wordbox.offsetWidth / chosenWordA.length;

            //format it it up
            newDiv.innerHTML = "_";
            newDiv.style.width = 0.8 * size + 'px';
            newDiv.style.height = 0.8 * size + 'px';
            newDiv.style.borderBottom = '10px';
            newDiv.style.margin = '5px';
            newDiv.style.textAlign = 'center';
            newDiv.style.float = 'left';

            //add id to be easier read
            newDiv.classList.add(chosenWordA[i]);

            wordbox.appendChild(newDiv);
        }
    }

    //function to clear and reset everything
    function NewRound() {
        var guessesDiv = document.getElementById("guessesbox");
        var guessDiv = document.getElementById("guessbox");
        var wordboxDiv = document.getElementById("wordbox");
        var livesboxDiv = document.getElementById("livesbox");
        var winsboxDiv = document.getElementById("winsbox");

        correctGuesses = 0;
        livesLeft = 15;

        guessDiv.innerHTML = "Your Most Recent Guess:";
        guessesDiv.innerHTML = "Previous Guesses:";
        while (wordboxDiv.firstChild) {
            wordboxDiv.removeChild(wordboxDiv.firstChild);
        }
        livesboxDiv.innerHTML = "Guesses left:";
        winsboxDiv.innerHTML = "Wins: " + ++wins;
        WordSelect();
        displayUnderscores(chosenWordA);
    }

    //check to see if pressed key is in the word
    function CheckGuess(guess, chosenWordA) {
        var letterDiv = document.getElementsByClassName(guess);
        var guessesDiv = document.getElementById("guessesbox");
        var guessDiv = document.getElementById("guessbox");

        //=== -1 means if it's not in the array
        if (chosenWordA.indexOf(guess) === -1) {

        } else {
            letterDiv[0].innerHTML = guess;
            ++correctGuesses;
        }

        guessesDiv.innerText = 'Previous Guesses: ' + guesses;
        guessDiv.innerText = 'Your Most Recent Guess: ' + guess;

        //for (var i = 0; i < letterDiv.length; i++) {
        //    if
        //}
    }

    //onkey up for guess and put previous guess into Guesses
    document.onkeyup = function (event) {
        guess = event.key.toLowerCase();
        var guessesLeftDiv = document.getElementById("livesbox");
        if (alphabet.indexOf(guess) === -1) {
            alert("Whoops! That button wasn't a letter! please try again.")
        }

        if (guesses.indexOf(guess) === -1 && alphabet.indexOf !== -1) {
            guesses.push(guess);
            livesLeft = lives - guesses.length;
            guessesLeftDiv.innerText = 'Guesses left: ' + livesLeft;
            CheckGuess(guess, chosenWordA);
        }

        if ((correctGuesses) >= chosenWordA.length) {
            alert("YOU WIN! The word was " + word);
            NewRound();
        }

        if (livesLeft == 0) {
            alert('You ran out of guesses! Try again.')
            NewRound();
        }
    }

    //game start
    WordSelect();
    displayUnderscores(chosenWordA);

    
}