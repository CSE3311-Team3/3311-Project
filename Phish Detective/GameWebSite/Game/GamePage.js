window.addEventListener('load', () => {

    const playerName = localStorage.getItem('playerName');
    document.getElementById("name").innerHTML = playerName;

})