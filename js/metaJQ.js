// http://halloradio1.airtime.pro/api/live-info
//https://streamhalloradio.out.airtime.pro/streamhalloradio_a



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
                
                    timeOutId = setTimeout(ajaxFn, 10000); //set the timeout again
                    console.log("call"); //check if this is running
                    console.table(response.current); //check if this is running

                    // $.get(this.url);
                    // response.current = null;

                    if (response.current != null){

                        // console.log(test);
                        let name = "On Air";
                        

                        console.log(response.currentShow);
                        
                        if(response.currentShow.length != 0){
                            if(response.currentShow.name != ""){
                            name = response.currentShow[0].name;
                        }
                        }else if(response.current.type != "" && response.current != null){
                            name = response.current.type;
                        }

                        // response.currentShow[0].description
                        

                        document.getElementById("info_text").innerHTML = name + "<br>" ;
                            
                        // console.log(response.currentShow[0].name);
    
                        let insert = "<span class='dot'></span>" + " On Air " + "<span class='dot'></span> " + name + " <span class='dot'></span>" + " On Air " + "<span class='dot'></span>" + " Hallo:Radio ";
    
                        document.querySelector("#info_side_text").innerHTML = "<span id='first'>" + insert + "</span>" + "<span id='sec'>" + insert + "</span>";
    
                        document.querySelector("#info_side_text").style.animation = "marquee 25s linear infinite;";

                        reloadStylesheets();

                    } else {
    
                        document.getElementById("info_text").innerHTML = "Not on Air";
                    
    
                        let insert = "<span class='dot'></span>" + " Not On Air " + "<span class='dot'></span>" + " Not On Air " + "<span class='dot'></span>" + " Not On Air " + "<span class='dot'></span>" + " Not On Air ";
    
                        document.querySelector("#info_side_text").innerHTML = "<span id='first'>" + insert + "</span>" + "<span id='sec'>" + insert + "</span>";
    
                        document.querySelector("#info_side_text").style.animation = "none";
                    }
                }
            }
        });
    }
    ajaxFn(); //we CALL the function we stored 

    timeOutId = setTimeout(ajaxFn, 600000);

    function reloadStylesheets() {
        var queryString = '?reload=' + new Date().getTime();
        $('link[rel="stylesheet"]').each(function () {
            this.href = this.href.replace(/\?.*|$/, queryString);
        });
    }

}());