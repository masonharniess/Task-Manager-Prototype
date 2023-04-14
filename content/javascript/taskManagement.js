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
        "                                <i class=\"fa-solid fa-trash-can deleteBtn\"></i>\n" +
        "                                <span class=\"arrow\"></span>\n" +
        "                            </div>\n" +
        "                        </li>\n" +
        "                    </div>\n" +
        "                    <div class=\"sub-content editableDiv\" >\n" +
        "                                                <p>\n" +
        "                            New task description\n" +
        "                        </p>" +
        "                    </div>"
    var container = document.getElementById("tasks");
    container.appendChild(newDiv);
}

function deleteTask() {
    var container = document.getElementById("tasks"); // Find the container element

    container.addEventListener("click", function (event) {
        if (event.target.matches(".deleteBtn")) {
            var div = event.target.closest(".task-block");
            div.remove();
        }
    });
}

// function toggleContentEditable() {
//     var divs = document.querySelectorAll(".editableDiv");
//     for (var i = 0; i < divs.length; i++) {
//         var div = divs[i];
//         if (div.getAttribute("contenteditable") === "true") {
//             div.setAttribute("contenteditable", "false");
//         } else {
//             div.setAttribute("contenteditable", "true");
//         }
//     }
// }

function toggleContentEditable() {
    var divs = document.querySelectorAll(".editableDiv");
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];
        var isEditable = div.getAttribute("contenteditable") === "true";
        div.setAttribute("contenteditable", isEditable ? "false" : "true");
    }

    window.addEventListener('DOMContentLoaded', function() {
        var divs = document.querySelectorAll(".editableDiv");
        for (var i = 0; i < divs.length; i++) {
            divs[i].setAttribute("contenteditable", "false");
        }
    });
}




function changeEditColour() {
    const myButton = document.getElementById("editTasksButton");
    myButton.addEventListener("click", function () {
        if (myButton.classList.contains("edit-task")) {
            myButton.classList.remove("edit-task");
        } else {
            myButton.classList.add("edit-task");
        }
    });
}