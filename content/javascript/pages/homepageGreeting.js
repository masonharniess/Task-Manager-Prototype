// Functionality for homepage greeting time and name

// change message based on time of day
function homepageGreetingTime(){
    const now = new Date();
    const currentHour = now.getHours();
    const greetingDiv = document.getElementById("id_main_title_greeting");
    if (currentHour < 12) {
        greetingDiv.textContent = "Good morning, ";
    } else if (currentHour < 18) {
        greetingDiv.textContent = "Good afternoon, ";
    } else {
        greetingDiv.textContent = "Good evening, ";
    }
}

// change message based on name used to sign up
function homepageGreetingName(){
    let queryString = window.location.search;
    let inputString = queryString.substring(1);
    let inputs = inputString.split("&");
    for (let i = 0; i < inputs.length; i++) {
        let pair = inputs[i].split("=");
        if (pair[0] === "fname") {
            var fnameValue = decodeURIComponent(pair[1]);
            break;
        }
    }

    if (fnameValue) {
        document.getElementById("id_main_title_name").innerHTML = "&nbsp;" + fnameValue;
    } else {
        document.getElementById("id_main_title_name").innerHTML = "Mason";
    }
}