function addTask() {
    var newDiv = document.createElement("div");
    newDiv.className ="task-block";
    newDiv.innerHTML = "<div class=\"wrapper\">\n" +
        "                        <li tabindex=0 class=\"recent-tasks\">\n" +
        "                            <div class=\"content-title text-highlight\">\n" +
        "                                New Task Title\n" +
        "\n" +
        "                                <i onclick=\"deleteDiv()\" class=\"fa-solid fa-trash-can deleteBtn\"></i>\n" +
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