var username = localStorage.getItem("user-name");
var userEmail = username + Math.floor(Math.random() * 999 + 1).toString() + "@gmail.com";
var small_link = "https://puzz.biglist.com/go/1326/36333417505/4/17819/2";
var large_link = "https://puzz.biglist.com/go/1326/ad?#d65881D/4/1789/233?";
window.addEventListener('load', () => {
  document.getElementById("clue1").innerHTML = username;
  document.getElementById("clue2").innerHTML = username;
  document.getElementById("clue3").setAttribute('title', userEmail);
  document.getElementById("clue4").setAttribute('title', small_link);
  document.getElementById("clue5").setAttribute('title', large_link);
  document.getElementById("clue6").setAttribute('title', small_link);
  document.getElementById("clue7").setAttribute('title', large_link);
  document.getElementById("clue8").setAttribute('title', small_link);
  document.getElementById("clue9").setAttribute('title', small_link);
  document.getElementById("clue10").setAttribute('title', small_link);
  document.getElementById("clue11").setAttribute('title', small_link);
  document.getElementById("clue12").setAttribute('title', small_link);
  document.getElementById("clue13").setAttribute('title', small_link);
  document.getElementById("clue14").setAttribute('title', small_link);
  document.getElementById("clue15").setAttribute('title', small_link);
  
});