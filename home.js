console.log('home page connected');

const validAccountNumber = 01991949385;
const validPinNumber = 9876;

const alltransaction = [];

// reusable functions added:

// functions for accessing value from input converted to INT =>

    function valueAccess(id){

        const inputField = document.getElementById(id);
        const valueInputField = inputField.value;
        const intValueInputField = parseInt(valueInputField);

        return intValueInputField;

    }

    // toggle handle function

    function handleToggle(id){
        const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';
    }

    document.getElementById(id).style.display = 'block';
    }

    // toggle style handle function

    function toggleStyle(id){

        const buttonStyle = document.getElementsByClassName('btn-style');

        for(const btnStyle of buttonStyle){
            btnStyle.classList.remove('button-click-style');
        }

        document.getElementById(id).classList.add('button-click-style');
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

    const addedTransaction = {
        name: 'Add Money',
        date: new Date().toLocaleTimeString()
    }

    alltransaction.push(addedTransaction);
    // console.log(alltransaction);
    
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

    const addedTransaction = {
        name: 'Cash Out',
        date: new Date().toLocaleTimeString()
    }

    alltransaction.push(addedTransaction);
})

// transaction feature





// toggle system

document.getElementById('btn-cash-out').addEventListener('click',function(){
    // button color while clicked
    //  document.getElementById('btn-cash-out').classList.add('button-click-style');
    //  document.getElementById('btn-adding-money').classList.remove('button-click-style');

     toggleStyle('btn-cash-out');

    //  button toggle

    handleToggle('cash-out-section');



})
document.getElementById('btn-adding-money').addEventListener('click',function(){
    // button color while clicked

    toggleStyle('btn-adding-money')

    // button toggle

    handleToggle('add-money-section')
})

document.getElementById('btn-transfer-money').addEventListener('click',function(){
    toggleStyle('btn-transfer-money');

    handleToggle('transfer-money');
})

document.getElementById('btn-transaction').addEventListener('click',function(){
    toggleStyle('btn-transaction');
    handleToggle('transaction-money');

    document.getElementById('transaction-money').innerText = '';

    for(const data of alltransaction){

        const newElement = document.createElement('div');



        newElement.innerHTML = `
            <div class="flex justify-between items-center bg-white rounded-3xl ">
                <div class="flex justify-around items-center">
                    <img class=" m-3 rounded-full p-4 bg-[#F4F5F7]" src="./assets/wallet1.png" alt="">
                    <div>
                        <h1 class="text-[18px] font-bold">${data.name}</h1>
                        <p font-[400] text-[#08080880] text-[14px]>${data.date}</p>
                    </div>
                </div>
                <div>
                    <i class="fa-solid fa-ellipsis-vertical mr-4"></i>
                </div>
            </div>
            

        </div>
    `

    document.getElementById('transaction-money').appendChild(newElement); 

    }


})


