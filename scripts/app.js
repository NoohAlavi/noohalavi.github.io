"use strict"

//Sidebar

function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
}

window.onload = function() {
    console.log("This website is open sourced! You can find the code at https://noohalavi.github.io/source");
}