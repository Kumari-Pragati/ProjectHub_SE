document.addEventListener("DOMContentLoaded", function() {
    'use strict';
  
    // Get all the necessary elements from the DOM
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const cardDetails = document.querySelector('.card-details');
    const upiDetails = document.querySelector('.upi-details');
  
    // Function to hide all payment details
    function hideAllPaymentDetails() {
      cardDetails.style.display = 'none';
      upiDetails.style.display = 'none';
    }
  
    // Function to show payment details based on the selected payment method
    function showPaymentDetails(paymentMethod) {
      hideAllPaymentDetails();
      if (paymentMethod.value === 'card') {
        cardDetails.style.display = 'block';
      } else if (paymentMethod.value === 'upi') {
        upiDetails.style.display = 'block';
      }
    }
  
    // Add change event listeners to the payment method radio buttons
    paymentMethods.forEach(method => {
      method.addEventListener('change', function () {
        showPaymentDetails(method);
      });
    });
  
    // Initialize the form with the correct payment details displayed
    const checkedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked');
    showPaymentDetails(checkedPaymentMethod);
  });
  