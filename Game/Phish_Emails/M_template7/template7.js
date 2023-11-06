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
    // Retrieve clue containers in the HTML template
    var clue1 = document.getElementById("clue1");
    var clue2 = document.getElementById("clue2");
    var clue3 = document.getElementById("clue3");

    //Inserting clues into clue containers
    clue1.innerHTML = clues[0];
    clue2.innerHTML = clues[0];
    clue3.setAttribute("title", "[shortURL.at/dfaefdf]");
  }
);