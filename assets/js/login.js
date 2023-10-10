
// const start_btn = document.querySelector(".start_btn button");
// const details_box = document.querySelector("details_box");


// const start_btn = document.querySelector (".start_btn button");
// const details_box = document.querySelector ("details_box");

// const next_btn = details_box.querySelector (".next_btn button")

// const start_btn = document.querySelector(".start_btn button");
// const details_box = document.querySelector("details_box");


// const next_btn = details_box.querySelector(".next_btn button");
// biggest container tied to user holds all nights in

var loginForm = document.getElementById("login-form");
var signupForm = document.getElementById("signup-form");
var usernameInput = document.querySelector(".username");
var passwordInput = document.querySelector(".password");
var signupUsernameInput = document.querySelector(".signup-username");
var signupPasswordInput = document.querySelector(".signup-password");
var loginButton = document.querySelector(".login-button");
var signupButton = document.querySelector(".signup-button");
var errorText = document.querySelector(".error-text");

// Signup logic
signupForm.addEventListener("submit", e => {
  e.preventDefault();

  var signupUsername = signupUsernameInput.value;
  var signupPassword = signupPasswordInput.value;

  // Validation (you can replace this with your own validation logic)
  if (signupUsername.length < 4) {
    errorText.textContent = "Username must be at least 4 characters long.";
    return;
  }

  if (signupPassword.length < 6) {
    errorText.textContent = "Password must be at least 6 characters long.";
    return;
  }

  // Check if the username already exists in local storage
  var existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
  var userExists = existingUsers.some(user => user.username === signupUsername);

  if (userExists) {
    errorText.textContent = "Username already exists. Please choose a different one.";
    errorText.style.color = "white";
    return;
  }

  // Create a new user and save it to local storage
  var newUser = { username: signupUsername, password: signupPassword };
  existingUsers.push(newUser);
  localStorage.setItem("users", JSON.stringify(existingUsers));

  // Clear previous error message, if any
  errorText.textContent = "";

  // Redirect or notify the user of successful signup
  window.location.href = "Main.html";
});

// Login logic
loginForm.addEventListener("submit", e => {
  e.preventDefault();

  var username = usernameInput.value;
  var password = passwordInput.value;

  // Add validation to check if username and password are not empty
  if (!username || !password) {
    errorText.textContent = "Username and password are required.";
    return;
  }

  // Check if the username and password match any user in local storage
  var existingUsers = JSON.parse(localStorage.getItem("users") || "[]");
  var user = existingUsers.find(user => user.username === username && user.password === password);

  if (user) {
    // Clear previous error message, if any
    errorText.textContent = "";

    // Redirect or notify the user of successful login
    window.location.href = "Main.html";
  } else {
    // Password is incorrect, display an error message
    errorText.textContent = "Incorrect username or password. Please try again.";
    errorText.style.color = "white";
  }
});

signupForm.addEventListener("submit", e => {
  e.preventDefault();

  var signupUsername = signupUsernameInput
});

