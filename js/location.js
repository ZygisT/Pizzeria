// Location Html Js to display the Google Maps

// Init Map
function initMap() {
    // Map Options
    var options = {
        zoom: 11,
        center: {lat: 40.758896, lng: -73.985130}
    };

    // New Map
    var map = new google.maps.Map(document.getElementById('map-container'), options);

    // Array of markers
    var markers = [
        {
            coords: {lat: 40.758896, lng: -73.985130},
            content: '<h1>Times Square, Manhattan, NY<h1>',
        },
        {
            coords: {lat: 40.696011, lng: -73.993286},
            content: '<h1>Brooklyn Heights, NY<h1>'
        }
    ];

    // Loop through markers
    for(var i = 0; i < markers.length;i++){
        // Add Marker
        addMarker(markers[i]);
    }

    // Add marker function
    function addMarker(props) {
        var marker = new google.maps.Marker({
            position: props.coords,
            map: map
        });

        // Check if the prop has the key

        if(props.content){
            var infoWindow = new google.maps.InfoWindow({
            content: props.content,
            hours: props.hours
        })

        // Add Listener and open marker

        marker.addListener('click', function(){
            infoWindow.open(map, marker);
        }) 
        }
    }
}