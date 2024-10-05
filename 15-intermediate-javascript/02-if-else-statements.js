// Control Statements.

// if-else conditions.
var yourName = prompt("Enter your name: ");
var yourCrush = prompt("Enter your crush name: ");
var loveScore = Math.floor(Math.random() * 100) + 1;

if (loveScore === 100) {
	alert("Your love is " + loveScore + "%. You both are made for each other.");
} else {
	alert("Your love is " + loveScore + "%");
}
