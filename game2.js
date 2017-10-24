// start game

function startGame() {
  var hello = prompt("Would you like to play (y/n)?");
  if (hello === "y") {
    var username = prompt("Please enter your name.");
    startCombat(username);
  } else {
    console.log(":(");
  }
}

startGame();

// action

function startCombat(name) {
  var username = name;
  var computer = "Almighty Grant!";
  var userPoints = 40;
  var computerPoints = 10;
  var computerLosses = 0;

  while (computerPoints > 0 && userPoints > 0) {
    var combat = prompt("Would you like to attack or quit (a/q)?");
    if (combat.toLowerCase() === "a") {
      userPoints -= getDamage();
      computerPoints -= getDamage();
      console.log(username + " has " + userPoints + " health points.");
      console.log(computer + " has " + computerPoints + " health points.");
      if (userPoints <= 0) {
        console.log("You lost. Game over!");
      } else if (computerPoints <= 0 && computerLosses === 3) {
        console.log("You won!");
        break;
      } else if (computerPoints <= 0) {
        computerPoints = 10;
        computerLosses++;
        console.log("You won this round. You have " + computerLosses + " rounds to go.");
      }
    } else if (combat.toLowerCase() === "q") {
      console.log("You got away!");
      break;
    }

    function getDamage() {
      return Math.floor(Math.random() * 5) + 1;
    }
  }
}
