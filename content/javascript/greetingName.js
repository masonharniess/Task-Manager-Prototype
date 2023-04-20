function greetingName () {
    var queryString = window.location.search;

    // Remove the "?" character from the beginning of the query string
    var inputString = queryString.substring(1);

    // Decode the input value for the "fname" input
    var inputs = inputString.split("&");
    for (var i = 0; i < inputs.length; i++) {
        var pair = inputs[i].split("=");
        if (pair[0] === "fname") {
            var fnameValue = decodeURIComponent(pair[1]);
            break;
        }
    }

    // Update the contents of the output div with the value of the "fname" input
    document.getElementById("name").innerHTML = "&nbsp;" + fnameValue;
}