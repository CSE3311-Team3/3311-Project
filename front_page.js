//call the elements for functionality
const display_score = document.getElementById("display_score");
const button = documnet.getElementById("play");

//initialize score
let score = 0;

//loop through to update the score of the game
function game_play()
{
    score++;
    display_score.textContent = "SCORE: " + score;
}
//click sound when then user clicks the button.
button.addEventListener("click",game_play);