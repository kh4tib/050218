let body = document.querySelector("body");
let demo = document.getElementById("demo");
var y = window.scrollY;

window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 1920|| document.documentElement.scrollTop >  1920) {
        body.style.backgroundColor = "tomato";

    } else if (document.body.scrollTop < 960 || document.documentElement.scrollTop > 960) {
        body.style.backgroundColor = "blue";


    } else {
        body.style.backgroudColor = "blue";
    }
}

function count() {
    demo.innerHTML = "Vertically: " + y + "px";
}

count();