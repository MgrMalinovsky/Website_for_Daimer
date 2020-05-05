// Initialize and add the map
function initMap() {
    // The location of Uluru
    var company = {lat: 51.935480, lng: 15.506430};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 17, center: company});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: company, map: map});
}