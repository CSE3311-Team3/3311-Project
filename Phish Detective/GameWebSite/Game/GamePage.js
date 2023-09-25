import { Email } from "./Email.js";

var QuestionNumber = 1;
var testEmail;

const TestQuestions = [];


window.addEventListener('load', () => {
    const playerName = localStorage.getItem('playerName');
    document.getElementById("name").innerHTML = playerName;
    document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
    document.getElementById("Phish_button").addEventListener("click", phishClick);
    document.getElementById("Real_button").addEventListener("click", realClick);
    testEmail = new Email(playerName, "Any Sender");
    createTestQuestions(TestQuestions, playerName);
    checkWhichEmailtoDisplay();
    console.log(testEmail);
    console.log(TestQuestions);
})

function createTestQuestions(TestQuestions, playerName) {
    for (let i = 0; i < 10; i++) {
        TestQuestions.push(new Email(playerName, "Sender " + i, i));
    }
}

function checkWhichEmailtoDisplay() {
    if (QuestionNumber % 2 == 0) {
        document.getElementById("testFrame1").setAttribute('hidden', 'hidden');
        document.getElementById("testFrame2").removeAttribute('hidden');

        let iframe2 = document.getElementById("testFrame2");
        let iframeDocument2 = iframe2.contentDocument;

        let receiver2 = iframeDocument2.getElementById("receiver");
        let sender2 = iframeDocument2.getElementById("sender");
        receiver2.textContent = TestQuestions[QuestionNumber - 1].receiver;
        sender2.textContent = TestQuestions[QuestionNumber - 1].sender;
    } else {
        document.getElementById("testFrame2").setAttribute('hidden', 'hidden');
        document.getElementById("testFrame1").removeAttribute('hidden');

        let iframe = document.getElementById("testFrame1");
        let iframeDocument = iframe.contentDocument;

        let receiver = iframeDocument.getElementById("receiver");
        let sender = iframeDocument.getElementById("sender");
        receiver.textContent = TestQuestions[QuestionNumber - 1].receiver;
        sender.textContent = TestQuestions[QuestionNumber - 1].sender;
    }
}

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
        checkWhichEmailtoDisplay();
        document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
    }
}