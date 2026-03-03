document.getElementById('add-money-btn')
    .addEventListener('click', function () {
        //  1.get the bank account
        const bankAccount = getValeFromInput("add-money-bank");
        if (bankAccount === "Select a Bank") {
            alert('Please select a bank');
            return;
        }
        // 2. get the account number and validate
        const accno = getValeFromInput("add-money-number");
        if (accno.length !== 11) {
            alert('Invalid Account Number');
            return;
        }
        // 3. get the amount , validate and convert to number
        const amount = getValeFromInput('add-money-amount');
        const currentBalance = getBalance();
        const newBalance = currentBalance + Number(amount);
        console.log(newBalance);

        // 4. get the pin and verify
        const pin = getValeFromInput('add-money-pin');
        if (pin === '1234') {
            // 5. true :: show an alert > set Balance to new Balance
            alert(`Money Added Successfully from ${bankAccount} at ${new Date().toLocaleTimeString()}`);
            setBalance(newBalance);

            // 1. history-container ke shore niye ashbo
            const history = document.getElementById('history-content');
            // 2. nwe div create korbo
            const newHistory = document.createElement('div');
            // 3. new div er innerHtml add korbo
            newHistory.innerHTML = `
                  <div class="transection-card p-5 bg-base-100">
                   Money Added Successfully from ${bankAccount}, acc-no: ${accno} amount: ${amount}at ${new Date().toLocaleTimeString()}
            </div>
            
            `;
            // 4. history container e newDiv append korbo
            history.appendChild(newHistory);

        }
        else {
            alert('Invalid PIN');
            return;
        }


    });
