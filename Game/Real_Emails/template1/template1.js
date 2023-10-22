var clues;

// this eventListner is likely unnecessary, consider it deprecated
window.addEventListener('load', () => {
});
  
window.addEventListener('message', (event) => {
    if(event.origin !== "https://cse3311-team3.github.io/3311-Project"){ // Might need to find a way to specify this
      console.log("mismatched origin?");
      console.log(event.origin);
      return;
    }
    clues = event.data;
    // Retrieve clue containers in the HTML template
    var clue1 = document.getElementById("clue1");
    var clue2 = document.getElementById("clue2");
    var clue3 = document.getElementById("clue3");
    var clue4 = document.getElementById("clue4");
    var clue5 = document.getElementById("clue5");

    //Inserting clues into clue containers
    clue1.innerHTML = clues[0];
    clue1.setAttribute("title", "no-reply@accounts." + clues[0] +".com")
    clue2.innerHTML = clues[0];
    clue3.innerHTML = "https://myaccount." + clues[0] + ".com/notifications";
    clue3.setAttribute("title", "https://myaccount." + clues[0] + ".com/notifications");
    clue4.innerHTML = "playerName" + Math.floor(Math.random() * 500) + "@" + clues[0] + ".com";
    clue5.setAttribute("title", "https://" + clues[0] + ".accounts/CheckActivity" + Math.floor(Math.random() * 99999999999999));
  }
);
