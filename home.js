console.log('home page connected');

const validAccountNumber = 01991949385;
const validPinNumber = 9876;

// reusable functions added:

// functions for accessing value from input converted to INT =>

    function valueAccess(id){

        const inputField = document.getElementById(id);
        const valueInputField = inputField.value;
        const intValueInputField = parseInt(valueInputField);

        return intValueInputField;

    }




document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const bankName = document.getElementById('bank').value;

    const bankAccountNum = valueAccess('bank-account-number');

    const addAmount = valueAccess('add-amount');

    const pinNumber = valueAccess('account-pin-number');

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

    if(bankAccountNum !== validAccountNumber){
        alert('Please provide valid Account Number');
        return;
    }

    if(pinNumber !== validPinNumber){
        alert('Please provide valid PIN number');
        return;
    }

    const newAddedBalance = addAmount + availableBalance;

    document.getElementById('available-balance').innerText = newAddedBalance;
})


//cash out feature

document.getElementById('btn-withdraw-money').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutAmount = valueAccess('withdraw-amount');

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);

//    validation

    const agentNumber = document.getElementById('agent-number').value;

    const pinNumber = valueAccess('account-pinnumber');

    if(agentNumber.length < 11){
        alert('Enter valid Agent Number');
        return;
    }

    if(pinNumber !== validPinNumber){
        alert('Please provide valid PIN number');
        return;
    }



    const newCashedOutBalance = availableBalance - cashOutAmount;

    document.getElementById('available-balance').innerText = newCashedOutBalance;


})



// toggle system

document.getElementById('btn-cash-out').addEventListener('click',function(){
    // button color while clicked
     document.getElementById('btn-cash-out').classList.add('button-click-style');

     document.getElementById('btn-adding-money').classList.remove('button-click-style');

    //  button toggle

    document.getElementById('add-money-section').style.display = 'none';

    document.getElementById('cash-out-section').style.display = 'block';
})
document.getElementById('btn-adding-money').addEventListener('click',function(){
    // button color while clicked
    document.getElementById('btn-adding-money').classList.add('button-click-style');

     document.getElementById('btn-cash-out').classList.remove('button-click-style');

    // button toggle

    document.getElementById('cash-out-section').style.display = 'none';

    document.getElementById('add-money-section').style.display = 'block';
})


