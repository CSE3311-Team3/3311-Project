//call the elements for functionality
const display_score = document.getElementById("display_score");
const button = document.getElementById("play");

//initialize score
let score = 0;

//click sound when then user clicks the button.
button.addEventListener("click",game_play);

//loop through to update the score of the game
function game_play()
{
  window.location.href = "../Login_Page/login_page.html";
}