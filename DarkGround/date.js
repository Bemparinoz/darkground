const currentDate = document.querySelector(".current-date"),
daysTag = document.querySelector(".days");

// getting new date as well as current year and month
let date = new Date(),
currentYear = date.getFullYear(),
currentMonth = date.getMonth();

const months = ["January", "Febuary", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "December"];

const renderCalender = () => {
    let firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(), // getting first day of month
    lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate(), // getting last date of month
    lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay(), // getting last day of month
    lastDateOfPrevMonth = new Date(currentYear, currentMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayOfMonth; i > 0; i--) { // creating li for previous months last days
        liTag += `<li class="inactive">${lastDateOfPrevMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateOfMonth; i++) { // creating li for this months days
        // adding active class to li if matched
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayOfMonth; i < 6; i++) { // creating li for next months first days
        liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
    }


    currentDate.innerText = `${months[currentMonth]} ${currentYear}`
    daysTag.innerHTML = liTag;
}

renderCalender();