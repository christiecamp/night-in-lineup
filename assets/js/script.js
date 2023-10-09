// const start_btn = document.querySelector (".start_btn button");
// const details_box = document.querySelector ("details_box");

// const next_btn = details_box.querySelector (".next_btn button")


//login & set-up

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
pwShowHide.forEach(eyeIcon => {
  eyeIcon.addEventListener("click", () => {
    let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

    pwFields.forEach(password => {
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

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault(); // Preventing form submit
    form.classList.toggle("show-signup");
  });
});

loginForm.addEventListener("submit", e => {
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

signupForm.addEventListener("submit", e => {
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





// facebookOption.addEventListener("click", function (event) {
//   event.preventDefault();
//   window.location.href = "https://www.facebook.com/login"
// });
// googleOption.addEventListener("click", function(event) {
//   event.preventDefault();
//   window.location.href = "https://accounts.google.com/login"
// })

