// When the user scrolls the page, execute myFunction

window.addEventListener('load', function () {

    var header = document.getElementById("wrap_marq");


header.onscroll = function() {myFunction()};

// Get the header

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    console.log(scroll)

  if (window.pageYOffset > sticky) {
      console.log(scroll)
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 
});
