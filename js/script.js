document.getElementById('login-button').addEventListener('click', function(e){
    e.preventDefault();
    
    const mobileNumber = document.getElementById('mobile-number').value;
    const mobileNumberConverted = parseInt(mobileNumber);

    const pinNumber = document.getElementById('pin-number').value;
    const pinNumberConverted = parseInt(pinNumber);

    const matchMobileNumber = 1234567890;
    const matchPinNumber = 1234;

    if(mobileNumberConverted === matchMobileNumber && pinNumberConverted === matchPinNumber){
        window.location.href = 'home.html';
    }
    else{
        alert('Invalid Password and Mobile Number');
    }
})