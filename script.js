console.log('javascript connected');

// button functionality
document.getElementById('btn-login').addEventListener('click',function(event){
    event.preventDefault();
    console.log('button clicked');
    // console.log(event);

    const mobileNumber = 01991949385;
    const pinNumber = 9876;

    // console.log(mobileNumber);

    const inputNumber =  document.getElementById('mobile-number-input');
    // console.log(inputNumber.value);
    const inputPin = document.getElementById('pin-number-input');
    // console.log(inputPin.value);

    const inputNumberValue = inputNumber.value;
    const inputPinValue = inputPin.value;

    const inputNumberConverted = parseInt(inputNumberValue);
    console.log(inputNumberConverted);
    const inputPinValueConverted = parseInt(inputPinValue);
    console.log(inputPinValueConverted);

    if(inputNumberConverted === mobileNumber && inputPinValueConverted === pinNumber){
        window.location.href="./home-page.html";
    }
    else{
        console.log('wrong credentials');
    }
})