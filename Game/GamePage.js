import { Email } from "./Email.js";

var testEmail;

window.addEventListener('load', () => {
    const playerName = localStorage.getItem('playerName');
    document.getElementById("name").innerHTML = playerName;
    document.getElementById("Phish_button").addEventListener("click", phishClick);
    document.getElementById("Real_button").addEventListener("click", realClick);
    testEmail = new Email(playerName, "Any Sender");
    console.log(testEmail);
}) 

const answers = new Map();

function phishClick() {
    document.getElementById("ChoiceSelected").innerHTML = "Phish Button was selected.";
    setting_answer('p');
}

function realClick() {
    document.getElementById("ChoiceSelected").innerHTML = "Real Button was selected.";
    setting_answer('r');
}

function setting_answer(choice) {
    var quest_num = parseInt(document.getElementById("QuestionNumber").innerHTML);
    answers.set(quest_num,choice);
}

function nextClick() {
    updateQuestion("next");
    tracking_answer();
}

function prevClick() {
    updateQuestion("prev");
    tracking_answer();          
}

function tracking_answer() {
    var quest_num = parseInt(document.getElementById("QuestionNumber").innerHTML);
    var answer = answers.get(quest_num);
    if(answer == 'p') {
        document.getElementById("ChoiceSelected").innerHTML = "Phish Button was selected.";
    }
    else if(answer == 'r') {
        document.getElementById("ChoiceSelected").innerHTML = "Real Button was selected.";
    }
    else {
        document.getElementById("ChoiceSelected").innerHTML = "";
    }
}

function updateQuestion(dir) {
    var quest_num = parseInt(document.getElementById("QuestionNumber").innerHTML);
    if(dir === "next") {
        quest_num = quest_num + 1;
        if(quest_num == 10) {
            document.getElementById("Next_button").innerHTML = "FINISH";
        }
        if(quest_num > 10) {
            window.location.href = "../EndScreen/EndScreen.html";
        }
    }
    if(dir === "prev") {
        quest_num = quest_num - 1;
        if(quest_num < 10) {
            document.getElementById("Next_button").innerHTML = "NEXT";
        }
    }
    if(quest_num > 1) {
        document.getElementById("Prev_button").style.display = "block";
    }
    else {
        document.getElementById("Prev_button").style.display = "none";
    }
    document.getElementById("QuestionNumber").innerHTML = quest_num.toString();
    document.getElementById("Context").innerHTML = "Context for Question " + quest_num.toString() + " Email";
    document.getElementById("Email").innerHTML = "Question " + quest_num.toString() + " Email Sample";
}