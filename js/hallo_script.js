// Get the modal
	var modal = document.getElementById("myModal");
	var modal2 = document.getElementById("secondModal")
	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	var span_close = document.getElementsByClassName("close")[0];
	var span_close_2 = document.getElementsByClassName("close_2")[0];
	window.onload=function() {    
		console.log("Error") 
	  //bind the click to '.open_button' here
	  /* trigger click not bind */
	 modal.style.display = "block";
	 modal2.style.display = "block";
	}
	// When the user clicks on the button, open the modal
	
	
	// When the user clicks on <span> (x), close the modal
	span_close.onclick = function() {
	  modal.style.display = "none";
	}
	span_close_2.onclick = function() {
	// console.log("Hallo");
	  modal2.style.display = "none";
	}