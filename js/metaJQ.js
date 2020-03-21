// http://halloradio1.airtime.pro/api/live-info
//https://streamhalloradio.out.airtime.pro/streamhalloradio_a

test = {
    "env": "production",
    "schedulerTime": "2020-03-20 16:34:00",
    "previous": {
        "starts": "2020-03-20 14:26:39.790600",
        "ends": "2020-03-20 14:30:26.000000",
        "type": "track",
        "name": "Labor - 200226.mp3",
        "metadata": {
            "id": 1,
            "name": "",
            "mime": "audio\/mp3",
            "ftype": "audioclip",
            "directory": null,
            "filepath": "200226.mp3",
            "import_status": 0,
            "currentlyaccessing": 0,
            "editedby": null,
            "mtime": "2020-03-18 17:58:48",
            "utime": "2020-03-18 17:58:19",
            "lptime": "2020-03-20 14:26:43",
            "md5": "a42752af0fdcb50157685f54e2bbe43f",
            "track_title": "200226.mp3",
            "artist_name": "Labor",
            "bit_rate": 320007,
            "sample_rate": 44100,
            "format": null,
            "length": "00:52:30.976871",
            "album_title": null,
            "genre": null,
            "comments": "",
            "year": null,
            "track_number": 0,
            "channels": 2,
            "url": null,
            "bpm": null,
            "rating": null,
            "encoded_by": null,
            "disc_number": null,
            "mood": null,
            "label": null,
            "composer": null,
            "encoder": null,
            "checksum": null,
            "lyrics": null,
            "orchestra": null,
            "conductor": null,
            "lyricist": null,
            "original_lyricist": null,
            "radio_station_name": null,
            "info_url": null,
            "artist_url": null,
            "audio_source_url": null,
            "radio_station_url": null,
            "buy_this_url": null,
            "isrc_number": null,
            "catalog_number": null,
            "original_artist": null,
            "copyright": null,
            "report_datetime": null,
            "report_location": null,
            "report_organization": null,
            "subject": null,
            "contributor": null,
            "language": null,
            "soundcloud_id": null,
            "soundcloud_error_code": null,
            "soundcloud_error_msg": null,
            "soundcloud_link_to_file": null,
            "soundcloud_upload_time": null,
            "replay_gain": "-5.08",
            "owner_id": 1,
            "cuein": "00:00:02.856259",
            "cueout": "00:52:21.127347",
            "hidden": false,
            "filesize": 126041915,
            "description": null,
            "cloud_file_id": 1,
            "file_artwork_id": null
        }
    },
    "current": null,
    "next": null,
    "currentShow": [
        {
            "start_timestamp": "2020-03-20 16:33:00",
            "end_timestamp": "2020-03-20 17:33:00",
            "name": "jqwoijd",
            "description": "ads",
            "id": 5,
            "instance_id": 5,
            "record": 0,
            "url": "",
            "image_path": "",
            "image_cloud_file_id": null,
            "auto_dj": false,
            "starts": "2020-03-20 16:33:00",
            "ends": "2020-03-20 17:33:00"
        }
    ],
    "nextShow": [

    ],
    "source_enabled": "Scheduled",
    "timezone": "Europe\/Berlin",
    "timezoneOffset": "3600",
    "AIRTIME_API_VERSION": "1.1"
}

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

                    timeOutId = setTimeout(ajaxFn, 900000); //set the timeout again
                    console.log("call"); //check if this is running
                    console.table(response.current); //check if this is running

                    // $.get(this.url);
                    // response.current = null;
                    // response = test;
                    console.log(response);

                    if (response.current != null || response.currentShow.length > 0) {

                        // console.log(test);

                        let name = "On Air";

                        if (test.currentShow != null) {
                            if (response.currentShow.length != 0 && response.currentShow.length != null) {
                                if (response.currentShow.name != "") {
                                    name = response.currentShow[0].name;
                                }
                            } else if (response.current.type != "" && response.current != null) {
                                name = response.current.type;
                            }
                        }
                        // response.currentShow[0].description


                        document.getElementById("info_text").innerHTML = name + "<br>";

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

    timeOutId = setTimeout(ajaxFn, 900000);

    function reloadStylesheets() {
        var queryString = '?reload=' + new Date().getTime();
        $('link[rel="stylesheet"]').each(function () {
            this.href = this.href.replace(/\?.*|$/, queryString);
        });
    }

}());