// Navigation search functionality

function autocomplete(inp, arr) {
    let currentFocus;
    inp.addEventListener("input", function(e) {
        let a, b, i, val = this.value;
        closeAllLists();
        if (!val) { return false;}
        currentFocus = -1;
        a = document.createElement("div");
        a.setAttribute("id", this.id + "navigation_search_suggestions_list");
        a.setAttribute("class", "navigation_search_suggestions_items");
        this.parentNode.appendChild(a);
        for (i = 0; i < arr.length; i++) {
            if (arr[i].toUpperCase().startsWith(val.toUpperCase())) {
                const inputSearchID = document.getElementById("input-searchID").style.cssText = "border-bottom-right-radius: 0; border-bottom-left-radius: 0; height: 100%;";
                const b = document.createElement("div");
                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>" + arr[i].substr(val.length);
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                b.addEventListener("click", function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    inp.addEventListener("keydown", function(e) {
        let x = document.getElementById(this.id + "navigation_search_suggestions_list");
        if (x) {
            x = x.getElementsByTagName("div");
        }
        if (e.keyCode === 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode === 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode === 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });

    function addActive(x) {
        if (!x) {
            return false;
        }
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("navigation_search_suggestions_active");
    }

    function removeActive(x) {
        /*a function to remove the "active" class from all autocomplete items:*/
        for (let i = 0; i < x.length; i++) {
            x[i].classList.remove("navigation_search_suggestions_active");
        }
    }

    function closeAllLists(elmnt) {
        let x = document.getElementsByClassName("navigation_search_suggestions_items");
        Array.from(x).forEach((item) => {
            if (elmnt !== item && elmnt !== inp) item.parentNode.removeChild(item);
        });
        document.getElementById("input-searchID").style.cssText = "border-bottom-right-radius: 25px; border-bottom-left-radius: 25px; height: '';";
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

let pages = ["Home", "Tasks", "Calendar", "Timer", "Notes", "Services"]
