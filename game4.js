"use strict";

var start = document.getElementById("start");
var username = "";

start.onclick = function startGame() {
  document.getElementById("begin").style.display = "none";
  var username = prompt("Please enter your name.");
  user.name = username;
  document.getElementById("gameplay").style.display = "block";
};

var user = {
  name: "",
  health: 40,
  healCount: 0,
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

var startCombat = document.getElementById("attack");
startCombat.onclick = function() {
  user.health -= computer.generateAttackDamage();
  computer.health -= user.generateAttackDamage();
  document.getElementById("userscore").innerHTML = "You attacked! </p><p>" + user.name + " has " + user.health + " health point(s) left.";
  document.getElementById("computerscore").textContent = computer.name + " has " + computer.health + " health point(s) left.";
  document.getElementById("playerHealthStats").setAttribute("value", user.health);
  document.getElementById("enemyStats").setAttribute("value", computer.health);
  if (computer.health <= 0 && user.health > 0) {
    user.wins++;
    computer.health = 10;
    document.getElementById("rounds").textContent = "You have won " + user.wins + " round(s).";
    document.getElementById("playerWinCount").setAttribute("value", user.wins);
  } else if (user.health <= 0) {
      document.getElementById("gameplay").innerHTML = "Almighty Grant! beat you.";
  } else if (user.wins == 3) {
      document.getElementById("gameplay").innerHTML = "<h1>You won!</h1>";
    }
  };

var startHeal = document.getElementById("heal");
startHeal.onclick = function() {
  user.heal();
  user.healCount++;
  if (user.healCount <= 2) {
    document.getElementById("userscore").innerHTML = "You healed. </p><p>" + user.name + " has " + user.health + " health point(s).";
    document.getElementById("playerHealCount").setAttribute("value", user.healCount);
} else if (user.healCount > 2) {
    document.getElementById("heal").disabled = true;
    document.getElementById("heal").style.backgroundColor = "gray";
    document.getElementById("heals").innerHTML = "You're out of heals.";
}
};

var quitGame = document.getElementById("quit");
quitGame.onclick = function() {
  document.getElementById("gameplay").innerHTML = "That's a wrap.";
};
