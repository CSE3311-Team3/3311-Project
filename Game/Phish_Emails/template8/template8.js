var clues;

window.addEventListener('load', () => {});

window.addEventListener('message', (event) => {
	clues = event.data;
	var message = document.getElementById("message");
	var sender = document.getElementById("sender");
	document.getElementById("prof_pic").style.display = "none";

	if(clues[0] == 0) {
		message.innerHTML = "";
		sender.innerHTML = "";
	}
	else {
		message.innerHTML = "";
		sender.innerHTML = "";
	}
});





