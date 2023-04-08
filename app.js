'use strict'
// app.js
// app.js

const loginForm = document.querySelector('#login-form');
const dashboard = document.querySelector('#dashboard');

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
    dashboard.style.display = 'flex';
  }
});

const logoutBtn = document.querySelector('#logout-btn');

logoutBtn.addEventListener('click', () => {
  // TODO: Implement logout logic here
  // If logout is successful, set isLoggedIn to false
  const isLoggedIn = false;
  
  if (!isLoggedIn) {
    dashboard.style.display = 'none';
    loginForm.style.display = 'flex';
  }
});
