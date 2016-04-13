;( function () {

    console.log('Hello');

    var map,markerOptions,marker;


    navigator.geolocation.getCurrentPosition( function (position) {
        var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
        var myOptions = {
            zoom: 18, /*拡大比率*/
            center: latlng, /*表示枠内の中心点*/
            mapTypeId: google.maps.MapTypeId.ROADMAP/*表示タイプの指定*/
        };

        map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);


        markerOptions = {
            position: latlng,
            map: map,
            title: '株式会社Lig'
        };
        marker = new google.maps.Marker(markerOptions);

    });

    navigator.geolocation.watchPosition( function (position) {

        var latlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);

        markerOptions = {
            position: latlng,
            map: map
        };
        marker = new google.maps.Marker(markerOptions);


    });



})();