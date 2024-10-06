// Getting all attributes of an element.
console.log(document.querySelector("a").attributes);

// Getting value of a specified attribute.
console.log(document.querySelector("a").getAttribute("href"));

// Changing value of the specified attribute.
document.querySelector("a").setAttribute("href", "https://www.bing.com");
document.querySelector("a").textContent = "Bing";
