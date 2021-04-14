// url: 'https://streamhalloradio.airtime.pro/api/live-info',

window.addEventListener('load', function () {
	fetch('https://streamhalloradio.airtime.pro/api/live-info')
		.then(response => response.json())
		.then(data => {
			let infotext = document.getElementById('info_text');
			console.log(data)

			if (data.current != null || data.currentShow.length > 0 ) {
				console.log("currentshow.type:",data.currentShow.name)
				if (data.currentShow.length != 0 && data.currentShow.length != null) {
					if (data.currentShow.name != "") {
						infotext.innerHTML = data.currentShow[0].name;
						console.log("currentshow.name:",data.currentShow.name)
					}
					
				} else if (data.current.type != "" && data.current != null) {
					console.log("currentshow.type:",data.current.type)
					infotext.innerHTML = data.current.type;
				}
			}
				else {
					infotext.innerHTML = "Not on Air";
				}
		})
		.catch(err => {
			console.log(err)
		});
}());