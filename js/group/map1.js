     // This example uses the autocomplete feature of the Google Places API.
      // It allows the user to find all hotels in a given place, within a given
      // country. It then displays markers for all the hotels returned,
      // with on-click details for each hotel.

      // This example requires the Places library. Include the libraries=places
      // parameter when you first load the API. For example:
      // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

      var map, places, infoWindow;
      var markers = [];
      var autocomplete;
      var countryRestrict = {'country': 'tw'};
      var MARKER_PATH = 'https://developers.google.com/maps/documentation/javascript/images/marker_green';
      var hostnameRegexp = new RegExp('^https?://.+?/');
      
      var venue_Lat=999;
      var venue_Lng=999;

      var countries = {
        'tw': {
          center: {lat: 23.705497, lng: 121.097366},
          zoom: 8
        }
      };

      function initMap() {
    	//window.navigator.geolocation.getCurrentPosition(function(pos) {showMap(pos.coords.latitude,pos.coords.longitude)});
    	  
    	  if (($("#myLat").attr('value')<900)&&(($("#myState").attr('value')!="0"))){
    			 venue_Lat=parseFloat($("#myLat").attr('value'));
    			 venue_Lng=parseFloat($("#myLng").attr('value'));
    			
    			showMap(venue_Lat,venue_Lng);
    				
    			}else{
    				$("#map").html('<img id="failMap" src="/CA101_G4/img/taiwanz.png">');
    				$("#failMap").css("height",$(".mapDiv").eq(0).css("height"));
    			}
      }
      function initMap2(){
 		 if ($("#myLat").attr('value')<900){
 			var center = {lat:  venue_Lat, lng: venue_Lng};
  			map = new google.maps.Map(document.getElementById('map'), {
	              zoom: 16,
	              center: center,
	              mapTypeControl: false,
	              panControl: false,
	              zoomControl: false,
	              streetViewControl: false
	            });

  	  	    var marker = new google.maps.Marker({
  		        position: center,
  		        map: map,
  		        draggable:true,
  		    });
  	  	    marker.addListener('dragend', function() {
  	  	    	map.setCenter(marker.getPosition());
  	            venue_Lat=marker.getPosition().lat();
  	            venue_Lng=marker.getPosition().lng();
  	  	    });
  			
 		 }else{
 			map = new google.maps.Map(document.getElementById('map'), {
 	              zoom: countries['tw'].zoom,
 	              center: countries['tw'].center,
 	              mapTypeControl: false,
 	              panControl: false,
 	              zoomControl: false,
 	              streetViewControl: false
 	            });
		}
          

            infoWindow = new google.maps.InfoWindow({
              content: document.getElementById('info-content')
            });

            // Create the autocomplete object and associate it with the UI input control.
            // Restrict the search to the default country, and to place type "cities".
            autocomplete = new google.maps.places.Autocomplete(
                /** @type {!HTMLInputElement} */ (
                    document.getElementById('autocomplete')), {
                  types: [],
                  componentRestrictions: countryRestrict
                });
            places = new google.maps.places.PlacesService(map);

            autocomplete.addListener('place_changed', onPlaceChanged);

            // Add a DOM event listener to react when the user selects a country.
      }
      
      function showMap(lati,long) {
    	    var center = {lat: lati, lng: long};
    	    var map = new google.maps.Map(document.getElementById('map'), {
    	        center: center,
    	        zoom: 16
    	    });
    	    var marker = new google.maps.Marker({
    	        position: center,
    	        map: map
    	    });
    	}

      
      

      // When the user selects a city, get the place details for the city and
      // zoom the map in on the city.
      function onPlaceChanged() {
        var place = autocomplete.getPlace();
        if (place.geometry) {
            clearResults();
            clearMarkers();
          map.panTo(place.geometry.location);
          map.setZoom(15);
          venue_Lat=place.geometry.location.lat();
          venue_Lng=place.geometry.location.lng();
  	    var center = {lat:  venue_Lat, lng: venue_Lng};
          
          
          
  	    var marker = new google.maps.Marker({
	        position: center,
	        map: map,
	        draggable:true,
	        
	    });
  	    marker.addListener('dragend', function() {
  	    	map.setCenter(marker.getPosition());
            venue_Lat=marker.getPosition().lat();
            venue_Lng=marker.getPosition().lng();
  	    });
          
          
        } else {
          document.getElementById('autocomplete').placeholder = '';
        }
      }

      

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i]) {
            markers[i].setMap(null);
          }
        }
        markers = [];
      }

      // Set the country restriction based on user input.
      // Also center and zoom the map on the given country.
      function setAutocompleteCountry() {
    	var country='tw';
          autocomplete.setComponentRestrictions({'country': country});
          map.setCenter(countries[country].center);
          map.setZoom(countries[country].zoom);
        
        clearResults();
        clearMarkers();
      }

      function clearResults() {
        var results = document.getElementById('results');
        while (results.childNodes[0]) {
          results.removeChild(results.childNodes[0]);
        }
      }

