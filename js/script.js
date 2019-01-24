window.onscroll = function() {myFunction()};
            
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
// NEW VERSION
function myFunction() {
  navbar.classList.toggle('sticky', window.pageYOffset >= sticky);
}


// OLD VERSION
/*
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
*/ 