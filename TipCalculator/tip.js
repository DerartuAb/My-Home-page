function calcTip() {

// Enter your code here to make Tip Calculator work
	const subtotal = document.getElementById("subtotal").value;
	const tip = document.getElementById("tip").value;

	const total = parseInt(subtotal)+parseInt(tip);

	document.getElementById("total").innerHTML = total;

}