/*******************************************

        DARKMODE by Sander Hellesø
                14.05.2018

    Style entire page dark, then revert

******************************************/

var textColor;
var backgroundColor:
window.onload = start;
function start() {

    // initialize darkmode trigger, eplace trigger with your own trigger element
    document.getElementById("trigger").addEventListener("click", darkMode);

    // to change colors, replace the following color codes with your own
    textColor = "#9e9e9e";
    backgroundColor = "#212121";
}

function darkMode() {
    // init clearDarkMode
    this.removeEventListener("click", darkMode);
    this.addEventListener("click", clearDarkMode);

    // set body as dark
    const body = document.getElementById("body");
    body.style.backgroundColor = backgroundColor;

    // get all elements on the page
    document.querySelectorAll("*").forEach(function(node) {

        // text elements
        let text = node.querySelectorAll("h1, h2, h3, h4, h5, h6, p, a, span");
        text.forEach(function(ele) {
            ele.style.color = textColor;
            darkEles.push(ele);
        });

        // containers
        let containers = node.querySelectorAll("header, section, main, footer, div, nav, a, button");
        containers.forEach(function(ele) {
            ele.style.backgroundColor = backgroundColor;
            darkEles.push(ele);
        });
    });
}

var darkEles = [];
function clearDarkMode() {

    // init darkMode
    this.removeEventListener("click", clearDarkMode);
    this.addEventListener("click", darkMode);

    // revert changed elements
    darkEles.forEach(function(ele) {
        ele.style.removeProperty("color");
        ele.style.removeProperty("background-color");
    });

    // revert body
    const body = document.getElementById("body");
    body.style.removeProperty("background-color");

    // reset array containing changed elements
    darkEles = [];
}