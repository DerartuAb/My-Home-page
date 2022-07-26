
let createAccountBtn = document.getElementById("create-account-btn");

createAccountBtn.addEventListener('click', createAccount);

function createAccount() {

    let accName = document.getElementById("drop-down").value;
    let amount = document.getElementById("amount").value;


    new Account(accName, amount);
	
    if (window.localStorage.accounts) {
        let a = window.localStorage.accounts;
        let b = Account.accountInfo();
        a += b;
        window.localStorage.accounts = a;
    }
    else {
        window.localStorage.accounts = Account.accountInfo()

    }

}








