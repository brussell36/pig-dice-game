// Business Logic
function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
} for (let i = 0; i < 5; i++) console.log(rollDice())

function User(userName, totalScore){
  this.userName = userName,
  this.totalScore = []
}
User.prototype.addToTurnScore = function(?) {
  return this.totalScore += turnScore
}


// User Interface

$(document).ready(function(){
  event.preventDefault();
  const inputtedUserName = $("form#player-names").
});