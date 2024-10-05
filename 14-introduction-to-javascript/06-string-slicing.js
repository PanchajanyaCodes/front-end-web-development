// String Slicing.

/* var userName = "Panchajanya";
console.log(userName.slice()); // Panchajanya
console.log(userName.slice(0, 1)); // P
console.log(userName.slice(-1)); // a
console.log(userName.slice()); // a
 */

var message = prompt("Type your message here (140 characters): ");
var typedChars = message.length;
alert(message.slice(0, 140));
