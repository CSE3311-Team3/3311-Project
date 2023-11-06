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
    
	greet.innerHTML = clues[0] + " Playername! " + "This is " + clues[1] + " from the " + clues[2] + " shop here on Instagram.";
	body.innerHTML = "We are having our annual blowout sale next " + clues[3] + " where all merchandise will be " + clues[4] 
  + " percent off or more! Come check us out at @_" + clues[2] + "_ and make sure to follow if you like what you see!";
	salut.innerHTML = "Have a great rest of your day!";

	for(var i = 0; i < pics.length; i++) {
		pics[i].src = "images/prof_pics/sample_profpic.png";
	}

	sender.innerHTML = "_" + clues[2] + "_";
});
