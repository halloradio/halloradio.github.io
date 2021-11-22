// Get the modal

window.addEventListener('load', function () {

  // Get the button that opens the modal
  var modalOpen = document.getElementById("open-modal");

  var eventModal = document.querySelector(".event-modal");
  
  var close = document.querySelector(".close");
 
  


  modalOpen.onclick = function() { 
    // let isCal_or_Imp_open = document.querySelector() 
    eventModal.classList.toggle("show");   
  }

  close.onclick = function() {
    eventModal.classList.toggle("show");
  }

  // language button
  var btnLang = document.querySelector(".button-lang");
  
  btnLang.onclick = () => {
    document.querySelector(".german").classList.toggle("show");
    document.querySelector(".english").classList.toggle("show");

    document.querySelector(".event-modal").classList.toggle("bg-white") 
    
  }
});
