

window.addEventListener('load', function () {

  var btn = document.getElementById("impButton");

  btn.onclick = function() {   
    document.getElementById("impressum").classList.toggle("translateIn");
    document.getElementById("impButton").classList.toggle("turnaround");
    console.log("click Imporessum")
  }

  
});