var map;
var markers = [];

      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 24.9679047, lng: 121.1917819},
          zoom: 15
        });
        var marker = new google.maps.Marker({position: {lat: 24.9679047, lng: 121.1917819}, map: map});
        markers.push(marker);
      }
      
      function addMarker(lat, lng){
    	  var marker = new google.maps.Marker({position: {lat: lat, lng: lng}, map: map});
    	  map.panTo(marker.getPosition());
    	  markers.push(marker);
      }
      
      function addClusterMarker(spotArr) {

    	  map = new google.maps.Map(document.getElementById('map'), {
              center: {lat: 24.9679047, lng: 121.1917819},
              zoom: 15
            });
    	  
    	  var marker = new google.maps.Marker({position: {lat: 24.9679047, lng: 121.1917819}, map: map});
    	  markers.push(marker);
    	  
          var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

          markers = spotArr.map(function(location, i) {
            return new google.maps.Marker({
              position: location,
              label: labels[i % labels.length]
            });
          });
          
          var markerCluster = new MarkerClusterer(map, markers,
              {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
        }
        
      function addSpotTravel(spots){
    	  
    	  var directionsDisplay = new google.maps.DirectionsRenderer({
    		  polylineOptions: {
    		      strokeColor: "red"
    		    }
    	  });
          var directionsService = new google.maps.DirectionsService;
          
          directionsDisplay.setMap(map);
          calculateAndDisplayRoute(directionsService, directionsDisplay, spots);
      }
      
      function calculateAndDisplayRoute(directionsService, directionsDisplay, spots) {
          directionsService.route({
            origin: spots[0],  
            destination: spots[1], 
            travelMode: 'DRIVING'
          }, function(response, status) {
            if (status == 'OK') {
              directionsDisplay.setDirections(response);
            } else {
              window.alert('Directions request failed due to ' + status);
            }
          });
       }
      
      function setMapOnAll(map) {
    	  for (var i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
          }
      }
      
      function clearMarkers() {
          setMapOnAll(null);
      }

      function showMarkers() {
    	  setMapOnAll(map);
      }

      function deleteMarkers() {
    	  clearMarkers();
    	  markers = [];
      }
