
// Purpose - Convert a number to a string in currency format
// Inputs - an integer
// Outputs - a string in currency format
function formatCurrency(number){
  return "$"+number+".00"
}

function updateInput(){
  var input = document.getElementById("bet").value;
  document.getElementById("bet").value = parseFloat(input).toFixed(2);
}


// Purpose - simulates rolling a pair of 6-sided die
// Inputs - None
// Outputs - Sum of the 2 dice
function rollDice(){
  // Generate random numbers between 1-6 for each roll
  var firstRoll = Math.ceil(Math.random()*6);
  var secondRoll = Math.ceil(Math.random()*6);
  // Return the sum of the rolls
  return firstRoll+secondRoll;
}

// Purpose - Continually roll dice until money runs out,
//           display results in DOM
// Inputs - None
// Outputs - None
function playGame(){
  var money = parseInt(document.getElementById('bet').value);
  // Check that starting bet is >0
  if(money<=0 || isNaN(money)){
    // Give an error message and reset input
    alert("Error: Please input a number that is greater than 0")
    document.getElementById('bet').value=null;
    return false;
  }
  // Store value of starting bet
  var startingBet = money;
  // Keep track of number of rolls
  var rollCount = 1;
  // Keep track of highest amount of money and rolls at that point
  var highest = 1;
  var highRolls = 0;
  // Continue playing until all of the money is gone
  do{
    var result = rollDice();
    // Win $4 if rolls add to 7, otherwise lose $1
    if(result==7){
      money = money+4;
    } else{
      money = money-1;
    }
    // update highest amount if necessary, and store roll count
    if (money>highest){
      highest = money;
      highRolls = rollCount;
    }

    // increment rollCount
    rollCount++;
  } while(money>0);

  document.getElementById('startingBet').innerText = formatCurrency(startingBet);
  document.getElementById('rollCount').innerText = rollCount;
  document.getElementById('highest').innerText = formatCurrency(highest);
  document.getElementById('highRolls').innerText = highRolls;

  document.getElementById('results').style.display = 'block'
  document.getElementById('playBtn').value = 'Play Again'
  return false;
}
