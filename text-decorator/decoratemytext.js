function decoration(){
	var font = parseInt(getComputedStyle(document.getElementById("textArea")).fontSize);
	var newFont = font+parseInt(2);
	document.getElementById("textArea").style.fontSize = newFont+"px";
}
 
function bling(){
 	// alert("mjydnshb")

 	document.getElementById("textArea").style.fontWeight ="bold";

 	if (document.getElementById("check").checked){
 		document.getElementById("textArea").style.fontWeight ="bold";
 		document.getElementById("textArea").style.color ="green";
 		document.getElementById("textArea").style.textDecoration  ="underline";
 		document.body.style.backgroundImage ="url('https://images.unsplash.com/photo-1564980398254-568631114fbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1349&q=80')";
 	}
 	

 	
 	else{
 		document.getElementById("textArea").style.fontWeight ="normal";

 		document.getElementById("textArea").style.color ="black";
 		document.getElementById("textArea").style.textDecoration  ="none";
 	}
 	}

 	

 	
	

 
