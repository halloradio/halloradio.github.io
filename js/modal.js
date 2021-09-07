// Get the modal

window.addEventListener('load', function () {

  // Get the button that opens the modal
  var modalOpen = document.getElementById("open-modal");

  var modalClose = document.getElementById("event-modal");

  modalOpen.onclick = function() { 
    document.getElementById("event-modal").classList.toggle("show");   
  }

  modalClose.onclick = function() {
    document.getElementById("event-modal").classList.toggle("show");
  }
});