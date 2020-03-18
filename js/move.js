(function () {

    window.addEventListener('load', function () {

        var elem = document.getElementById("info_side_rotate");
        var cln = elem.innerHTML;
        var infinite_p = document.createElement('p');
        
        infinite_p.className = "p_clone";
        infinite_p.innerHTML = cln;
        // var d1 = document.getElementById('one');
        console.log(infinite_p);

        elem.insertAdjacentElement.innerHTML += "<span>TESTETEST</span>"
        
        
        elem.insertAdjacentHTML.innerHTML = "TEST" + infinite_p.innerHTML;
        



    });



}());