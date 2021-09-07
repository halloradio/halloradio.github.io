// url: 'https://streamhalloradio.airtime.pro/api/live-info',

window.addEventListener('load', function () {	
	
	fetchLiveInfo()
			.then(data => {
				setStatus(handleInfo(data));
			})
			.catch(err => {
				infotext.innerHTML = "Error loading";
				console.log("erororor" ,err)
			})
	
		
	}());
	
	setInterval( () => {
		fetchLiveInfo()
			.then(data => {
				setStatus(handleInfo(data));
			})
			.catch(err => {
				infotext.innerHTML = "Error loading";
				console.log("erororor" ,err)
			})
		
	}
		, 15000);


function handleInfo(info) {
	/** is Online */
	if (info.current != null || info.currentShow.length > 0 ) {
		/**  */
		if (info.currentShow.length != 0 && info.currentShow.length != null) {
			/** has name for the show */
			if (info.currentShow.name != "") {
				return info.currentShow[0].name;
			}
		/** Liveshow whithout name */
		}else if (info.current.type != "" && info.current != null) {
			return info.current.type;
		}
	}
	return 'Not on Air';
}

function setStatus(status){
	let infotext = document.getElementById('info_text');
	return infotext.innerHTML = status;
}


async function fetchLiveInfo() {
	const res = await fetch('https://halloradi0.airtime.pro/api/live-info');

	if (!res.ok) {
		const message = `An error has occured: ${res.status}`;
		throw new Error(message);
	}

	const info = await res.json();
	// console.log(info)
	return info;
}