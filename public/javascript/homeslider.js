var myIndex = 0;
carousel();

function carousel() {
  var j;
  var x = document.getElementsByClassName("homeSlide");
  for (j = 0; j < x.length; j++) {
    x[j].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo").style.fontSize = "30px";
  } else {
    document.getElementById("logo").style.fontSize = "90px";
  }
}
