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
		greet.innerHTML = "Hey " + localStorage.getItem('user-name') + "!";
		body.innerHTML = "My name's " + clues[1] + " and I'm starting a new cryptocurrency that can potentially earn you up"
		+ " to " + clues[3] + " dollars a day!! And you can sign up to be one of the first to have access to buy it! I just need your"
		+ " banking information (account number and routing number) along with your social security number. Then I can add"
		+ " you to the list of priority buyers.";
		salut.innerHTML = "Don't miss out on this exclusive opportunity! Spots are filling up quickly!!";
		for(var i = 0; i < pics.length; i++) {
			pics[i].src = "images/prof_pics/" + clues[2] + "_profpic.png";
		}
		sender.innerHTML = "_" + clues[1] + "542__";
	}
	else if(clues[0] == 1) {
		greet.innerHTML = "Hey " + localStorage.getItem('user-name') + "!";
		body.innerHTML = "I can get you any exclusive/designer items you want, even ones that haven't come out yet! " 
		+ "Just send me a $" + clues[2] + " deposit via CashApp and I can get you whatever item you request ASAP! My CashApp is '" + clues[1] 
		+ "' which is the same as my username without the underscores." ;
		salut.innerHTML = "Hurry because merchandise runs out fast!";
		for(var i = 0; i < pics.length; i++) {
			pics[i].src = "images/prof_pics/male_profpic.png";
		}
		sender.innerHTML = "__"+ clues[1];
	}
});
