
window.onload = function () {
    console.log(window.localStorage);
    if (window.localStorage.accounts) {
        let textarea = document.getElementById("textarea");
        textarea.innerHTML = window.localStorage.accounts;
		localStorage.clear();
    }
}

class Account {

    static accountInfoList = [];

    constructor(name, amount) {
		
        this.name = name;
        this.balance = amount;
        Account.accountInfoList.push(this);

        // console.log("account is created" + " " + Account.accountInfoList.length);
    }

    static accountInfo() {
        let accounts = " ";

        for (let i = 0; i < Account.accountInfoList.length; i++) {
            accounts += "Account name: " + Account.accountInfoList[i]['name'] + ", "
                + "Balance: " + ", " + Account.accountInfoList[i].balance + "\n";
        }
        return accounts;

    }

    deposite(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        this.balance -= amount;
    }

}
