var clues;

window.addEventListener('load', () => {});

window.addEventListener('message', (event) => {
	clues = event.data;
	var message = document.getElementById("message");
	var sender = document.getElementById("sender");
	document.getElementById("prof_pic").style.display = "none";

	if(clues[0] == 0) {
		message.innerHTML = "Hello iPhone user! <br><br> Our company is selling the latest iPhone 15 Pro Max for only $150!! You can check out"
		+ " the link below to order yours now or reply with your credit card info (card number, cvv code, and four-digit pin) right here."
		+ "<br><br> <a href='' id='link'>bit8SEV983H3dsFs.ly</a>";
		sender.innerHTML = clues[1];
	}
	else if(clues[0] == 1) {
		message.innerHTML = "Attention!! <br><br> Your data is at risk of being compromised due to a recent data leak that occured on an email platform"
		+ " you use! <br><br> To help prevent your data from being leaked, you can reply with your email address and password so we can move your emails"
		+ " to a safer location.";
		sender.innerHTML = clues[1];
	}
});





