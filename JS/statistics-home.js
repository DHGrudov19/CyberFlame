// A chart for saved lives
new Chart("SavedLives", {
    type: "pie",
    data: {
        labels: ["Пожарникари", "Медици", "Пътна помощ"],
        datasets: [{ 
            label: "Спасени животи",
            data: [54, 43, 19],
            backgroundColor: ["#A50321", "#FF3333", "#FF7E00"],
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
                text: 'Спасени животи',
                font: {
                    size: 24
                }
            }
        },
        maintainAspectRatio: false,
    }
});