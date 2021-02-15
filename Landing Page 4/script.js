window.onload = function(){
    
    var map;

    function initialize(){
        var mapProp = {
            center: new google.maps.LatLng(-30.503022653161345, -53.49596285848035),
            scrollWheel:false,
            zoom:17,
        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp)

    }

    initialize();

}

