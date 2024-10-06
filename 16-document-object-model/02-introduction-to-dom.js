// Logs the first child element of the document, which is usually the <html> element.
console.log(document.firstElementChild);

// Logs the first child element of the <html> element, which is typically the <head> element.
console.log(document.firstElementChild.firstElementChild);

// Logs the first child element of the last child of the <html> element.
// The last child of <html> is usually the <body>, and the first child of <body> could be something like <h1>, <p>, etc.
console.log(document.firstElementChild.lastElementChild.firstElementChild);

// Stores the first child of the <body> element (which is an <h1> or similar tag) into a variable named 'heading'.
var heading = document.firstElementChild.lastElementChild.firstElementChild;

// Changes the inner content of the 'heading' element to "Welcome".
heading.innerHTML = "Welcome";

// Changes the color of the 'heading' element to "green".
heading.style.color = "green";

// Changing last <li> element text to "Hello World!"
document.querySelector("ul").lastElementChild.innerHTML = "Hello World!";
