var username = localStorage.getItem("user-name");
window.addEventListener('load', () => {
  document.getElementById("clue1").innerHTML = username;
  document.getElementById("clue2").innerHTML = username;
});