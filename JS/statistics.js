// A function to color the numbers
function colorNumbers() {
    let percent = document.querySelectorAll('.stats-numbers');

    for (let elem of percent){

        var pointNum = parseFloat(elem.innerHTML);

        // If the numbers are higher than 0 then they'll be colored red and an arrow pointing up will be added
        if (pointNum > 0)
        {
            elem.textContent += ' ↑';
            elem.style.color = "red";
        }
        // Else the numbers will be colored green and an arrow pointing down will be added
        else{
            elem.textContent += ' ↓';
            elem.style.color = "green";
        }
    }
}

// Calling the function
colorNumbers();

// The yers are written separately to shorten the code
let years = [2015, 2016, 2017, 2018, 2019, 2020, 2021];


// A chart for deaths
new Chart("DeathsChart", {
    type: "bar",
    data: {
        labels: years,
        datasets: [{
            label: "ЗАГИНАЛИ ПРИ ПОЖАРИ",
            data: [4, 5, 5, 12, 3, 7, 2],
            backgroundColor: ['#FF3333', '#A50321'],
            borderColor: "red",
        }]
    },
    options: {
        legend: { display: false },
        maintainAspectRatio: false,
    }
});

// A chart for injuries
new Chart("InjuriesChart", {
    type: "bar",
    data: {
        labels: years,
        datasets: [{
            label: "ПОСТРАДАЛИ ПРИ ПОЖАРИ",
            data: [23, 9, 12, 12, 12, 14, 4],
            backgroundColor: ['hsla(35,100%,60%,0.9)', 'hsla(30,100%,43%,0.9)'],
            borderColor: "yellow",
            fill: false
        }]
    },
    options: {
        legend: { display: false },
        maintainAspectRatio: false,
    }
});


// A chart for services
new Chart("Services", {
    type: "line",
    data: {
        // For overall calles
        labels: years,
        datasets: [{
            label: "ПРОИЗШЕСТВИЯ",
            data: [3074, 2686, 2730, 2822, 3325, 3218, 1112],
            borderColor: "blue",
            fill: true
        },
        // For the fake calls
        {
            type: 'line',
            label: 'ОТ КОИТО ЛЪЖЛИВИ',
            data: [148, 134, 129, 116, 125, 104, 39],
            borderColor: "darkGray",
            fill: true
        }]
    },
    options: {
        legend: { display: false },
        maintainAspectRatio: false,
    }
});

// A chart for fires
new Chart("Fires", {
    type: "line",
    data: {
        labels: years,
        datasets: [{ 
            label: "Пожари",
            data: [2012, 2309, 2204, 1603, 1889, 1844, 917],
            borderColor: "red",
            fill: false
        }, { 
            label: "Тенденция",
            data: [1900, 1850, 1800, 1750, 1700, 1650],
            pointRadius: 0,
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        legend: {display: false},
        maintainAspectRatio: false,
    }
});


let causes = ["Късо съединение", "Отоплителни уреди", "Нагревателни уреди", "Техническ неизправност", "Нарушена технология", "Строителна неизправност", "Окрит огън", "Природни явления", "Огневи работи", "Самозапалване", "Детска игра", "Некачествен ремонт", "В процес на установяване", "Умисъл", "Други"];

// A chart for fire causes
new Chart("FireCauses", {
    type: "bar",
    data: {
        labels: causes,
        datasets: [{ 
            label: "Пожари",
            data: [111, 13, 24, 56, 2, 2, 70, 2, 4, 15, 2, 1, 140, 11, 23],
            backgroundColor: ['hsla(0,100%,60%,0.9)', 'hsla(348,96%,33%,0.9)'],
            borderColor: "red",
            fill: false
        }]
    },
    options: {
        indexAxis: 'y',
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Причини за възникване на пожари през 2020',
                font: {
                    size: 24
                }
            }
        }
    }
});

// A chart for traffic accidents
new Chart("TraffiAccidents", {
    type: "bar",
    data: {
        labels: [2019, 2020],
        datasets: [{ 
            label: "ПТП",
            data: [436, 367],
            backgroundColor: ['hsla(210,29%,24%,0.9)'],
            borderColor: "red",
            fill: false
        }, { 
            label: "Загинали при ПТП",
            data: [29, 26],
            backgroundColor: ['hsla(191,47%,45%,0.9)'],
            pointRadius: 0,
            borderColor: "blue",
            fill: false
        }, { 
            label: "Пострадали при ПТП",
            data: [551, 432],
            backgroundColor: ['hsla(32,68%,66%,0.9)'],
            pointRadius: 0,
            borderColor: "blue",
            fill: false
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            },
        },
        maintainAspectRatio: false,
    }
});

// A chart for deaths caused by traffic accidents
new Chart("DeathsTrafficAccidents", {
    type: "pie",
    data: {
        labels: ["Водач", "Пешеходец", "Пътник", "Работник на пътя"],
        datasets: [{ 
            label: "ПТП",
            data: [12, 7, 7, 0],
            backgroundColor: ['hsla(210,29%,24%)', 'hsla(191,47%,45%)', 'hsla(32,68%,66%)', 'hsla(91,47%,45%)'],
            borderColor: "white",
            fill: false
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position:'bottom'
            },
            title: {
                display: true,
                text: 'Загиналите в ПТП през 2020',
                font: {
                    size: 24
                }
            }
        },
        maintainAspectRatio: false,
    }
});

// A chart for injuries caused by traffic accidents
new Chart("InjuriesTrafficAccidents", {
    type: "pie",
    data: {
        labels: ["Водач", "Пешеходец", "Пътник", "Работник на пътя"],
        datasets: [{ 
            label: "ПТП",
            data: [201, 96, 135, 0],
            backgroundColor: ['hsla(210,29%,24%)', 'hsla(191,47%,45%)', 'hsla(32,68%,66%)', 'hsla(91,47%,45%)'],
            borderColor: "white",
            fill: false
        }]
    },
    options: {
        plugins: {
            legend: {
                display: true,
                position: 'bottom'
            },
            title: {
                display: true,
                text: 'Ранени в ПТП през 2020',
                font: {
                    size: 24
                }
            }
        },
        maintainAspectRatio: false,
    }
});