
/* clues[0] = company_name
    clues[1] = email_name
    clues[2] = company_address
    clues[3] = img_path
    clues[4] = receiver_name
    clues[5] = month
    clues[6] = time
    clues[7] = system
    clues[8] = meridiem
    clues[9] = year
    clues[10] = day
*/

var clues;

window.addEventListener('load', () => {
});

window.addEventListener('message', (event) => {
    // if(event.origin !== "https://cse3311-team3.github.io"){
    //   console.log("mismatched origin?");
    //   console.log(event.origin);
    //   return;
    // }
    clues = event.data;
    var company_name = document.getElementsByClassName("company_name");
    var company_address = document.getElementById("company_address");
    var email_name = document.getElementById("email_name");
    var img_path = document.getElementById("company_pic");
    var receiver_name = document.getElementById("receiver_name");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var day = document.getElementById("day");
    var time = document.getElementById("time");
    var meridiem = document.getElementById("meridiem");
    var system = document.getElementsByClassName("system");

    for(let i = 0; i < company_name.length; i++) {
        company_name[i].innerHTML = clues[0];
    }
    company_address.innerHTML = clues[2];
    email_name.innerHTML = clues[1];
    img_path.src= clues[3];
    receiver_name.innerHTML = clues[4];
    month.innerHTML = clues[5];
    year.innerHTML = clues[9];
    day.innerHTML = clues[10];
    time.innerHTML = clues[6];
    meridiem.innerHTML = clues[8];
    for(let j = 0; j<system.length; j++) {
        system[j].innerHTML = clues[7];
    }

    var email_addr = clues[4] + "@" + clues[1] + ".com";
    var receiver_hover = document.getElementsByClassName("receiver_hover");
    receiver_hover[0].innerHTML = email_addr;
    
});





