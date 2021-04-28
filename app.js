
//Random Quote on open website

var quotes = [
    "Testing leads to failure, and failure leads to understanding.",
    "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
    "The best error message is the one that never shows up.",
    "Programming isn't about what you know; it's about what you can figure out.",
    "The only way to learn a new programming language is by writing programs in it.",
    "Simplicity is the soul of efficiency.",
    "Java is to JavaScript what car is to Carpet",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
]

var authors = [
    "Burt Rutan",
    "Andrew Hunt",
    "Thomas Fuhcs",
    "Chris Pine",
    "Dennis Ritchie",
    "Austin Freeman",
    "Chris Heilmann",
    "Martin Fowler"
]

function randomizeQuote() {

    var randomQuote = document.getElementById("randomQuote");
    var randomQuoteAuthor = document.getElementById("randomQuoteAuthor");

    var rand = Math.floor(Math.random() * quotes.length);
    var quote = quotes[rand];
    var author = authors[rand];

    randomQuote.innerHTML = `"${quote}"`;
    randomQuoteAuthor.innerHTML = `- ${author}`
}

//Sidebar

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

window.onload = function() {
    randomizeQuote();
}