function greeting (){
    const now = new Date();
    const currentHour = now.getHours();
    const greetingDiv = document.getElementById("greeting");

    if (currentHour < 12) {
        greetingDiv.textContent = "Good morning, Mason";
    } else if (currentHour < 18) {
        greetingDiv.textContent = "Good afternoon, Mason";
    } else {
        greetingDiv.textContent = "Good evening, Mason";
    }
}