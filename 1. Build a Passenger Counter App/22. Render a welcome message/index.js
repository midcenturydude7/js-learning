// Grab the welcome-el paragraph and store it in a variable called welcomeEl
let welcomeEl = document.getElementById("welcome-el");

// Create two variables (name & greeting) that contains your name
let myName = "Matt Griffes";
let greeting = "Welcome back! It's great to see you again, ";

// and the greeting we want to render on the page
let welcomeMessage = greeting + myName;

// Render the welcome message using welcomeEl.innerText
welcomeEl.innerText = welcomeMessage;
