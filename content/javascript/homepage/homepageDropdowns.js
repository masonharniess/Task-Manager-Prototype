// Homepage main section dropdown functionality

function dropDownMenu() {
    document.addEventListener('click', function(event) {
        var wrapper = event.target.closest('.wrapper');
        if (wrapper) {
            wrapper.classList.toggle('active');
            var panel = wrapper.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                var panelHeight = panel.scrollHeight;
                var maxHeight = panelHeight + 35;
                panel.style.maxHeight = maxHeight + 'px';
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
