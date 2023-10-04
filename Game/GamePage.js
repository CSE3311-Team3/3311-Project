import { Email } from "./Email.js";

var testEmail;
const answers = new Map();
var QuestionNumber;

const TestQuestions = []; // This will contain all the test questions within a single play session

window.addEventListener('load', () => {
    document.getElementById("Phish_button").addEventListener("click", phishClick);
    document.getElementById("Real_button").addEventListener("click", realClick);
    document.getElementById("Next_button").addEventListener("click", nextClick);
    document.getElementById("Prev_button").addEventListener("click", prevClick);
    QuestionNumber = 1;
    document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
    createTestQuestions(TestQuestions);
    console.log(TestQuestions);
    document.getElementById("email_temp").setAttribute("src", TestQuestions[QuestionNumber - 1].getSource);
}) 

function createTestQuestions(TestQuestions){
    for(let i = 0; i < 10; i++){
        TestQuestions.push(new Email("Question" + i, "Sender" + i, i ));
    }
}

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
    if(dir === "prev") {
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
    
    //document.getElementById("Context").innerHTML = "Context for Question " + quest_num.toString() + " Email";
    document.getElementById("email_temp").setAttribute("src", TestQuestions[QuestionNumber - 1].getSource);
}