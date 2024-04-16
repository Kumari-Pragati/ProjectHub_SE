'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

document.addEventListener('DOMContentLoaded', function () {
  // Attempt to select the "Book Now" button
  const bookNowBtn = document.getElementById('book-now-btn');
  
  // Ensure the button exists before adding the event listener
  if (bookNowBtn) {
    bookNowBtn.addEventListener('click', function() {
      // Redirect to the payment page
      window.location.href = 'payment.html'; // Adjust the URL as necessary
    });
  }
});

document.querySelector('.btn-primary').addEventListener('click', function(e) {
  e.preventDefault();  // Prevent the default form submission
  window.location.href = 'payment.html'; // Force redirect
});
