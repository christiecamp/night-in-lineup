const start_btn = document.querySelector(".start_btn button");
const details_box = document.querySelector("details_box");

const next_btn = details_box.querySelector(".next_btn button");

// restaurant stuff
let restaurantArray = [];
var restaurantDisplay = document.getElementById("restaurantLocal");
var addressBox = document.getElementById("address");
var addressButton = document.getElementById("confirmButton");
// movie stuff
let movieArray = [];
var movieList = document.getElementById("movieList");
var movieButton = document.getElementById("movieButton");
// rapidapi request

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a29c1b9a85msh88864d9b5289dfbp1a2b09jsnb041e8531c7d",
    "X-RapidAPI-Host": "moviesdatabase.p.rapidapi.com",
  },
};
function movieApi() {
  const response = fetch(
    // set to random 15 from most popular
    "https://moviesdatabase.p.rapidapi.com/titles/random?limit=15&list=most_pop_movies",
    options
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < 15; i++) {
        movieArray.push(data.results[i].titleText.text);
        movieList.textContent = movieArray;
        console.log(movieArray[i]);
        // set movie array to display as an element text content someelement.textContent=movieArray
      }
    });
}
// geocode request
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
      // make the array and display it so user can choose.
      restaurantArray.push(results[i].name);
      restaurantDisplay.textContent = restaurantArray;
      //   localStorage.setItem("restaurants" + i, JSON.stringify(results[i].name));
      // }
      // for (var i = 0; i < localStorage.length; i++) {
      //   var item = [localStorage.getItem("restaurants" + i)];
      //   restaurantAppend.append(item + ", ");
      // }
    }
  }
}
// movie button works.
movieButton.addEventListener("click", () => {
  movieArray = [];
  movieApi();
});
// address button works
addressButton.addEventListener("click", () => {
  restaurantArray = [];
  getApi(addressBox.value);

  // localStorage.clear();

  // for (var i = 0; i < localStorage.length; i++) {
  //   var item = localStorage.getItem("restaurants" + i);
  //   restaurantAppend.append(item);
  // }
  // for (var i = 0; i < localStorage.length; i++) {
  //   var item = localStorage.getItem("restaurants" + i);
  //   restaurantAppend.append(item);
  // }
});

var pwShowHide = document.querySelectorAll(".eye-icon");
var links = document.querySelectorAll(".link");
var form = document.querySelector(".forms"); // Make sure this variable is consistent
var loginForm = document.getElementById("login-form");
var signupForm = document.getElementById("signup-form");
var usernameInput = document.querySelector(".username");
var passwordInput = document.querySelector(".password");
var signupUsernameInput = document.querySelector(".signup-username");
var signupPasswordInput = document.querySelector(".signup-password");
var loginButton = document.querySelector(".login-button");
var signupButton = document.querySelector(".signup-button");
var errorText = document.querySelector(".error-text");

// When the eye icon is clicked to toggle password visibility
pwShowHide.forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    let pwFields =
      eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach((password) => {
      if (password.type === "password") {
        password.type = "text";
        eyeIcon.classList.replace("bx-hide", "bx-show");
      } else {
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      }
    });
  });
});

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // Preventing form submit
    form.classList.toggle("show-signup");
  });
});

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = usernameInput.value;
  const password = passwordInput.value;

  // Simulate login validation (replace this with your own logic)
  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    // Password is correct, proceed with login
    localStorage.setItem("username", username);

    // Clear previous error message, if any
    errorText.textContent = "";

    // Redirect or perform other actions after successful login
    window.location.href = "dashboard.html"; // Change the URL as needed
  } else {
    // Password is incorrect, display an error message
    errorText.textContent = "Incorrect username or password. Please try again.";
  }
});

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();

  var signupUsername = signupUsernameInput.value;
  signupPassword = signupPasswordInput.value;

  // Implement your signup logic here
  // You can add validation, create user accounts, and handle errors

  // For example, you can save the signup data to local storage for simplicity
  localStorage.setItem("signupUsername", signupUsername);
  localStorage.setItem("signupPassword", signupPassword);

  // Clear previous error message, if any
  errorText.textContent = "";

  // Redirect or perform other actions after successful signup
  window.location.href = "dashboard.html"; // Change the URL as needed
});

facebookOption.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "https://www.facebook.com/login";
});
googleOption.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "https://accounts.google.com/login";
});
