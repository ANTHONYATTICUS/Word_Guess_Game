
// HOW MANY TIMES A LETTER CAN BE USED
var doubleWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wordBank = ['pantera', 'megadeath', 'slayer', 'metallica', 'anthrax'];
var choosenWord = "";
var lettersInWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];
var winCount = 0;
var loseCount = 0;
var guessesLeft = 9;
var rightGuessCounter = 0;

//FUNCTIONS
function reset() {
    //CHOOSE WORD RANDOMLY FROM WORD BANK
    choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //SPLITS CHOOSEN WORD INTO INDIVIDUAL LETTERS
    lettersInWord = choosenWord.split('');
    //GETS THE NUMBER OF BLANKS
    numBlanks = lettersInWord.length;

    //RESET AFTER LOSS
    letterGuessed = 0;
    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    doubleWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    test = false;
    startGame();
}
function startGame() {
    //SELECT RANDOM WORD
    choosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    //INDIVIDUAL LETTERS
    lettersInWord = choosenWord.split('');
    //NUMBER OF BLANKS UNDERSCORES
    numBlanks = lettersInWord.length;

    //RESET SCORE
    rightGuessCounter = 0;
    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];
    doubleWord = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //REPLACE UNDERSCORES WITH LETTER
    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push('_');
        document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
    }

    //CHANGE HTML 
    document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
    document.getElementById('numGuesses').innerHTML = guessesLeft;
    document.getElementById('winCounter').innerHTML = winCount;
    document.getElementById('lossCounter').innerHTML = loseCount;
    document.getElementById('wrongGuesses').innerHTML = wrongLetters;
    console.log(choosenWord);
    console.log(lettersInWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function compareLetters(userKey) {
    console.log('WORKING!');
    //IF USER SELECT SAME ANSWER TWICE
    if (choosenWord.indexOf(userKey) > -1) {
        //LOOP DEPENDING ON BLANKS
        for (var i = 0; i < numBlanks; i++) {
            //FILL IN INDEX WITH USER KEY
            if (lettersInWord[i] === userKey) {
                rightGuessCounter++;
                blanksAndSuccesses[i] = userKey;
                document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
            }
        }
        console.log(blanksAndSuccesses);
    }
    //WRONG GUESS
    else {
        wrongLetters.push(userKey);
        guessesLeft--;
        //CHANGE HTML
        document.getElementById('numGuesses').innerHTML = guessesLeft;
        document.getElementById('wrongGuesses').innerHTML = wrongLetters;
        console.log('Wrong Letters = ' + wrongLetters);
        console.log('Guesses left are ' + guessesLeft);
    }
}

function winLose() {
    // WHEN YOU FILL IN ALL UNDERSCORES YOU WIN
    if (rightGuessCounter === numBlanks) {
        //WIN COUNT 
        winCount++;
        //CHANGE HTML
        document.getElementById('winCounter').innerHTML = winCount;
        alert('METAL HEAD! TAKE A SHOWER!');
        reset();
    }
    // SCORE CARD, WHEN GUESS HITS 0 YOU SUCK. 
    else if (guessesLeft === 0) {
        //COUNT LOSS
        loseCount++;
        //CHANGE HTML
        document.getElementById('lossCounter').innerHTML = loseCount;
        alert('YOU LOSE HIPPY.');
        reset();
    }
}

//MAIN PROCCESS	
//INITIATE CODE
startGame();

document.onkeyup = function (event) {
    test = true;
    var letterGuessed = event.key;
    for (var i = 0; i < doubleWord.length; i++) {
        if (letterGuessed === doubleWord[i] && test === true) {
            var spliceDword = doubleWord.splice(i, 1);
            console.log('Double word is = ' + doubleWord[i])
            console.log('Spliced Word is = ' + spliceDword);

            compareLetters(letterGuessed);
            winLose();
        }
    }

}

