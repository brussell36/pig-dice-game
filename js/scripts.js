// Business Logic
function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
} 
  
function User(userName, totalScore){
  this.userName = userName,
  this.totalScore = totalScore
}
let totalScore = 0;

User.prototype.addToTotalScore = function(totalScore) {
  return this.totalScore += turnScoreSum
}

let diceRollValue = rollDice();
// User Interface
$(document).ready(function() {
  $("#roll-btn").click(function() {
    let diceRollValue = rollDice();
    $(".roll-number").text(diceRollValue);
  });
  $("form#name").submit(function(event){
    event.preventDefault();
    let newUserName = $("#user-name").val();
    $(".name").text(newUserName);
  });
});

let turnScoreArray = [];
let turnScoreSum = 0;
turnScoreArray.push(diceRollValue);
  turnScoreArray.forEach(function(element) {
  turnScoreSum += element;
  });
  console.log(turnScoreArray);
  console.log(turnScoreSum);
