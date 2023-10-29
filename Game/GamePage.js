import { Email } from "./Email.js";

var testEmail;

const answers = new Map();
var QuestionNumber;
var CurrentScore;

// This will contain all the test questions within a single play session
const TestQuestions = [];
// Using these arrays to keep track of which templates were used
var real_questions = [];
var phish_questions = [];


window.addEventListener('load', () => {
	QuestionNumber = 1;
	CurrentScore = 0;
	createTestQuestions(TestQuestions);
	// console.log(TestQuestions);
	// console.log(phish_questions);
	// console.log(real_questions);
	document.getElementById("email_temp").setAttribute("src", TestQuestions[QuestionNumber - 1].getSource);
	document.querySelector('iframe').onload = function(){
		sendQuestionToIframe();
	};    

	document.getElementById("Phish_button").addEventListener("click", phishClick);
	document.getElementById("Real_button").addEventListener("click", realClick);
	document.getElementById("Next_button").addEventListener("click", nextClick);
	document.getElementById("Prev_button").addEventListener("click", prevClick);
	document.getElementById("close_expl").addEventListener("click", closeExpl);
    document.getElementById("Explan_button").addEventListener("click", setExpl);
	document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
	document.getElementById("high_score").innerHTML = CurrentScore;
	document.getElementById("Context").innerHTML = TestQuestions[QuestionNumber - 1].getContext;
})  

// Creates the test questions
function createTestQuestions(TestQuestions){
	for(let i = 0; i < 10; i++){
		TestQuestions.push(new Email("Question" + i, "Sender" + i, phish_questions, real_questions));
	}
}

// Registers the 'Phish' button was clicked
function phishClick() {
	document.getElementById("ChoiceSelected").innerHTML = "Phish Button was selected.";
	setting_answer(false);
	buttonVisib();
}

// Registers the 'Real' button was clicked
function realClick() {
	document.getElementById("ChoiceSelected").innerHTML = "Real Button was selected.";
	setting_answer(true);
	buttonVisib();
}

// setting up the explanation pop-up after answer is chosen
function setExpl() {
	document.getElementById("explanation").style.display = "block";
	if(TestQuestions[QuestionNumber - 1].getPhish == answers.get(QuestionNumber)){
		document.getElementById("result").innerHTML = "Correct!";
		document.getElementById("result").style.color = "green";
	}
	else {
		document.getElementById("result").innerHTML = "Incorrect!";
		document.getElementById("result").style.color = "red";
	}
	document.getElementById("expl_txt").innerHTML = TestQuestions[QuestionNumber - 1].getExplanation;
}

function setting_answer(choice) {
	answers.set(QuestionNumber,choice);
	setExpl();
}

// Registers the 'Next' question button was clicked
function nextClick() {
	tracking_answer();
	updateQuestion("next");
	closeExpl();
}

// Registers the 'Prev' question button was clicked
function prevClick() {
	tracking_answer();
	updateQuestion("prev"); 
	closeExpl();         
}

function tracking_answer() {
	var quest_num = parseInt(document.getElementById("QuestionNumber").innerHTML);
	var answer = answers.get(quest_num);
	if(answer == false) {
		document.getElementById("ChoiceSelected").innerHTML = "Phish Button was selected.";
	}
	else if(answer == true) {
		document.getElementById("ChoiceSelected").innerHTML = "Real Button was selected.";
	}
	else {
		document.getElementById("ChoiceSelected").innerHTML = "";
	}
	checkAnswer();
}

// Updates the display question on the GamePage
function checkAnswer() {
	if(TestQuestions[QuestionNumber - 1].getPhish == answers.get(QuestionNumber)){
		CurrentScore += 1;
		document.getElementById("high_score").innerHTML = CurrentScore;
	}
}

// Makes the selection buttons invisible when user has already selected an answer
function buttonVisib() {
	if(answers.get(QuestionNumber) == undefined) {
		document.getElementById("Phish_button").style.display = "block";
		document.getElementById("Real_button").style.display = "block";
        document.getElementById("Explan_button").style.display = "none";

	}
	else {
		document.getElementById("Phish_button").style.display = "none";
		document.getElementById("Real_button").style.display = "none";
        document.getElementById("Explan_button").style.display = "block";
	}
}

function updateQuestion(dir) {
	if(dir === "next") {
		if(QuestionNumber == 10) {
			window.location.href = "../EndScreen/EndScreen.html";
		}
		else {
			QuestionNumber += 1;
			buttonVisib();
			document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
			if(QuestionNumber == 10) {
				document.getElementById("Next_button").innerHTML = "FINISH";
			}
		}        
	}
	else if(dir === "prev") {
		QuestionNumber -= 1;
		buttonVisib();
		document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
		if(QuestionNumber < 10) {
			document.getElementById("Next_button").innerHTML = "NEXT";
		}
	}
	if(QuestionNumber > 1) {
		document.getElementById("Prev_button").style.display = "block";
	}
	else {
		document.getElementById("Prev_button").style.display = "none";
	}
    
	document.getElementById("email_temp").setAttribute("src", TestQuestions[QuestionNumber - 1].getSource);
	document.getElementById("Context").innerHTML = TestQuestions[QuestionNumber - 1].getContext;
	document.querySelector('iframe').onload = function(){
		sendQuestionToIframe();
	};    
}

// closing the explanation box
function closeExpl() {
	document.getElementById("explanation").style.display = "none";
}

// Sends clues for the displayed question to the Iframe
function sendQuestionToIframe(){
	// console.log(origin);
	// console.log(QuestionNumber);
	// console.log(TestQuestions[QuestionNumber - 1].getSource);
	const iframe = document.querySelector("iframe");
	var cluez = TestQuestions[QuestionNumber - 1].getClues;
	iframe.contentWindow.postMessage(cluez, origin);
    
}