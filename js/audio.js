(function () {

    window.addEventListener('load', function () {

         var btn = document.getElementById("impButton");

         btn.onclick = function() {   
           document.getElementById("impressum").classList.toggle("translateIn");
           document.getElementById("impButton").classList.toggle("turnaround");
           console.log("click Imporessum")
         }

        /**
         * Video 
         */

        var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

        var sources = document.querySelectorAll('video#myVideo source');
        // Define the video object this source is contained inside
        var video = document.querySelector('video#myVideo');
        for (var i = 0; i < sources.length; i++) {
            sources[i].setAttribute('src', sources[i].getAttribute('data-src'));
        }
        // If for some reason we do want to load the video after, for desktop as opposed to mobile (I'd imagine), use videojs API to load

        if (w >= 767) {
            video.load();
        }

        /**
         * Audio
         */

        // Steuerung des Audio Elements aber mit anderem button - durch id und angehängtem event listener wird das <audio> element getriggert
        let clickToPlay = document.querySelector('#songPlayPause');

        clickToPlay.addEventListener('click', function () {

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