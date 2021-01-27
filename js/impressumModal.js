// Get the modal

window.addEventListener('load', function () {

  var modal = document.getElementById("secondModal");

  // Get the button that opens the modal
  var btn = document.getElementById("btnImp");

  // Get the <span> element that closes the modal
  var span_close = document.getElementsByClassName("close")[0];



  btn.onclick = function() {   
    console.log("nabdwdkjandansdlkj")
    document.getElementById("secondModal").classList.toggle("show");

  }
  span_close.onclick = function() {
    document.getElementById("secondModal").classList.toggle("show");
  }
});