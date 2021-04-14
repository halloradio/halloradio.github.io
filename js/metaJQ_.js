window.addEventListener('load', function () {
	//we store out timerIdhere
	var timeOutId = 0;
	//we define our function and STORE it in a var
	var ajaxFn = function () {
		$.ajax({
			url: 'https://streamhalloradio.airtime.pro/api/live-info',
			success: function (response) {
				if (response == 'True') { //YAYA
					clearTimeout(timeOutId); //stop the timeout
				} else {
					timeOutId = setTimeout(ajaxFn, 30000); //set the timeout again
					console.log("call"); //check if this is running
					console.table(response.current); //check if this is running

					// $.get(this.url);
					// response.current = null;
					// response = test;
					console.log(response);

					if (response.current != null || response.currentShow.length > 0) {
						let name = "On Air";


						if (response.currentShow.length != 0 && response.currentShow.length != null) {
							if (response.currentShow.name != "") {
								name = response.currentShow[0].name;
							}
						} else if (response.current.type != "" && response.current != null) {
							name = response.current.type;
						}
						// response.currentShow[0].description


						document.getElementById("info_text").innerHTML = name + "<br>";

						// console.log(response.currentShow[0].name);

						// let insert = name;

						// insert+=insert;

						// document.querySelector("#info_side_text").innerHTML = name;

						// document.querySelector("#info_side_text").style.animation = "marquee 25s linear infinite;";

						// reloadStylesheets();

					} else {

						document.getElementById("info_text").innerHTML = "NOT ON AIR";


						// let insert = "<span class='dot'></span>" + " NOT ON AIR " + "<span class='dot'></span>" + "  NOT ON AIR " + "<span class='dot'></span>" + " NOT ON AIR " + "<span class='dot'></span>" + " NOT ON AIR " + "<span class='dot'></span>" + " NOT ON AIR " + "<span class='dot'></span>" + " NOT ON AIR ";

						// document.querySelector("#info_side_text").innerHTML = "<span id='first'>" + insert + "</span>" + "<span id='sec'>" + insert + "</span>";

						// document.querySelector("#info_side_text").style.animation = "none";
					}
				}
			}
		});
	}


	$(document).ajaxComplete(function () {
		if ($('#infoText').length != 0) {
			$('#infoText').css('position', 'absolute');
		}
	});


	ajaxFn();

	timeOutId = setTimeout(ajaxFn, 30000);

	// function reloadStylesheets() {
	//     var queryString = '?reload=' + new Date().getTime();
	//     $('link[rel="stylesheet"]').each(function () {
	//         this.href = this.href.replace(/\?.*|$/, queryString);
	//     });
	// }

}());