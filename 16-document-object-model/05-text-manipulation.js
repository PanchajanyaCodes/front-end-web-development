// textContent can only manipulate the text content inside an element.
console.log((document.querySelector("h1").textContent = "Bye Bye!"));

// innerHTML can manipulate the element and its text content.
console.log((document.querySelector("h1").innerHTML = "<i>Hello There!</i>"));
