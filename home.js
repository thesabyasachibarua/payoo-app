console.log('home page connected');

const validAccountNumber = 01991949385;
const validPinNumber = 9876;

document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();
    const bankName = document.getElementById('bank').value;
    const bankAccountNum = parseInt(document.getElementById('bank-account-number').value);

    const addAmount = parseInt(document.getElementById('add-amount').value);

    const pinNumber = parseInt(document.getElementById('account-pin-number').value);

    // console.log(bankName,bankAccountNum,addAmount,pinNumber);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    // console.log(availableBalance);

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

// toggle system

document.getElementById('btn-cash-out').addEventListener('click',function(){
    document.getElementById('add-money-section').style.display = 'none';

    document.getElementById('cash-out-section').style.display = 'block';
})
document.getElementById('btn-adding-money').addEventListener('click',function(){
    document.getElementById('cash-out-section').style.display = 'none';

    document.getElementById('add-money-section').style.display = 'block';
})



// cash out/ cash withdraw feature

document.getElementById('btn-withdraw-money').addEventListener('click',function(event){
    event.preventDefault();
})
