import { Email } from "./Email.js";

var QuestionNumber = 1;
var testEmail;

window.addEventListener('load', () => {
    const playerName = localStorage.getItem('playerName');
    document.getElementById("name").innerHTML = playerName;
    document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
    document.getElementById("Phish_button").addEventListener("click", phishClick);
    document.getElementById("Real_button").addEventListener("click", realClick);
    testEmail = new Email(playerName, "Any Sender");
    console.log(testEmail);
})

function phishClick() {
    updateQuestionCount();
    document.getElementById("ChoiceSelected").innerHTML = "Phish Button was selected()";
}

function realClick() {
    updateQuestionCount();
    document.getElementById("ChoiceSelected").innerHTML = "Real Button was selected()";
}

function updateQuestionCount() {
    if (QuestionNumber == 10) {
        window.location.href = "../EndScreen/EndScreen.html";
    }
    else {
        QuestionNumber += 1;
        document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
    }
}