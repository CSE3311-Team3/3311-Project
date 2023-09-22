var QuestionNumber = 1;

window.addEventListener('load', () => {
    const playerName = localStorage.getItem('playerName');
    document.getElementById("name").innerHTML = playerName;
})


function phishClick() {
    QuestionNumber += 1;
    document.getElementById("ChoiceSelected").innerHTML = "Phish Button was selected()";
    updateQuestionCount();
}

function realClick() {
    QuestionNumber += 1;
    document.getElementById("ChoiceSelected").innerHTML = "Real Button was selected()";
    updateQuestionCount();
}

function updateQuestionCount() {
    if (QuestionNumber == 11) {
        window.location.href = "/EndScreen/EndScreen.html";
    }
    document.getElementById("QuestionNumber").innerHTML = QuestionNumber;
}