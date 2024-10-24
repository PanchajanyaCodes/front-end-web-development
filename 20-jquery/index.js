// Implementing jQuery.
jQuery("h1").css("color", "red");
$("h1").css("font-family", "cursive");

// Adding class.
$("button").addClass("btn margin");

// Removing class.
// $("button").removeClass("margin");

// Manipulating text.
$("h1").text("Hello World!");
$("h1").html("<em>Hello World!</em>");

// Manipulating attributes.
$("a").attr("href", "https://www.bing.com");

// Adding event listeners.
$("button").click(function () {
	$("h1").css("color", "purple");
});

$(document).keypress(function (event) {
	$("h1").text(event.key);
});

$(document).on("mouseover", function () {
	$("h1").css("color", "green");
});

// Adding and removing elements.
// Adding elements
$("h1").before("<button>Before</button>");
$("h1").after("<hr>");

// Removing elements
$("hr").remove();

// Adding Animations.
$("button").on("click", function () {
	// $("h1").fadeUp();
	// $("h1").fadeDown();
	// $("h1").fadeToggle();
	// $("h1").slideUp();
	// $("h1").slideDown();
	// $("h1").slideToggle();
	$("h1").animate({ margin: "10%" });
});
