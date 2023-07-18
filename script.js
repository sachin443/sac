/* script.js */
const callButton = document.getElementById('callButton');

// Replace the phone number with the actual phone number you want to call
const phoneNumber = '8952977436';

callButton.addEventListener('click', function() {
    // Use the tel: protocol to initiate a phone call
    window.location.href = 'tel:' + phoneNumber;
});
