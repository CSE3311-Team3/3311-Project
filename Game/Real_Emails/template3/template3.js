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
    var clue6 = document.getElementById("clue6");
    var clue7 = document.getElementById("clue7");
    var clue8 = document.getElementById("clue8");
    var clue9 = document.getElementById("clue9");
    var clue10 = document.getElementById("clue10");
    var clue11 = document.getElementById("clue11");

    clue1.innerHTML = clues[0];
    clue1.setAttribute("title","noreply@" + clues[1] + ".com");
    clue2.innerHTML = clues[0] + " ";
    clue3.innerHTML = clues[1];
    clue4.setAttribute("title","https://"   + clues[1] + ".com/" +clues[0] + "/" + clues[2] + "/invitations");
    clue5.innerHTML = "https://" + clues[1] + ".com/" + clues[2];
    clue5.setAttribute("title", "https://" + clues[1] + ".com/" + clues[2]);
    clue6.innerHTML = clues[0];
    clue6.setAttribute("title", "https://" + clues[1] + ".com/" + clues[0]);
    clue7.innerHTML = "playerName";
    clue8.innerHTML = clues[0];
    clue9.setAttribute("title","http://" + clues[1] + ".com/settings/blocked_users?block_user=" + clues[0]);
    clue10.setAttribute("title","http://" + clues[1] + ".com/settings/reported_abuse?report_abuse=" + clues[0])
    clue11.setAttribute("title","https://"   + clues[1] + ".com/" +clues[0] + "/" + clues[2] + "/invitations");
  }
);