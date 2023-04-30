// Functionality for task management

function addTask() {
    var newDiv = document.createElement("div");
    newDiv.className ="content_box_wrapper";
    newDiv.innerHTML =
      "<div class=\"content_box\">\n" +
      "        <div class=\"content_title_wrapper\">\n" +
      "          <h3 class=\"content_title\">Task Title Example</h3>\n" +
      "          <span class=\"content_box_dropdown_arrow\"></span>\n" +
      "          <i class=\"fa-solid fa-trash-can deleteBtn\"></i>\n" +
      "        </div>\n" +
      "      </div>\n" +
      "      <div class=\"content_box_sub_content\">\n" +
      "        <div class=\"content_box_sub_content_row\">\n" +
      "          <p class=\"row_text\">Subtask example</p>\n" +
      "          <p class=\"row_period\">Time</p>\n" +
      "        </div>\n" +
      "        <div class=\"content_box_sub_content_row\">\n" +
      "          <p class=\"row_text\">Subtask example</p>\n" +
      "          <p class=\"row_period\">Time</p>\n" +
      "        </div>\n" +
      "        <div class=\"content_box_sub_content_row\">\n" +
      "          <p class=\"row_text\">Subtask example</p>\n" +
      "          <p class=\"row_period\">Time</p>\n" +
      "        </div>\n" +
      "      </div>"
    var container = document.getElementById("main_content_wrapper");
    container.appendChild(newDiv);
}

function deleteTask() {
    var container = document.getElementById("main_content_wrapper");
    container.addEventListener("click", function (event) {
        if (event.target.matches(".deleteBtn")) {
            var div = event.target.closest(".content_box_wrapper");
            div.remove();
        }
    });
}

// make task content editable
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

// change the colour of the edit button when in edit mode
function changeEditColour() {
    const myButton = document.getElementById("id_edit_tasks_button");
    myButton.addEventListener("click", function () {
        if (myButton.classList.contains("edit_tasks_button_active")) {
            myButton.classList.remove("edit_tasks_button_active");
        } else {
            myButton.classList.add("edit_tasks_button_active");
        }
    });
}