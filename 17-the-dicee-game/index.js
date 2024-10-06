// Generating Random Numbers.
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Changing player 1 dice.
document
	.querySelector(".img1")
	.setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Changing player 2 dice.
document
	.querySelector(".img2")
	.setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Changing heading text according to the dices of both players.
if (randomNumber1 === randomNumber2) {
	document.querySelector("h1").textContent = "Draw!";
} else if (randomNumber1 > randomNumber2) {
	document.querySelector("h1").textContent = "Player 1 Wins!🚩";
} else {
	document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
