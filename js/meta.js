// http://halloradio1.airtime.pro/api/live-info
//https://streamhalloradio.out.airtime.pro/streamhalloradio_a


(function () {

    window.addEventListener('load', function () {
        
        var timeOutId = 0;

        var xmlhttp = new XMLHttpRequest();

        xmlhttp.onreadystatechange = function () {
                    
            if (this.readyState == 4 && this.status == 200) {

                var myObj = JSON.parse(this.responseText);
                
                console.log(myObj);
               

                if (myObj.current != null) {

                    console.log(myObj.current);

                    document.getElementById("info_text").innerHTML = myObj.currentShow[0].name + "<br>" + myObj.currentShow[0].description;
                    console.log(myObj.currentShow[0].name);

                    let insert = "<span class='dot'></span>" + " On Air " + "<span class='dot'></span> " + myObj.currentShow[0].name + " <span class='dot'></span>" + " On Air " + "<span class='dot'></span>" + " Hallo:Radio ";

                    document.querySelector("#info_side_text").innerHTML = "<span id='first'>" + insert + "</span>" + "<span id='sec'>" + insert + "</span>";

                    document.querySelector("#info_side_text").style.animation = "marquee 25s linear infinite;";
                } else {

                    document.getElementById("info_text").innerHTML = "Not on Air";
                

                    let insert = "<span class='dot'></span>" + " Not On Air " + "<span class='dot'></span>" + " Not On Air " + "<span class='dot'></span>" + " Not On Air " + "<span class='dot'></span>" + " Not On Air ";

                    document.querySelector("#info_side_text").innerHTML = "<span id='first'>" + insert + "</span>" + "<span id='sec'>" + insert + "</span>";

                    document.querySelector("#info_side_text").style.animation = "none";

                }
            } else if (this.status === 400){
                console.log(this.status);
                // window.open("What");
            }


        };
        
        xmlhttp.open("GET", "https://streamhalloradio.airtime.pro/api/live-info", true);
        xmlhttp.send();


    });
}());