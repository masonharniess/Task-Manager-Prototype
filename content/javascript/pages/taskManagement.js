function addTask() {
    var newDiv = document.createElement("div");
    newDiv.className ="content_box_wrapper";
    newDiv.innerHTML =
      "<div class=\"content_box\">\n" +
      "        <div class=\"content_title_wrapper\">\n" +
      "          <h3 class=\"content_title\">Clean my room</h3>\n" +
      "          <span class=\"content_box_dropdown_arrow\"></span>\n" +
      "          <i class=\"fa-solid fa-trash-can deleteBtn\"></i>\n" +
      "        </div>\n" +
      "      </div>\n" +
      "      <div class=\"content_box_sub_content\">\n" +
      "        <div class=\"content_box_sub_content_row\">\n" +
      "          <p class=\"row_text\">Remove excess items from the floor</p>\n" +
      "          <p class=\"row_period\">9:00</p>\n" +
      "        </div>\n" +
      "        <div class=\"content_box_sub_content_row\">\n" +
      "          <p class=\"row_text\">Vacuum the floor</p>\n" +
      "          <p class=\"row_period\">9:30</p>\n" +
      "        </div>\n" +
      "        <div class=\"content_box_sub_content_row\">\n" +
      "          <p class=\"row_text\">Wipe the desk</p>\n" +
      "          <p class=\"row_period\">10:30</p>\n" +
      "        </div>\n" +
      "      </div>"
    var container = document.getElementById("main_content_wrapper");
    container.appendChild(newDiv);
}

function deleteTask() {
    var container = document.getElementById("main_content_wrapper"); // Find the container element

    container.addEventListener("click", function (event) {
        if (event.target.matches(".deleteBtn")) {
            var div = event.target.closest(".content_box_wrapper");
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