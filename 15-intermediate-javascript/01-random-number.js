// Random Number Generation.

// Math.random() function generates a number between 0 (included) to 1 (excluded).
var randomNumber = Math.random();
console.log(randomNumber);

// Random Love Score Calculator.
var yourName = prompt("Enter your name: ");
var yourCrush = prompt("Enter your crush name: ");
var loveScore = Math.floor(Math.random() * 100) + 1;
alert("Your love is " + loveScore + "%");
