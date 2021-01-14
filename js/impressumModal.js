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
  
    // if(!open){
    //   modal.style.display = "block";
    //   open = false;
    // }else{
    //   modal.style.display = "none";
    //   open = true;
    // }
  }
// When the user clicks on the button, open the modal


// When the user clicks on <span> (x), close the modal
  span_close.onclick = function() {
    modal.style.display = "none";
  }
});