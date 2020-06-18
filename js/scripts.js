// Business Logic
function rollDice() {
  return 1 + Math.floor(Math.random() * 6);
} 

function User(userName, turnScore, totalScore)  {
  this.userName = userName,
  this.turnScore = turnScore,
  this.totalScore = totalScore
}

function makeNewUser(newUserName) {
  let playerName = new User(newUserName, turnScoreSumFunction);
  return playerName;
}

function turnScoreSumFunction (diceRollValue){
  let turnScoreSum = turnScoreArray.push(diceRollValue);
  turnScoreArray.forEach(function(element) {
  turnScoreSum += element - 1;
  });
}

let totalScore = 0;

User.prototype.addToTotalScore = function(totalScore) {
  return this.totalScore += turnScoreSum
}

function addDiceRollValues(diceRollValue, diceRollValue){
  return diceRollValue + diceRollValue
}

let diceRollValue = rollDice();

// User Interface
$(document).ready(function() {
  $("form#name").submit(function(event){
    event.preventDefault();
    let newUserName = $("#user-name").val();
    makeNewUser(newUserName);
    $(".name").text(newUserName);
    $("#user-name").val("");
    console.log(newUserName);
  }); 
  $("#roll-btn").click(function() {
    let diceRollValue = rollDice();
    turnScoreSumFunction(diceRollValue);
    $(".roll-number").text(diceRollValue);
    $(".turn-number").text(turnScoreSum);
    });
  });
  // $("#halt-btn").click(function()    //  Function for halt button to add turn score to total score
  //   call User prototype addToTotalScore
  // 
