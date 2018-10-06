window.onload = function () {

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var wordlist = ['razputin', 'reynold', 'wren', 'everett', 'charlie', 'lucy',
        'lili', 'boyd', 'oleander', 'milla', 'sasha', 'ford', 'dogen', 'napoleon',
        'bobby', 'crispin', 'loboto', 'sheegor', 'kochamara', 'linda', 'pokeylope',
        'gloria', 'edgar', 'benny', 'elka', 'kitty', 'chloe', 'jt', 'quentin',
        'vernon', 'milka', 'crystal', 'clem', 'nils', 'maloof', 'mikhail', 'pheobe',
        'elton', 'chops', 'franke', 'eddie', 'ophelia', 'killmaster', 'lionwhyte',
        'doviculus', 'kage', 'mangus', 'rima', 'fletus', 'lars', 'lita', 'baron',
        'ormagoden', 'mittens', 'guardian', 'succoria', 'dorsilla', 'shay', 'vella',
        'marek'];

    var word;               //Current word
    var guess;              //Most recent guess
    var guesses = [];       //previous guesses
    var wins;
    var lives = 10;         //#of guesses total
    var livesLeft;          //guesses remaining
    var correctGuesses;
    var space;              //spaces in the word
    //Word selected at start
    var word = wordlist[Math.floor(Math.random() * wordlist.length)];

    //change word to an array to turn into _
    var chosenWordA = [...word];
    var lettersRemaining = chosenWordA.length;
    //display chosen word array as _s
    function displayUnderscores() {
        for (var i = 0; i < chosenWordA.length; i++) {
            var newDiv = document.createElement('div');
            size = wordbox.offsetWidth / chosenWordA.length;

            //format it it up
            newDiv.innerHTML = "_";
            newDiv.style.width = size + 'px';
            newDiv.style.height = 0.8 * size + 'px';
            newDiv.style.borderBottom = '10px';
            newDiv.style.marginRight = '10px';
            newDiv.style.textAlign = 'center';
            newDiv.style.float = 'right';

            //add id to be easier read
            newDiv.classList.add(chosenWordA[i]);

            wordbox.appendChild(newDiv);
        }
    }

    //identify unique characters in the array
    function unique_char(str1) {
        var str = str1;
        var uniqueL = [];
        for (var x = 0; x < str.length; x++) {
            if (uniqueL.indexOf(str.charAt(x)) == -1) {
                uniqueL += str[x];
            }
        }
        return uniqueL;
    }

    //check to see if pressed key is in the word
    function CheckGuess(guess, chosenWordA) {
        //=== -1 means if it's not in the array
        if (chosenWordA.indexof(input) === -1){

        } else {
            var letterDiv = document.getElementById(chosenWordA).querySelectorAll('.' + guess);
            for (var i = 0; i<letterDiv.length; i++) {
                letterDiv[i].innerHTML = guess;
            }
        }
    }

    //onkey up for guess and put previous guess into Guesses
    document.onkeyup = function (event) {
        var guess = event.key.toLowerCase();
        if (alphabet.indexOf(guess) === -1){
            alert("Whoops! That button wasn't a letter! please try again.")
        } 

        if (guesses.indexOf(guess) === -1 && alphabet.indexOf !== -1){
            guesses.push(guess);
            livesLeft = lives - guesses.length;
        }

        var win = guesses.filter(function(e) {
            return unique_char(chosenWordA).indexOf(e) < -1;
        });

        CheckGuess(guess, chosenWordA);
        
    }



    //game start
    displayUnderscores(chosenWordA);
}