// Selecting elements by tag name (it returns an array).
document.getElementsByTagName("li")[2].style.color = "Goldenrod";

// Selecting elements by class name (it returns an array).
document.getElementsByClassName("btn")[0].style.backgroundColor = "pink";

// Selecting element by id name.
document.getElementById("title").style.fontSize = "4rem";

// querySelector() can select element using its name, id or class.
document.querySelector("h1").innerHTML = "Hello There!";

// Getting selected item using querySelector().
console.log(document.querySelector("a"));

// Getting first list item.
console.log(document.querySelector("li.item"));

// Getting all list item with the ".item" class inside the id "#list".
console.log(document.querySelectorAll("#list .item"));

// Changing color of the <a> tag inside the <li> element to "Green".
document.querySelector("li a").style.color = "green";
