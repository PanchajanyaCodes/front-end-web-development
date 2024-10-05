// Changing Case.

/* var userName = "Panchajanya";
console.log(userName.toLowerCase());
console.log(userName.toUpperCase());
 */

var userName = prompt("Enter your name: ");
var firstLetter = userName.slice(0, 1).toUpperCase();
var remainingLetters = userName.slice(1);
console.log("Hello", firstLetter + remainingLetters);
