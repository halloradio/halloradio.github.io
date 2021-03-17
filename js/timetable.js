
window.addEventListener('load', function () {

  var btn = document.getElementById("ttButton");

  document.getElementById("ttButton").classList.toggle("hello");

  btn.onclick = function() {   
    document.getElementById("wrapper").classList.toggle("translateUp");
    document.getElementById("ttButton").classList.toggle("turnaround");
    document.getElementById("menuBG").classList.toggle("translateDown");
    // document.querySelector('#menuBG').classList.toggle('');
    // document.getElementById("menu").classList.toggle("menuBG");
    // console.log(document.getElementsByClassName("menuBG"))
  }
});