'use strict'
const loginForm = document.querySelector('#login-form');
const dashboard = document.querySelector('#dashboard');
const orderBtn = document.querySelector("#order-btn");
const restaurantList = document.querySelector("#restaurant-list");
const deliverBtn = document.querySelector('#deliver-btn')
const mapD = document.querySelector('.mapD')

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;
  
  // TODO: Implement login logic here
  // If login is successful, set isLoggedIn to true
  const isLoggedIn = true;
  
  if (isLoggedIn) {
    loginForm.reset();
    loginForm.style.display = 'none';
    document.querySelector('#login-container').style.display = 'none';
    document.body.style.backgroundImage = "url('dashboardOUberEats.jpg')";

    dashboard.style.display = 'flex';
  }
});


const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', () => {
  // TODO: Implement logout logic here
  // If logout is successful, set isLoggedIn to false
  const isLoggedIn = false;
  
  if (!isLoggedIn) {
    document.querySelector('#login-container').style.display = 'flex';
    dashboard.style.display = 'none';
    loginForm.style.display = 'flex';
    document.body.style.backgroundImage = "url('loginpageOUberEats.jpg')";
  }
});

orderBtn.addEventListener("click",  function redirectToUrl() {
        window.location.href = "https://www.ou.edu/housingandfood/dining/restaurants-and-catering/restaurants";
  })
  // ///////////////////////////////////////////////
 
// const map = L.map('map').setView([51.505, -0.09], 13);

// var myMarker = L.marker([0, 0]).addTo(map);

// // ask the user for their location
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(function(position) {
//     // set the marker position to the user's coordinates
//     myMarker.setLatLng([position.coords.latitude, position.coords.longitude]);

//     // set the map view to the user's location
//     myMap.setView([position.coords.latitude, position.coords.longitude], 13);
//   });
// }

//   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);

const map = L.map('map').setView([51.505, -0.09], 13);

var myMarker = L.marker([0, 0]).addTo(map);

// ask the user for their location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
    // set the marker position to the user's coordinates
    myMarker.setLatLng([position.coords.latitude, position.coords.longitude]);

    // set the map view to the user's location
    map.setView([position.coords.latitude, position.coords.longitude], 13);
  }, function() {
    // if user denies access or location is unavailable, use IP address to get location
    fetch('https://ipapi.co/json/')
      .then(response => response.json())
      .then(data => {
        myMarker.setLatLng([data.latitude, data.longitude]);
        map.setView([data.latitude, data.longitude], 13);
      });
  });
}

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


 deliverBtn.addEventListener('click', function api() {
  // Get the user's current location
  dashboard.style.display = "none"
  mapD.style.display = "block"
})