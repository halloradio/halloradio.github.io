(function () {

    window.addEventListener('load', function () {

      // Steuerung des Audio Elements aber mit anderem button - durch id und angehängtem event listener wird das <audio> element getriggert
        let clickToPlay = document.querySelector('#songPlayPause');

        clickToPlay.addEventListener('click', function(){

            let activeSong = document.getElementById('song');
            button = document.getElementById('songPlayPause');


            //Audio Start/Stop und Button-wechsel 
            if (activeSong.paused) {
                activeSong.play();
                button.style.backgroundImage = "url(img/pause.svg)";
        
            } else {
                activeSong.pause();
                console.log("off");
                button.style.backgroundImage = "url(img/play.svg)";
            }
        });     
    });
}());