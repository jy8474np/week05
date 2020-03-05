
// Create a canvass to contain the graphic data representation
let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')

chart = new Chart(ctx, {
    // Specify the graph type
    type: 'bar',
    // Enter the desired data details, labels, and colors
    data: {
        labels: ["Verrazano-Narrows", "Golden Gate", "Mackinac", "George Washington", "Tacoma"],
        datasets: [{
            label: 'Span',
            data: [1298.4, 1280.2, 1158.0, 1067.0, 853.44],
            backgroundColor: ['red', 'blue', 'yellow', 'purple', 'green']
        }]
    }, options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})
