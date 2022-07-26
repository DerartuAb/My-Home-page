let textarea = document.getElementById("textarea");

this.innerHTML = "";

for (let i = 0; i < Account.accountInfoList.length; i++) {
    textarea.innerHTML +=
        "Account name: " + Account.accountInfoList[i]['name'] + "," +
        "Balance: " + Account.accountInfoList[i].balance;
    console.log('Success');
}
