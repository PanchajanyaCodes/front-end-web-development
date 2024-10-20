// Functions without names are known as anonymous functions.
// Higher Order functions are those functions that take another functions as argument or return functions.

// Buttons.
var buttons = document.querySelectorAll("button");

// Sounds.
var sounds = [
	"./sounds/crash.mp3",
	"./sounds/kick-bass.mp3",
	"./sounds/snare.mp3",
	"./sounds/tom-1.mp3",
	"./sounds/tom-2.mp3",
	"./sounds/tom-3.mp3",
	"./sounds/tom-4.mp3",
];

// Function to Play Sound.
function playSound() {
	var buttonText = this.textContent;
	makeSound(buttonText);
	buttonAnimation(buttonText);
}

// Looping through all buttons and adding event listener.
for (var i = 0; i < buttons.length; i++) {
	var button = buttons[i];
	button.addEventListener("click", playSound);
}

// Keypress event on the correct key press.
document.addEventListener("keypress", function (event) {
	makeSound(event.key);
	buttonAnimation(event.key);
});

// Make Sound.
function makeSound(key) {
	switch (key) {
		case "w":
			var crash = new Audio(sounds[0]);
			crash.play();
			break;
		case "a":
			var kick = new Audio(sounds[1]);
			kick.play();
			break;
		case "s":
			var snare = new Audio(sounds[2]);
			snare.play();
			break;
		case "d":
			var tom1 = new Audio(sounds[3]);
			tom1.play();
			break;
		case "j":
			var tom2 = new Audio(sounds[4]);
			tom2.play();
			break;
		case "k":
			var tom3 = new Audio(sounds[5]);
			tom3.play();
			break;
		case "l":
			var tom4 = new Audio(sounds[6]);
			tom4.play();
			break;
		default:
			console.log(buttonText);
	}
}

// Button Animation.
function buttonAnimation(currentKey) {
	var activeButton = document.querySelector("." + currentKey);
	activeButton.classList.add("pressed");
	setTimeout(function () {
		activeButton.classList.remove("pressed");
	}, 100);
}
