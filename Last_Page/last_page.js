//call the elements for functionality
const button = document.getElementById("retry");

//initialize score
let score = 0;

//loop through to update the score of the game
function game_play()
{
  window.location.href = "../Login_Page/login_page.html";
}
//click sound when then user clicks the button.
button.addEventListener("click",game_play);