// variablen - const indeholder: måneder, år samt dage
const date = new Date();
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

const renderCalendar = () => {
    date.setDate(1);

    const monthDays = document.querySelector(".days");

    const lastDay = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDate();

    const prevLastDay = new Date(
        date.getFullYear(),
        date.getMonth(),
        0
    ).getDate();

    const firstDayIndex = date.getDay();

    const lastDayIndex = new Date(
        date.getFullYear(),
        date.getMonth() + 1,
        0
    ).getDay();

    const nextDays = 7 - lastDayIndex - 1;

    const months = [
        "Januar",
        "Februar",
        "Marts",
        "April",
        "Maj",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "December",
    ];

    // Defineringen af månede 
    document.querySelector(".date h1").innerHTML = months[date.getMonth()];

    // Defineringen af dato
    document.querySelector(".date p").innerHTML = new Date().toLocaleDateString('dk-DK', dateOptions); //toDateString();

    // Loops for dage før månedens startdag, hvilken datostart på hvilken dag og næste månedes startdag der vises i kalenderen
    let days = "";

    for (let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
    }

    for (let i = 1; i <= lastDay; i++) {
        if (
            i === new Date().getDate() &&
            date.getMonth() === new Date().getMonth()
        ) {
            days += `<div class="today">${i}</div>`;
        } else {
            days += `<div>${i}</div>`;
        }
    }

    for (let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date">${j}</div>`;
        monthDays.innerHTML = days;
    }
};

// Gå tilbage forrig månede
document.querySelector(".prev").addEventListener("click", () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
});

// Gå frem til næste månede
document.querySelector(".next").addEventListener("click", () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
});

renderCalendar();