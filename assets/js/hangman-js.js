var computerChoices = [
  "australia",
  "argentina",
  "austria",
  "india",
  "canada",
  "columbia",
  "china",
  "denmark",
  "egypt",
  "france",
  "germany",
  "iceland",
  "ireland",
  "japan",
  "malaysia",
  "mexico",
  "nepal",
  "poland",
  "portugal"
];
var winAudio = new Audio("assets/audio/winAudio.wav");
var lossAudio = new Audio("assets/audio/lossAudio.wav");
var wins = 0;
var losses = 0;
var computerGUess;
var blankText = [];
var remainingGuess = 12;
var computerGuessArray = [];
var unluckyGuess = [];
var modalOn = false;
window.onload = function() {
   document.getElementsByClassName("close")[0].onclick = function() { 
        document.getElementById("myModal").style.display = "none";
        modalOn = false;
    }

    document.onkeyup = function(event) {
      if (!modalOn) {
          var charCode = event.keyCode;
          if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
          {
              var userGuess = String.fromCharCode(event.keyCode).toUpperCase();
              document.getElementById("userChoice-text").textContent = userGuess;
              checkGuess(userGuess);
              winLoss()
              remainingGuess= remainingGuess-1;
              document.getElementById("remainingGuess-text").textContent = remainingGuess;
              document.getElementById("wins-text").textContent = wins;
              document.getElementById("losses-text").textContent = losses;
              document.getElementById("lastGuess-text").textContent = unluckyGuess;
          }  
      }
    };

    hangmanGame()
};

function hangmanGame()
{
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    for (i = 0; i < computerGuess.length; i++) {
        var blankButton = document.createElement("BUTTON");
        blankButton.innerHTML = "-";
        blankButton.classList.add("blank");
        document.getElementById("blankAnswer-text").appendChild(blankButton);
    }
}

function checkGuess(guessLetter)
{
    unluckyGuess.push(guessLetter);
    if (isLetterFound(guessLetter)) {
        var blankElement= document.getElementsByClassName("blank");
        for(i=0; i<computerGuess.length;i++) {
            if (guessLetter == computerGuess[i].toUpperCase()) {
                blankElement[i].innerHTML = guessLetter;  
                blankText[i] = guessLetter;
            }
        } 
    }
}

function isLetterFound(guessLetter)
{
    var condition = false;
    for(i=0; i<computerGuess.length; i++) {
        if (guessLetter == computerGuess[i].toUpperCase()) {
            condition = true;
        }
    }

    return condition;
}

function winLoss()
{
    var j=0;
    for(i=0; i<computerGuess.length;i++) {
        if (computerGuess[i].toUpperCase() == blankText[i]) {
            j++;
        }
    }

    if(j == computerGuess.length) {
        wins++;
        winAudio.play();
        showModal("YOU WON!!", "It's ");
        resetGame();
    }
  
    if(remainingGuess < 2) {
        losses++;
        lossAudio.play();
        showModal("YOU LOST!!", "Correct Word:");
        resetGame();
    }
}

function showModal(gameStatus, correctWord)
{
  document.getElementById("myModal").style.display = "block";
  modalOn = true;
  document.getElementById("game-status").innerHTML = gameStatus
  document.getElementById("correct-word").innerHTML = correctWord + computerGuess.toUpperCase();
}

function resetGame()
{
    blankText = [];
    remainingGuess = 13;
    unluckyGuess = [];
    document.getElementById("blankAnswer-text").innerHTML = "";
    document.getElementById("userChoice-text").innerHTML = "";
    hangmanGame();
    userGuess='';
}