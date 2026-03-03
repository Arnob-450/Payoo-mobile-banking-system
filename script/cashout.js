document.getElementById('cashout-btn')
    .addEventListener('click', function () {
        // 1. get the agent number and validate 
        const cashoutNumber= getValeFromInput('cashout-number');
        console.log(cashoutNumber);
        if (cashoutNumber.length !== 11 || cashoutNumber[0] !== '0') {
            alert('Invalid Agent Number');
            return;
        }
        // 2. get the amount , validate and convert to number
        const cashoutAmount = getValeFromInput('cashout-amount');
        console.log(cashoutAmount);
        if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
            alert('Invalid Amount');
            return;
        }

        // //  3. get the current Balance and validate ,convert to number
        // const balanceElement = document.getElementById('balance');
        // const balance = balanceElement.innerText;
        // console.log(balance);
        const currentBalance = getBalance();

        // 4. calculate new Balance
        const newBalance = currentBalance - Number(cashoutAmount);
        console.log(newBalance);
        if (newBalance < 0) {
            alert('Insufficient Balance');
            return;
        }
        // 5. get the pin and verify
        const Pin = getValeFromInput('cashout-pin');
        if (Pin === '1234') {
            // 6. true :: show an alert > set Balance to new Balance
            alert('Cashout Successful');
            setBalance(newBalance);

            // 1. history-container ke shore niye ashbo
            const history = document.getElementById('history-content');
            // 2. nwe div create korbo
            const newHistory = document.createElement('div');
            // 3. new div er innerHtml add korbo
            newHistory.innerHTML = `
                  <div class="transection-card p-5 bg-base-100">
                    CashOut ${cashoutAmount} TAKA successful from ${cashoutNumber},at ${new Date().toLocaleTimeString()}
            </div>
            
            `;
            // 4. history container e newDiv append korbo
            history.appendChild(newHistory);

        } else {
            alert('Invalid PIN');
        }
    });


// document.getElementById('cashout-btn')
//     .addEventListener('click', function () {
//         // 1. get the agent number and validate
//         const cashoutNumberInput = document.getElementById('cashout-number');
//         const cashoutNumber = cashoutNumberInput.value;
//         console.log(cashoutNumber);
//         if(cashoutNumber.length !== 11 || cashoutNumber[0] !== '0') {
//             alert('Invalid Agent Number');
//             return;
//         }
//         // 2. get the amount , validate and convert to number
//         const cashoutAmountInput = document.getElementById('cashout-amount');
//         const cashoutAmount = cashoutAmountInput.value;
//         console.log(cashoutAmount);
//         // const cashoutAmount = parseFloat(cashoutAmountString);
//         // console.log(cashoutAmount);
//         // 3. get the current Balance and validate ,convert to number
//         const balanceElement = document.getElementById('balance');
//         const balance = balanceElement.innerText;
//         console.log(balance);

//         // 4. calculate new Balance
//         const newBalance = Number(balance) - Number(cashoutAmount);

//         if (newBalance < 0) {
//             alert('Insufficient Balance');
//             return;
//         }
//         console.log(newBalance);
//         // 5. get the pin and verify
//         const cashoutPinInput = document.getElementById('cashout-pin');
//         const cashoutPin = cashoutPinInput.value;
//         console.log(cashoutPin);
//         const userPin = '1234';
//         if (cashoutPin === userPin) {
//             // 6. true :: show an alert > set Balance to new Balance

//             alert('Cashout Successful');
//             console.log('Cashout Successful');
//             balanceElement.innerText = newBalance;
//         }

//         // 7. false :: show error alert > return
//         else {
//             alert('invalid PIN');
//             return;
//         }
//     })