function toggleAccountMenu() {
    let submenu = document.getElementById("id_account_submenu_wrapper")
    submenu.classList.toggle("open");
}

document.addEventListener("keydown", function(event) {
    if (event.key === 'Enter') {
        toggleAccountMenu();
    }
});

