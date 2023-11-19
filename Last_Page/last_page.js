//call the elements for functionality
const button = document.getElementById("retry");

//initialize score

window.addEventListener('load', () => {
  var score = localStorage.getItem('high-score');
  document.getElementById("display_score").innerHTML = "Score: " + score;
});

//loop through to update the score of the game
function game_play()
{
  window.location.href = "../Login_Page/login_page.html";
}
//click sound when then user clicks the button.
button.addEventListener("click",game_play);