var map, infoWindow, pos;

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        initMap();
    })
} else {
    alert('No es posible obtener su ubicacion en este navegador');
}

function initMap() {
    var mapContainer = document.getElementById('map'),
        config = {
            center: { lat: 0, lng: 0 },
            zoom: 5
        }
    map = new google.maps.Map(mapContainer, config);
    debugger;
    infoWindow = new google.maps.InfoWindow({ map: map });
}

var button = document.getElementById('btn-geo');

button.addEventListener('click', function () {
    map.setCenter(pos);
    map.setZoom(15);
    infoWindow.setPosition(pos);
    infoWindow.setContent('usted esta aqui');
})