
//Random Quote on open website

var quotes = [
    "Testing leads to failure, and failure leads to understanding.",
    "In some ways, programming is like painting. You start with a blank canvas and certain basic raw materials. You use a combination of science, art, and craft to determine what to do with them.",
    "The best error message is the one that never shows up.",
    "Programming isn't about what you know; it's about what you can figure out."
]

var authors = [
    "Burt Rutan",
    "Andrew Hunt",
    "Thomas Fuhcs",
    "Chris Pine"
]

function randomizeQuote() {

    var randomQuote = document.getElementById("randomQuote");
    var randomQuoteAuthor = document.getElementById("randomQuoteAuthor");

    var rand = Math.floor(Math.random() * quotes.length);
    var quote = quotes[rand];
    var author = authors[rand];
    console.log(quote);
    console.log(author);

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