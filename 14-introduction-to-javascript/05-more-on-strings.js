// String length of string and Retrieving number of characters.

var message = prompt("Type your message here (140 characters): ");
var typedChars = message.length;
console.log(
	"You have typed",
	typedChars,
	"characters and you have",
	140 - typedChars,
	"characters remaining."
);
