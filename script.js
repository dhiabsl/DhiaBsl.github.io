window.onscroll = function() {myFunctionTwo()};

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
} 

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunctionTwo() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}