import { Email } from "./Email.js";

var testEmail;
const answers = new Map();
var QuestionNumber;
var CurrentScore;

// This will contain all the test questions within a single play session
const TestQuestions = []; 

window.addEventListener('load', () => {
    document.getElementById("Phish_button").addEventListener("click", phishClick);
    document.getElementById("Real_button").addEventListener("click", realClick);
    document.getElementById("Next_button").addEventListener("click", nextClick);
    document.getElementById("Prev_button").addEventListener("click", prevClick);
    QuestionNumber = 1;
    CurrentScore = 0;
    document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
    createTestQuestions(TestQuestions);
    console.log(TestQuestions);
    document.getElementById("email_temp").setAttribute("src", TestQuestions[QuestionNumber - 1].getSource);
    document.getElementById("high_score").innerHTML = CurrentScore;

    document.querySelector('iframe').onload = function(){
        sendQuestionToIframe();
    };
})  



// Creates the test questions
function createTestQuestions(TestQuestions){
    for(let i = 0; i < 10; i++){
        TestQuestions.push(new Email("Question" + i, "Sender" + i, i ));
    }
}

// Registers the 'Phish' button was clicked
function phishClick() {
    document.getElementById("ChoiceSelected").innerHTML = "Phish Button was selected.";
    setting_answer(false);
}

// Registers the 'Real' button was clicked
function realClick() {
    document.getElementById("ChoiceSelected").innerHTML = "Real Button was selected.";
    setting_answer(true);
}

function setting_answer(choice) {
    answers.set(QuestionNumber,choice);
}

// Registers the 'Next' question button was clicked
function nextClick() {
    tracking_answer();
    updateQuestion("next");
}

// Registers the 'Prev' question button was clicked
function prevClick() {
    tracking_answer();
    updateQuestion("prev");          
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

function updateQuestion(dir) {
    if(dir === "next") {
        if(QuestionNumber == 10) {
            window.location.href = "../EndScreen/EndScreen.html";
        }
        else {
            QuestionNumber += 1;
            document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
            if(QuestionNumber == 10) {
                document.getElementById("Next_button").innerHTML = "FINISH";
            }
        }        
    }
    else if(dir === "prev") {
        QuestionNumber -= 1;
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
    sendQuestionToIframe();
}

// Sends clues for the displayed question to the Iframe
function sendQuestionToIframe(){
    const iframe = document.querySelector("iframe");
    var cluez = TestQuestions[QuestionNumber - 1].getClues
    iframe.contentWindow.postMessage(cluez, origin);
    
}