var clues;

// this eventListner is likely unnecessary, consider it deprecated
window.addEventListener('load', () => {
});
  
window.addEventListener('message', (event) => {
  
	clues = event.data;
	var greet = document.getElementById("greeting");
	var body = document.getElementById("message_body");
	var salut = document.getElementById("salutation");
	var pics = document.getElementsByClassName("prof_pic");
	var sender = document.getElementById("sender_name");
    
	if(clues[0]==0) {
		greet.innerHTML = "";
		body.innerHTML = "";
		salut.innerHTML = "";
		for(var i = 0; i < pics.length; i++) {
			pics[i].src = "images/prof_pics/female_profpic.png";
		}
		sender.innerHTML = "";
	}
	else if(clues[0]==1) {
		greet.innerHTML = "";
		body.innerHTML = "";
		salut.innerHTML = "";
		for(var i = 0; i < pics.length; i++) {
			pics[i].src = "images/prof_pics/male_profpic.png";
		}
		sender.innerHTML = "";
	}
});
