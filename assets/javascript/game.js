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
    var lives;              //#of guesses left
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

            //css it up
            newDiv.style.width = size + 'px';
            newDiv.style.height = 0.8 * size + 'px';
            newDiv.style.borderBottom = '10px';
            newDiv.style.marginRight = '10px';
            newDiv.style.textAlign = 'center';
            //add id
            newDiv.classList.add(chosenWordA[i]);

            wordbox.appendChild(newDiv);
        }
    }

    //onkey up for guess and put previous guess into Guesses
    document.onkeyup = function (event) {
        var guess = event.key.toLowerCase();
        guesses.push(guess);
    }

    //check to see if pressed key is in the word
    //function letterCheck(guess) {
    //    for (var i = 0, j = chosenWordA.length; i < j; i++) {
    //        if (guess === chosenWordA[i] {

    //        }
    //    }
    //}

    //game start
    displayUnderscores(chosenWordA);
}