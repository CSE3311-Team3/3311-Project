var clues;

// this eventListner is likely unnecessary, consider it deprecated
window.addEventListener('load', () => {
});
  
window.addEventListener('message', (event) => {
  // if(event.origin !== "https://cse3311-team3.github.io"){
  //   console.log("mismatched origin?");
  //   console.log(event.origin);
  //   return;
  // }
    clues = event.data;
    var clue1 = document.getElementById("clue1");
    var clue2 = document.getElementById("clue2");
    var clue3 = document.getElementById("clue3");
    var clue4 = document.getElementById("clue4");
    var clue5 = document.getElementById("clue5");

    clue1.innerHTML = clues[0];
    clue1.setAttribute("title", "alerts@notify." + clues[0] +".com");
    clue2.innerHTML = clues[0];
    if (clues[0] == "Wells Fargo") {
      console.log("Wells fargo");
      clue2.setAttribute("style", "color:red");
    }
    else if(clues[0] == "Chase") {
      console.log("chase");
      clue2.setAttribute("style", "color:blue");
    }
    else {
      console.log("else default");
      clue2.setAttribute("style", "color:black");
    }

    clue3.innerHTML = Math.floor(Math.random() * (10000 - 1000) + 1000);
    clue4.innerHTML = clues[0] + " for your banking.";
    clue5.setAttribute("title", clues[0] + ".com/accounts/98b4b296a64e4a729f/statements/51dfae")
  }
);