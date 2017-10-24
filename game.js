// start game


var hello = prompt("Would you like to play?");
var computer = "Almighty Grant!";

  if (hello === "yes") {
    var username = prompt("Please enter your name.");

// fight
    var userPoints = 40;
    var computerPoints = 10;
    var computerLosses = 0;

    while (computerPoints > 0 && userPoints > 0) {
      userPoints -= Math.floor(Math.random() * 2) + 1;
      computerPoints -= Math.floor(Math.random() * 2) + 1;
      console.log(username + " has " + userPoints + " health points.");
      console.log(computer + " has " + computerPoints + " health points.");
        if (userPoints <= 0) {
          console.log("You lost. Game over!");
        } else if (computerPoints <=0 && computerLosses === 3) {
          console.log("You won!");
        } else if (computerPoints <=0) {
          computerPoints = 10;
          computerLosses++;
          console.log("You won this round. You have " + computerLosses + " rounds to go.");
        }
     }

// stop game
   } else {
      console.log(":(");
  }
