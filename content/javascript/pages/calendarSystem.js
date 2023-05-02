function calendarSystem() {
  // const days2 = document.querySelector(".calendar_days")
  // const currentDate2 = document.querySelector(".current_date")
  // const previousSubsequentIcon = document.querySelector(".chevron")
  //
  // let date2 = new Date();
  // let currentYear = date2.getFullYear();
  // let currentMonth = date2.getMonth();

  const months2 = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const renderCalendar2 = () => {
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay();
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();
  }



  // -----OLD---------

  const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
  let date = new Date();
  let currentYear = date.getFullYear();
  let currentMonth = date.getMonth();

// storing full name of all months in array
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const renderCalendar = () => {
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // getting first day of month
    let lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(); // getting last date of month
    let lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(); // getting last day of month
    let lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) { // creating li of previous month last days
      liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) { // creating li of all days of current month
      // adding active class to li if the current day, month, and year matched
      let isToday = i === date.getDate() && currentMonth === new Date().getMonth()
      && currentYear === new Date().getFullYear() ? "active" : "";
      liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) { // creating li of next month first days
      liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currentMonth]} ${currentYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
  }
  renderCalendar();

  prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
      // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
      currentMonth = icon.id === "prev" ? currentMonth - 1 : currentMonth + 1;

      if (currentMonth < 0 || currentMonth > 11) { // if current month is less than 0 or greater than 11
        // creating a new date of current year & month and pass it as date value
        date = new Date(currentYear, currentMonth, new Date().getDate());
        currentYear = date.getFullYear(); // updating current year with new date year
        currentMonth = date.getMonth(); // updating current month with new date month
      } else {
        date = new Date(); // pass the current date as date value
      }
      renderCalendar(); // calling renderCalendar function
    });
  });
}