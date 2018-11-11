// Create array of words
var word = ["Slayer", "Pantera", "Metallica", "Radiohead"];
// Choose words randomly
var randNum = Math.floor(Math.random()*word.length);
var choosenWord = word[randNum];
var rightWord = [];
var wrongWord = [];
var underScore = [];
console.log(choosenWord);
// Create undesrcores based on length of word
var generateUnderscore = () => {
    for(var i=0; i<choosenWord.length; i++) {
        underScore.push("_");
    }
    return underScore;
} 
console.log(generateUnderscore());
// Capture user input
document.addEventListener('keypress', (event) => {
    var keyword = String.fromCharCode(event.keyCode);
// if users guess is right, 
    if(choosenWord.indexOf(keyword) > -1) {
// add to right words array
        rightWord.push(keyword);
// replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
// check to see if word matches
        if(underscore.join('') == choosenWord) {
            alert("You Win.");
        }
        else {
            wrongWord.push(keyword);
        }
    }
    
});

// Check if their answer is correct
// If right, push to right array
// If wrong, push to wrong array