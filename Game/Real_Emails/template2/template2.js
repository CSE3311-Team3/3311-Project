var clues;

// this eventListner is likely unnecessary, consider it deprecated
window.addEventListener('load', () => {
});
  
window.addEventListener('message', (event) => {
    if(event.origin !== "http://127.0.0.1:5500"){ // Might need to find a way to specify this
      return;
    }
    clues = event.data;
    var clue1 = document.getElementById("clue1");
    var clue2 = document.getElementById("clue2");
    var clue3 = document.getElementById("clue3");
    var clue4 = document.getElementById("clue4");

    clue1.innerHTML = clues[0];
    clue1.setAttribute("title", "alerts@notify." + clues[0] +".com");
    clue2.innerHTML = clues[0];
    clue3.innerHTML = Math.floor(Math.random() * (10000 - 1000) + 1000);
    clue4.innerHTML = clues[0] + " for your banking.";
  }
);