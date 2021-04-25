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
                text: 'Загинали в ПТП през 2020',
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

// A chart for causes of traffic accidents
new Chart("CausesTrafficAccidents", {
    type: "pie",
    data: {
        labels: ["Нарушение на водач", "Нарушение на пешеходец", "Пътни условия ", "Техническа неизправност на ППС", "Нарушение на пътник ", "Друга причина"],
        datasets: [{ 
            label: "ПТП",
            data: [5562, 43, 12, 6, 3, 84],
            backgroundColor: ['hsla(210,29%,24%)', 'hsla(191,47%,45%)', 'hsla(32,68%,66%)', 'hsla(91,47%,45%)', 'hsla(0,46%,44%)', 'hsla(163,35%,37%)'],
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
                text: 'Причини за ПТП през 2020 г. за цялата страна',
                font: {
                    size: 24
                }
            }
        },
        maintainAspectRatio: false,
    }
});