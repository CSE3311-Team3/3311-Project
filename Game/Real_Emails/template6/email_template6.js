var username = localStorage.getItem("user-name");
window.addEventListener('load', () => {
  document.getElementById("playerName").innerHTML = username;
});