// Variables to store user and game patterns.
var userClickedPattern = [];
var gamePattern = [];

// Game is off.
var gameOn = false;

// Levels.
var level = 0;

// Array of button colors.
var buttonColors = ["red", "blue", "green", "yellow"];

// On keypress the game starts.
$(document).keypress(function () {
	if (!gameOn) {
		$("#level-title").text("Level " + level);
		nextSequence();
		gameOn = true;
	}
});

// Event listener for user click on buttons.
$(".btn").click(function (event) {
	var userChosenColor = event.target.id;
	userClickedPattern.push(userChosenColor);

	// Play the sound associated with the user's chosen color.
	playSound(userChosenColor);

	// Animate the user clicked color.
	animatePress(userChosenColor);

	// Checking answer.
	checkAnswer(userClickedPattern.length - 1);
});

// Function to randomly select boxes.
function nextSequence() {
	// Resetting the user clicked pattern.
	userClickedPattern = [];

	// Increasing level.
	level++;
	$("#level-title").text("Level " + level);

	var randomNumber = Math.floor(Math.random() * 4);
	var randomChosenColor = buttonColors[randomNumber];
	gamePattern.push(randomChosenColor);

	// Flashing effect on the randomly chosen color button.
	$("#" + randomChosenColor)
		.fadeIn(100)
		.fadeOut(100)
		.fadeIn(100);

	// Play the sound associated with the randomly chosen color.
	playSound(randomChosenColor);
}

// Function to play sound based on the color name.
function playSound(name) {
	var audio = new Audio("sounds/" + name + ".mp3");
	audio.play();
}

// Function to add the animation on the user clicked button.
function animatePress(currentColor) {
	$("#" + currentColor).addClass("pressed");

	// Remove 'pressed' class after 100 milliseconds.
	setTimeout(function () {
		$("#" + currentColor).removeClass("pressed");
	}, 100);
}

// Function to check answer
function checkAnswer(currentLevel) {
	if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		playSound("wrong");
		$("body").addClass("game-over");
		setTimeout(function () {
			$("body").removeClass("game-over");
		}, 200);
		$("h1").text("Game Over, Press Any Key to Restart");
		gameOn = false;
		startOver();
	}
}

// Function to restart the game.
function startOver() {
	level = 0;
	gamePattern = [];
}
