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
            backgroundColor: [
                'rgba(255, 51, 51, 0.8)',
                'rgba(31, 126, 49, 0.8)',
                'rgba(76, 187, 187, 0.8)',
                'rgba(168, 204, 53, 0.8)',
                'rgba(204, 81, 179, 0.8)',
                'rgba(52, 84, 173, 0.8)',
                'rgba(175, 175, 175, 0.8)'
            ],
            borderColor: "red",
            fill: false
        }]
    },
    options: {
        legend: { display: false },
        maintainAspectRatio: false,
    }
});

// A chart for injuries
new Chart("InjuriesChart", {
    type: "line",
    data: {
        labels: years,
        datasets: [{
            label: "ПОСТРАДАЛИ ПРИ ПОЖАРИ",
            data: [23, 9, 12, 12, 12, 14, 4],
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
            data: [30009, 37362, 35482, 29448, 42141, 33693, 11874],
            borderColor: "red",
            fill: false
        }, { 
            label: "Тенденция",
            data: [30009, 33685, 34583, 32015, 37078, 35385, 31429],
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