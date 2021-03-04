// Get the modal

window.addEventListener('load', function () {

  // var modal = document.getElementById("secondModal");

  // Get the button that opens the modal
  var btn = document.getElementById("xKanal");

  var modalClose = document.getElementById("xKanalModal");

  // Get the <span> element that closes the modal
  // var span_close = document.getElementsByClassName("close")[0];
 
 
  document.getElementById("xKanalModal").classList.toggle("show");
  document.getElementById("xKanal").classList.toggle("xActive");
  // xkanalImg


// modalClose.onClick = function(){
//   document.getElementById("xKanalModal").classList.toggle("show");
// }



  btn.onclick = function() {   
    document.getElementById("wrapper").classList.toggle("show");
   
    // document.getElementsByClassName(".xk").classList.toggle("xActive");
  }
  modalClose.onclick = function() {
    document.getElementById("xKanalModal").classList.toggle("show");
    document.getElementById("xKanal").classList.toggle("xActive");
  }
});