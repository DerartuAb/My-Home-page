let withdraw = document.getElementById("withdraw");
withdraw.onclick = withdraw;

let deposite = document.getElementById("deposite");
deposite.onclick = deposite;

function withdraw() {

    let account = document.getElementById("drop-down").value;
    let amount = document.getElementById("amount");

    for (let i = 0; i < Account.accountInfoList.length; i++) {
        if (account == accountInfoList[i].name) {
            accountInfoList[i].withdraw(amount);
        }
    }
}

function deposite() {
    let account = document.getElementById("drop-down").value;
    let amount = document.getElementById("amount");

    for (let i = 0; i < Account.accountInfoList.length; i++) {
        if (account == accountInfoList[i].name) {
            accountInfoList[i].deposite(amount);
        }
    }
}