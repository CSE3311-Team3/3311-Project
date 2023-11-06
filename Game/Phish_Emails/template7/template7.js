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
    
	greet.innerHTML = "";
	body.innerHTML = "";
	salut.innerHTML = "";

	for(var i = 0; i < pics.length; i++) {
		pics[i].src = "images/prof_pics/sample_profpic.png";
	}

	sender.innerHTML = "_" + clues[2] + "_";
});
