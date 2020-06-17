// Business Logic
function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
}
console.log(rollDice());
// function TurnScore(diceRollValue){
  //   return 
  // }
  
  
function User(userName, totalScore){
  this.userName = userName,
  this.totalScore = totalScore
}
let totalScore = 0;

User.prototype.addToTotalScore = function(totalScore) {
  return this.totalScore += turnScoreSum
}


// User Interface
let diceRollValue = rollDice();
$(document).ready(function() {
  $("#name-btn").submit(function(event) {
    event.preventDefault();
    let newUserName = $("#user-name").val();
    $(".name").text(newUserName);
  });
  $("#roll-btn").click(function() {
    $(".roll-number").text(diceRollValue);
    $(".roll-number").val("")
  });
});

let turnScoreArray = [];
let turnScoreSum = 0;
turnScoreArray.push(diceRollValue);
  turnScoreArray.forEach(function(element) {
  turnScoreSum += element;
  });
