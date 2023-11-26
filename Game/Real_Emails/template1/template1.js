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
    var clue4 = document.getElementById("clue4");

    //Inserting clues into clue containers
    clue1.innerHTML = clues[0];
    clue1.setAttribute("title","account-notifications@" + clues[0] + ".com")
    var clue2tooltip = "https://www." + clues[0].toLowerCase() + ".com/user/password/set?passwordResetToken=" + Math.ceil(Math.random() * 10000000) + 
                        "email=" + localStorage.getItem('user-name');
    clue2.setAttribute("title", clue2tooltip);
    if(clues[0] == "Overleaf"){
      clue2.setAttribute("style", "background-color: #54c654");
    }
    else if (clues[0] == "Yahoo"){
      clue2.setAttribute("style", "background-color: rgb(141, 65, 211)");
    }
    else if (clues[0] == "Outlook"){
      clue2.setAttribute("style", "background-color: rgb(4, 182, 213)");
    }
    else {
      clue2.setAttribute("style", "background-color: rgb(0, 0, 0)");
    }

    clue3.innerHTML = clue2tooltip;
    clue4.setAttribute("title", "https://www." + clues[0].toLowerCase()+ ".com/user/settings/user=" + localStorage.getItem('user-name'));
  }
);
