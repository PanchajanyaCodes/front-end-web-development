// Fibonacci Sequence.

// Fibonacci Sequence.

var output = [0, 1];

while (output.length < 100) {
	var lastElement = output[output.length - 1];
	var secondLastElement = output[output.length - 2];
	var newElement = lastElement + secondLastElement;

	output.push(newElement);
	outputLength++;
}
console.log(output);
