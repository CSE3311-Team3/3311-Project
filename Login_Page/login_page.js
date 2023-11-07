
var username;
var isPasswordVisible = false;

const passwordInput = document.getElementById("password");
const passwordStrength = document.getElementById("password-strength-box");
const passwordToggle = document.getElementById("toggleButton");
const submitInput = document.getElementById("submitButton");
const skipInput = document.getElementById("skipButton");


passwordInput.addEventListener("input", checkPasswordStrength);
passwordToggle.addEventListener("click", togglePassword);
submitInput.addEventListener("click", getLogin);
skipInput.addEventListener("click", skipLogin);



// This function toggles the password visibility
function togglePassword() {
    isPasswordVisible = !isPasswordVisible;
    if (isPasswordVisible) {
        passwordInput.type = "text"; // Show the password
    } else {
        passwordInput.type = "password"; // Hide the password
    }
}

// This function calculates the strength of the password entered by testing it against various 
// combinations of regular expressions
function calculatePasswordStrength(password){

    // Used to update background color for password-strength-box
    var passStrenBox = document.getElementById("password-strength-box");

    // Password length
    var len = password.length;

    // Regular expression patterns saved to variables for easier testing:

    var specChar = /[!@#$%^&*()_+{}/[\]:;<>,.?~\\|]/;       // Special character pattern
    var lower = /[a-z]/;                                    // Lowercase letter pattern
    var upper = /[A-Z]/;                                    // Uppercase letter pattern
    var num = /\d/;                                         // number pattern

    // Clears the password strength box when the password box is empty
    // and displays it when the password box is not empty
    if(len == 0){
        passStrenBox.style.display = "none";
    }
    else{
        passStrenBox.style.display = "block";
    }


    // Rules for Weak passwords: 1 or 2 regular expression patterns activated
    if(len < 8){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && lower.test(password) && !upper.test(password) && !specChar.test(password)
            && !num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && !lower.test(password) && upper.test(password) && !specChar.test(password)
            && !num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && !lower.test(password) && !upper.test(password) && specChar.test(password)
            && !num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && !lower.test(password) && !upper.test(password) && !specChar.test(password)
            && num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && lower.test(password) && upper.test(password) && !specChar.test(password)
            && !num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && lower.test(password) && !upper.test(password) && !specChar.test(password)
            && num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && lower.test(password) && !upper.test(password) && specChar.test(password)
            && !num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && !lower.test(password) && upper.test(password) && !specChar.test(password)
            && num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && !lower.test(password) && upper.test(password) && specChar.test(password)
            && !num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    if(len >= 8 && !lower.test(password) && !upper.test(password) && specChar.test(password)
            && num.test(password)){
        passStrenBox.style.backgroundColor = "red";
        return "Weak";
    }
    

    // Rules for Moderate passwords: 3 regular expression patterns activated
    if(len >= 8 && len <= 12 && lower.test(password) && upper.test(password) && num.test(password)
            && specChar.test(password)){
        passStrenBox.style.backgroundColor = "orange";
        return "Moderate";
    }
    if(len >= 8 && lower.test(password) && upper.test(password) && num.test(password)
            && !specChar.test(password)){
        passStrenBox.style.backgroundColor = "orange";
        return "Moderate";
    }
    if(len >= 8 && lower.test(password) && upper.test(password) && !num.test(password)
            && specChar.test(password)){
        passStrenBox.style.backgroundColor = "orange";
        return "Moderate";
    }
    if(len >= 8 && lower.test(password) && !upper.test(password) && num.test(password)
            && specChar.test(password)){
        passStrenBox.style.backgroundColor = "orange";
        return "Moderate";
    }
    if(len >= 8 && !lower.test(password) && upper.test(password) && num.test(password)
            && specChar.test(password)){
        passStrenBox.style.backgroundColor = "orange";
        return "Moderate";
    }
    
    // Rule for Strong passwords: 4 regular expression patterns activated
    if(len > 12 && lower.test(password) && upper.test(password) && num.test(password) 
            && specChar.test(password)){

        passStrenBox.style.backgroundColor = "green";
        return "Strong";
    } 

    return "Error";
    }

// This function checks the password strength before passing it to the display function
function checkPasswordStrength() {
    const password = passwordInput.value;
    const strength = calculatePasswordStrength(password);
    displayPasswordStrength(strength);
}

// This function displays the password strength to the user
function displayPasswordStrength(strength) {
    passwordStrength.textContent = `Password Strength: ${strength}`;
}

// This function gets the username to be used in other aspects of the game
function getLogin() {

    // Assigns username based on what the user entered
    username = document.getElementById("username").value;

    // Error checking
    if(!username){
        skipLogin();
    }

    // Saves username to local storage to be used by other files
    localStorage.setItem('user-name', username);

    // Redirects the page
    window.location.href = "../Game/GamePage.html";
}

// This function sets the default username if the skip button is pressed
function skipLogin() {

    // Assigns a random name to username
    username = randomName();

    // Saves username to local storage to be used by other files
    localStorage.setItem('user-name', username);

    // Redirects the page
    window.location.href = '../Game/GamePage.html';
    //window.location.href = 'index.html';
}

// This function chooses a random username from the names of Team 3 members
function randomName() {

    const names = ["Diya", "Chelsea", "Michael", "Joe"];

    const randomIndex = Math.floor(Math.random() * names.length);

    const randomName = names[randomIndex];

    return randomName;
}
