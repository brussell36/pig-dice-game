// Business Logic
function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
}

function User(userName, totalScore){
  this.userName = userName,
  this.totalScore = []
}

User.prototype.addToTurnScore = function(totalScore) {
  return this.totalScore += turnScore
}

// User Interface

$(document).ready(function(){
  let diceRollValue = rollDice();
  $(".roll-number").text(diceRollValue);
  $("form#dice-roll").submit(function(event) {
    event.preventDefault();
    const inputtedUserName = $("form#player-names");
  });
});