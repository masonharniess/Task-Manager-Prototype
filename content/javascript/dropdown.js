// function dropDownMenu() {
//     var acc = document.getElementsByClassName("wrapper");
//     var i;
//
//     for (i = 0; i < acc.length; i++) {
//         acc[i].addEventListener("click", function() {
//             this.classList.toggle("active");
//             var panel = this.nextElementSibling;
//             if (panel.style.maxHeight) {
//                 panel.style.maxHeight = null;
//             } else {
//                 panel.style.maxHeight = 35 + "px";
//             }
//         });
//
//         acc[i].addEventListener("keydown", function(event) {
//             if (event.key === "Enter") {
//                 event.preventDefault();
//                 this.click();
//             }
//         });
//     }
// }

function dropDownMenu() {
    document.addEventListener('click', function(event) {
        var wrapper = event.target.closest('.wrapper');
        if (wrapper) {
            wrapper.classList.toggle('active');
            var panel = wrapper.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + '35px';
            }
        }
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter' && event.target.classList.contains('wrapper')) {
            event.preventDefault();
            event.target.click();
        }
    });
}
