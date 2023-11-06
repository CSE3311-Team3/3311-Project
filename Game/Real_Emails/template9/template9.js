var clues;

window.addEventListener('load', () => {});

window.addEventListener('message', (event) => {
	clues = event.data;
	var message = document.getElementById("message");
	var sender = document.getElementById("sender");
	document.getElementById("prof_pic").style.display = "none";

	if(clues[0] == 0) {
		message.innerHTML = "Urgent! " + clues[2] + "! This is a monthly test of the " + clues[2] + " system. There is NO"
        + " emergency. This is just a test.";
		sender.innerHTML = clues[3];
	}
	else {
		message.innerHTML = clues[1] + " is your " + clues[2] + " phone verification code. Enter it at " + clues[2].replace(/ /g,"").toLowerCase() + ".com" 
        + " or in the " + clues[2] + " app to verify your account.";
		sender.innerHTML = clues[3];
	}
});





