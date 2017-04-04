var colorArray = ["red", "green", "blue", "yellow", "purple", "darkorchid", "springgreen"];

var currentIndex = 0;

var intervalId;

var myNeonSign;

function startBG() {
    intervalId = setInterval(startMyNeon, 500);
}

function startMyNeon() {
    myNeonSign.style.backgroundColor = colorArray[currentIndex];
    currentIndex++;
    currentIndex %= colorArray.length;
}

var userColor;

function promptColor() {
    userColor = prompt("What color would You like to see?", "gold");
    myNeonSign.style.backgroundColor = userColor;
}

function stopBG() {
    clearInterval(intervalId);
}

//getting the elment after it's being rendered on HTML
document.addEventListener("DOMContentLoaded", function myFunction () {
    myNeonSign = document.getElementById("neonSign");
});
