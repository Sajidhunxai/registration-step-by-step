const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;



nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
const emailInput = document.querySelector('input[name="email"]');
const passwordInput = document.querySelector('input[name="password"]');
const errorEmail = document.querySelector('#error-email');
const errorPassword = document.querySelector('#error-password');


// Add event listeners to validate on input change
emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);

function validateEmail() {
  // Get the email input value
  const email = emailInput.value;

  // Check if the email is not empty and is valid using a regular expression
  if (email.trim() === '') {
    errorEmail.textContent = 'Email is required';
    emailInput.classList.add('invalid');
    return false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errorEmail.textContent = 'Email is not valid';
    emailInput.classList.add('invalid');
    return false;
  } else {
    errorEmail.textContent = '';
    emailInput.classList.remove('invalid');
    return true;
  }
}

function validatePassword() {
  // Get the password input value
  const password = passwordInput.value;

  // Check if the password is not empty and has at least 6 characters
  if (password.trim() === '') {
    errorPassword.textContent = 'Password is required';
    passwordInput.classList.add('invalid');
    return false;
  } else if (password.length < 6) {
    errorPassword.textContent = 'Password must have at least 6 characters';
    passwordInput.classList.add('invalid');
    return false;
  } else {
    errorPassword.textContent = '';
    passwordInput.classList.remove('invalid');
    return true;
  }
}

submitBtn.addEventListener('click', function(event){
  event.preventDefault();

  // Validate email and password
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password")

  const isValidEmail = validateEmail();
  const isValidPassword = validatePassword();

  // If both are valid, submit the form
  if (isValidEmail && isValidPassword) {
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
    setTimeout(function(){
      window.location.href = "confirmation.html?email=${emailInput.value}`";
      // alert("Your Form Successfully Signed up");
      // location.reload();

    },800);
  }
});


prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

// Get location from user's browser and fill in the location field

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, () => {
      // If location permission is not granted, set a default location
      const locationInput = document.getElementById("location");
      locationInput.value = "New York, NY";
    });
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Use a reverse geocoding API to get the user's location based on latitude and longitude
  const api_key = "c0ac371277bc48368babe34603a42022"; // Replace with your API key
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${api_key}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Fill in the location field with the user's location
      const locationInput = document.getElementById("location");
      locationInput.value = data.results[0].formatted;
    })
    .catch(error => console.log(error));
}

// Call the getLocation function when the DOM is loaded
document.addEventListener("DOMContentLoaded", getLocation);
// Validate the age field

// Generate the options for the age dropdown// Generate age options dynamically
const ageSelect = document.getElementById('age');
for (let i = 18; i <= 100; i++) {
  const option = document.createElement('option');
  option.value = i;
  option.text = i;
  ageSelect.appendChild(option);
}

// Age validation
const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  const age = document.getElementById('age').value;
  if (age < 18) {
    alert('You must be at least 18 years old to sign up.');
    event.preventDefault();
  }
});
nextBtnFirst.addEventListener('click', function(e) {
  e.preventDefault();

  // Check if an age has been selected
  if (document.querySelector('#age').value == '') {
    // If no age has been selected, show an error message
    document.querySelector('#error-age').textContent = 'Please select your age';
    return; // exit the function to prevent moving to the next step
  } else {
    // If an age has been selected, hide the error message and move to the next step
    event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  }
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();

  if (document.querySelector('#gender').value == '') {
    // If no age has been selected, show an error message
    document.querySelector('#error-gender').textContent = 'Please select your Gender';
    return; // exit the function to prevent moving to the next step
  } else {
    // If an age has been selected, hide the error message and move to the next step
    event.preventDefault();
    slidePage.style.marginLeft = "-50%";
    bullet[current - 1].classList.add("active");
    progressCheck[current - 1].classList.add("active");
    progressText[current - 1].classList.add("active");
    current += 1;
  }
 
});

// Get the email and password input fields

