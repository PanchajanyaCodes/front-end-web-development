// Outputs and Return Values.

function greetUser(userName) {
	return "Hello " + userName;
}

getMessage = greetUser(prompt("Enter your name: "));
alert(getMessage);
