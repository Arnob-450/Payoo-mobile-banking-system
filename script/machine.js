console.log('Cashout Script Loaded');
// machine id->input value
function getValeFromInput(id) {
    const input= document.getElementById(id);
    const value = input.value;
    console.log(id, value);
    return value;
}
function getBalance() {
    const balanceElement = document.getElementById('balance');
    const balance = balanceElement.innerText;
    console.log("current balance:", balance);
    return Number(balance);
}

// machine value-> set Balance
function setBalance(value) {
     const balanceElement = document.getElementById('balance');
     balanceElement.innerText = value;
}

// machine id >hide all >show id
function showOnly(id) {
    console.log("show only", id);
    const addMoney = document.getElementById('add-money');
    const cashout = document.getElementById('cashout');
    const history = document.getElementById('history');
   
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    history.classList.add('hidden');
    
    const selected = document.getElementById(id);
    selected.classList.remove('hidden');
}