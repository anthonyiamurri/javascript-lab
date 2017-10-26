// start game
"use strict";

var start = document.getElementById("start");
var username = "";

start.onclick = function() {
  document.getElementById("begin").style.display = "none";
  var username = prompt("Please enter your name.");
  user.name = username;
  document.getElementById("gameplay").style.display = "block";
};

var user = {
  name: "",
  health: 40,
  healCount: 2,
  wins: 0,
  generateAttackDamage: function() {
    return Math.floor(Math.random() * 3) + 1;
  },
  heal: function() {
    this.health += Math.floor(Math.random() * 10) + 1;
  }
};

var computer = {
  name: "Almighty Grant!",
  health: 10,
  generateAttackDamage: function() {
    return Math.floor(Math.random() * 5) + 1;
  }
};

var startAttack = document.getElementById("attack");
startAttack = function() {
  user.health -= computer.generateAttackDamage();
  computer.health -= user.generateAttackDamage();
  document.getElementById("userscore").innerHTML = "You attacked! " + user.name + " has " + user.health + " health point(s) left.";
  document.getElementById("computerscore").innerHTML = computer.name + " has " + computer.health + " health point(s) left.";
};

var startHeal = document.getElementById("heal");
startHeal.onclick = function() {
  user.heal();
  document.getElementById("userscore").innerHTML = "You healed. " + user.name + " has " + user.health + " health point(s).";
};

var quitGame = document.getElementById("quit");
quitGame.onclick = function() {
  document.getElementById("gameplay").innerHTML = "That's a wrap.";
};

var startCombat = {
  startAttack.onclick = startAttack();
  startHeal.onclick = startHeal();
  quitGame.onclick = quitGame();
};

startCombat();



//
//
// startGame();
//
// // action
//
// function startCombat() {
//
//   while (computer.health > 0 && user.health > 0) {
//     var combat = prompt("Would you like to attack, heal, or quit (a/h/q)?");
//     if (combat.toLowerCase() === "a") {
//       user.health -= computer.generateAttackDamage();
//       computer.health -= user.generateAttackDamage();
//       console.log(user.name + " has " + user.health + " health points.");
//       console.log(computer.name + " has " + computer.health + " health points.");
//       if (user.health <= 0) {
//         console.log("You lost. Game over!");
//       } else if (computer.health <= 0 && user.wins >= 4) {
//         console.log("You beat Almighty Grant!");
//         break;
//       } else if (computer.health <= 0) {
//         computer.health = 10;
//         user.wins++;
//         console.log("You have won " + user.wins + " round(s).")
//       }
//     } else if (combat.toLowerCase() === "q") {
//       console.log("Goodbye!!");
//       break;
//     } else if (combat.toLowerCase() === "h") {
//       if (user.healCount > 1) {
//         user.heal();
//         user.healCount--;
//         computer.generateAttackDamage();
//         console.log("You now have " + user.health + " health points.");
//       }
//     }
//   }
// }
