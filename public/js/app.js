// document.addEventListener("DOMContentLoaded", function () {
//   // Add your JavaScript here.
// });
var colors = ["grey", "white"];

    var colorIndex = 0;
    function changeColor() {
        var col = document.getElementById("body");
        var header = document.getElementById("header");


        // if( colorIndex >= colors.length ) {
        //     colorIndex = 0;
        // }
        col.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode");


        // col.style.backgroundColor = colors[colorIndex];
        // colorIndex++;
    }

    function showNavBar(){
      // const mobileNav = document.getElementsByClassName("mobile-nav-bar")
      document.getElementById("mobile-nav-bar").style.display = "flex"
    }

    function closeNavBar(){
      // const mobileNav = document.getElementsByClassName("mobile-nav-bar")
      document.getElementById("mobile-nav-bar").style.display = "none"
    }