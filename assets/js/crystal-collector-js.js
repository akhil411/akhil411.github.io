var scores = {
    targetScore: 0,
    hexagonalScore: 0,
    diamondScore: 0,
    circularScore: 0,
    octagonalScore: 0,
    totalScore: 0,
    wins:0,
    losses:0
}
var winAudio = new Audio("assets/audio/winAudio.wav");
var lossAudio = new Audio("assets/audio/lossAudio.wav");

$(document).ready(function(){
    generateScore();
    crystalClick();
    instructions();
    close();
});

function generateScore() 
{
    scores.targetScore = Math.floor(Math.random() * 101) + 19; 
    scores.hexagonalScore = Math.floor(Math.random() * 11) + 1; 
    scores.diamondScore = Math.floor(Math.random() * 11) + 1; 
    scores.circularScore = Math.floor(Math.random() * 11) + 1; 
    scores.octagonalScore = Math.floor(Math.random() * 11) + 1;  
    $("#targetScore").text(scores.targetScore);
    $("#currentScore").text(scores.totalScore);
}

 function scoreCheck()
{
     if (scores.totalScore == scores.targetScore) {
         scores.wins++;
         $("#winsText").text(scores.wins);
         winAudio.play();
         resetGame();
     }
     if (scores.totalScore > scores.targetScore) {
        scores.losses++;
        $("#lossesText").text(scores.losses);
        lossAudio.play();
        resetGame();
    }
 }

 function crystalClick()
 {
    
    $("#diamondCrystal").on("click", function() {
        scores.totalScore = scores.totalScore + scores.diamondScore;
        $("#currentScore").text(scores.totalScore);
        scoreCheck();
    });
    $("#hexagonalCrystal").on("click", function() {
        scores.totalScore = scores.totalScore + scores.hexagonalScore;
        $("#currentScore").text(scores.totalScore);
        scoreCheck();
    });
    $("#circularCrystal").on("click", function() {
        scores.totalScore = scores.totalScore + scores.circularScore;
        $("#currentScore").text(scores.totalScore);
        scoreCheck();
    });
    $("#octagonalCrystal").on("click", function() {
        scores.totalScore = scores.totalScore + scores.octagonalScore;
        $("#currentScore").text(scores.totalScore);
        scoreCheck();
    });
 }

 function resetGame()
 {
    scores.totalScore = 0;
    generateScore();
 }

 function instructions()
 {
    $("#instructions" ).on("click", function() {
        $("#modalInstructions").css("display", "block");
      });
 }

 function close()
 {
    $(".close" ).on("click", function() {
        $("#modalInstructions").css("display", "none");
      });
 }
 