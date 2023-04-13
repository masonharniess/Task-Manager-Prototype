function addTask() {
    var newDiv = document.createElement("div");
    newDiv.className ="task-block";
    newDiv.innerHTML = "<div class=\"wrapper\">\n" +
        "                        <li tabindex=0 class=\"recent-tasks\">\n" +
        "                            <div class=\"content-title text-highlight\">\n" +
        "                                                                <span class=\"editableDiv\">\n" +
        "                                    New Task Title\n" +
        "                                </span>" +
        "\n" +
        "                                <i class=\"fa-solid fa-trash-can deleteBtn\"></i>\n <i class=\"fa-solid fa-pen-to-square\"></i>" +
        "                                <span class=\"arrow\"></span>\n" +
        "                            </div>\n" +
        "                        </li>\n" +
        "                    </div>\n" +
        "                    <div class=\"sub-content\">\n" +
        "                        New Task Description\n" +
        "                    </div>"
    var container = document.getElementById("tasks");
    container.appendChild(newDiv);
}

function deleteTask() {
    var container = document.getElementById("tasks"); // Find the container element

    container.addEventListener("click", function (event) {
        if (event.target.matches(".deleteBtn")) { // Check if the clicked element matches the delete button selector
            var div = event.target.closest(".task-block"); // Find the div that contains the clicked button
            div.remove(); // Remove the div from the HTML document
        }
    });
}

function toggleContentEditable() {
    var divs = document.querySelectorAll(".editableDiv");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        if (div.getAttribute("contenteditable") === "true") {
            div.setAttribute("contenteditable", "false");
        } else {
            div.setAttribute("contenteditable", "true");
        }
    }
}