// Homepage main section dropdown functionality

function dropDownMenu() {
    document.addEventListener('click', function(event) {
        var wrapper = event.target.closest('.content_box');
        if (wrapper) {
            wrapper.classList.toggle('active');
            var panel = wrapper.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                var panelHeight = panel.scrollHeight;
                var maxHeight = panelHeight;
                panel.style.maxHeight = 200 + 'px';
            }
        }
    });

    // document.addEventListener('keydown', function(event) {
    //     if (event.key === 'Enter' && event.target.classList.contains('wrapper')) {
    //         event.preventDefault();
    //         event.target.click();
    //     }
    // });
}
