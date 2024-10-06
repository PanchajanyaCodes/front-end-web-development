// Changing color and background color of the <h1> element.
document.querySelector("h1").style.color = "Goldenrod";
document.querySelector("h1").style.backgroundColor = "whitesmoke";

// Changing background color of the <button> element.
document.querySelector("button").style.backgroundColor = "yellow";

// Getting all classes of the <button> element.
console.log(document.querySelector("button").classList);

// Adding another class to the <button> element.
document.querySelector("button").classList.add("invisible");
console.log(document.querySelector("button").classList);

// Removing class to the <button> element.
document.querySelector("button").classList.remove("invisible");
console.log(document.querySelector("button").classList);

// Toggling classes in an element.
document.querySelector("button").classList.toggle("invisible");
document.querySelector("button").classList.toggle("invisible");

// Adding "huge" class to <h1> element.
document.querySelector("h1").classList.add("huge");
console.log(document.querySelector("h1").classList);
