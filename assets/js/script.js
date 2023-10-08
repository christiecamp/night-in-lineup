// const start_btn = document.querySelector(".start_btn button");
// const details_box = document.querySelector("details_box");

// const next_btn = details_box.querySelector(".next_btn button");

//   make two functions for hiding and displaying our elements

// append our "night in" to a list by title

// create our nights in title and data points ex movie titles and restaurant recomendations

// on click of titled nights in in our "pick one segment" display its properties ex food movies.

// scroll box thingy for the night in data

// var geoApiKey = "AIzaSyDID4ej9YC2P8vUwpG-7MomaiOwMzJq9jk";
var restaurantAppend = document.getElementById("restaurantLocal");
var addressBox = document.getElementById("address");
var addressButton = document.getElementById("confirmButton");
function getApi(value) {
  var apiUrl =
    "https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDID4ej9YC2P8vUwpG-7MomaiOwMzJq9jk&address=";
  fetch(apiUrl + value)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data.results[0].geometry.location);
      initMap(data.results[0].geometry.location);
    });
}

function initMap(latLon) {
  var position = latLon;

  map = new google.maps.Map(document.getElementById("map"), {
    center: position,
    zoom: 15,
  });

  //   infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch(
    {
      location: position,
      radius: 1500, // meters
      openNow: true,
      type: ["restaurant"],
    },
    callback
  );
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      // console.log(results[i].name);

      localStorage.setItem("restaurants" + i, JSON.stringify(results[i].name));
      //   heres where you need to append and store to memory
    }
    // for (var i = 0; i < localStorage.length; i++) {
    //   var item = localStorage.getItem("restaurants" + i);
    //   restaurantAppend.append(item);
    // }
  }
}
addressButton.addEventListener("click", () => {
  getApi(addressBox.value);

  for (var i = 0; i < localStorage.length; i++) {
    var item = localStorage.getItem("restaurants" + i);
    restaurantAppend.append(item);
  }
  // for (var i = 0; i < localStorage.length; i++) {
  //   var item = localStorage.getItem("restaurants" + i);
  //   restaurantAppend.append(item);
  // }
  // localStorage.clear();
});

// function to append where we need if we need
// function appendLoc() {
//   for (var i = 0; i < localStorage.length; i++) {
//     var item = localStorage.getItem("restaurants" + i);
//     restaurantAppend.append(item);
//   }
// }
// appendLoc();
// check this out tomorrow....https://developers.google.com/maps/documentation/javascript/examples/geocoding-simple#maps_geocoding_simple-javascript

// returns restaurants near me
// just the names within 2 km
// if we need more we have to pass data again https://developers.google.com/maps/documentation/javascript/places#place_search_requests

// var map;
// var infowindow;

// function initMap() {
//   var position = { lat: 45.526532, lng: -122.656246 };

//   map = new google.maps.Map(document.getElementById("map"), {
//     center: position,
//     zoom: 15,
//   });

//   //   infowindow = new google.maps.InfoWindow();
//   var service = new google.maps.places.PlacesService(map);
//   service.nearbySearch(
//     {
//       location: position,
//       radius: 2000, // meters
//       openNow: true,
//       type: ["restaurant"],
//     },
//     callback
//   );
// }

// function callback(results, status) {
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       console.log(results[i].name);
//     }
//   }
// }
