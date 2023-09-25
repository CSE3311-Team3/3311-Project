var playerName = "";

function submitPlayerName() {
    playerName = document.getElementById("playerName").value
    document.getElementById("testID").innerHTML = playerName;

    localStorage.setItem("playerName", playerName);
    //localStorage.clear();
    window.location.href = "Game/GamePage.html";
}