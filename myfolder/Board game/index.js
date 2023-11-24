
var result = document.getElementById("result");

function diceRoll() {
    var randomNumber = Math.random();
    randomNumber = Math.floor((randomNumber * 6) + 1);
    return randomNumber;
}

function rollButton() {
   var rollValue = diceRoll();
    result.innerHTML = rollValue;
}


