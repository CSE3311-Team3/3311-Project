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
    
	if(clues[0] == 0) {
		greet.innerHTML = clues[1] + " " + localStorage.getItem('user-name') + "! This is " + clues[2] + " from the " + clues[3] + " shop here on Instagram.";
		body.innerHTML = "We are having our annual blowout sale next " + clues[4] + " where all merchandise will be " + clues[5] 
		+ " percent off or more! Come check us out at @_" + clues[3] + "_ and make sure to follow if you like what you see!";
		salut.innerHTML = "Have a great rest of your day!";
		for(var i = 0; i < pics.length; i++) {
			pics[i].src = "images/prof_pics/female_profpic.png";
		}
		sender.innerHTML = "_" + clues[2] + "_";
	}
	else if(clues[0] == 1) {
		greet.innerHTML = "Hey there " + localStorage.getItem('user-name') + "! My name's " + clues[1] + ", and I'm a " + clues[2] + " music producer for "
		+ clues[3] + " Records.";
		body.innerHTML = "I see that you're an aspiring " + clues[2] + " music artist, and I listened to a couple of the music samples you posted on your page." 
		+ " I really enjoyed your song called '" + clues[4] + "' and thought the melodies you used on the chorus and bridge were really impressive. I had never heard"
		+ " anything like that before, and I was wondering if you'd like to work with " + clues[3] + " Records to develop your sound and take it to the next level!"
		+ " We have a highly sought out program for up-and-coming artists that we would like you to be a part of."
		+ " Let me know if you'd be interested by replying to this DM and I can send you more info. ";
		salut.innerHTML = "Hope to hear from you soon!";
		for(var i = 0; i < pics.length; i++) {
			pics[i].src = "images/prof_pics/male_profpic.png";
		}
		sender.innerHTML = clues[1] + "_" + clues[3];
	}
});
