function greetingTime (){
    const now = new Date();
    const currentHour = now.getHours();
    const greetingDiv = document.getElementById("greeting");

    if (currentHour < 12) {
        greetingDiv.textContent = "Good morning, ";
    } else if (currentHour < 18) {
        greetingDiv.textContent = "Good afternoon, ";
    } else {
        greetingDiv.textContent = "Good evening, ";
    }
}