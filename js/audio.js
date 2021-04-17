(function () {

    window.addEventListener('load', function () {

        var btn = document.getElementById("impButton");

        btn.onclick = function () {
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

        if (w >= 767) {
            video.load();
        }



        /**
         * Audio
         */

        // Steuerung des Audio Elements aber mit anderem button - durch id und angehängtem event listener wird das <audio> element getriggert
        let clickToPlay = document.querySelector('#songPlayPause');

        clickToPlay.addEventListener('click', function () {
            // let activeSong = document.getElementById('song');

            // let audiostream = document.getElementById('audio-stream');
            button = document.getElementById('songPlayPause');


            // var radiostream = document.getElementById('song');

            var radiostream = document.querySelector('#song');
            // var pausePromise = pause();
            // var playPromise = document.querySelector('#song').play();

            // button.classList.add("pause");
            // button.classList.toggle("turnaround");
            

            if(radiostream.paused){
                button.classList.toggle("pause");
                playOrPause(radiostream.load());
                playOrPause(radiostream.play());
                console.log("playpromise")
            }else{
                button.classList.toggle("pause");
                playOrPause(radiostream.pause());
                // radiostream.src = 'https://streamhalloradio.out.airtime.pro/streamhalloradio_a';
                console.log("else - paused")
            }
            
            function playOrPause(status) {
                if (status !== undefined) {
                    status.then(function () {
                        // Automatic playback started!
                    }).catch(function (error) {
                        console.log(error)
                        // Automatic playback failed.
                        // Show a UI element to let the user manually start playback.
                    });
                }
            }

           

            // if(radiostream.play){
            //     button.style.backgroundImage = "url(img/pause.svg)";
            //     audiostream.pause();
            //     audiostream.src = audiostream.src;
            //     console.log("if play", radiostream)
            // }else{
            //     radiostream.play();
            //     button.style.backgroundImage = "url(img/play.svg)";
            //     console.log("else play", radiostream)
            // }

            // console.log(radiostream.play())
            // console.log(audiostream)
            // // radiostream.play();
            // // audiostream.load();
            // // audiostream.play();




            // console.log(
            //     playing ? 
            // )
            // console.log(playing)
            //             if(!playing) {
            //                 console.log("play ",playing)
            //                 audiostream.src = '';
            //                 playing = false; 
            //                 console.log(activeSong)
            //                 // activeSong.pause();
            //                 // console.log("off");
            //                 button.style.backgroundImage = "url(img/play.svg)";
            //             } else {
            //                 playing = true;
            //                 console.log("emptyAudio")
            //                 oldSrc = audiostream.src;               
            //                 activeSong.play();
            //                 button.style.backgroundImage = "url(img/pause.svg)";
            //                 console.log("play ",playing)   
            //             }
        });
    });
}());