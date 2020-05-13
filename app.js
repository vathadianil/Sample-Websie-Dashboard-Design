var ctx = document.getElementById('line-chart-canvas').getContext('2d');
let canvas = document.getElementById('line-chart-canvas');
let capcityBtn = document.getElementById('capacity-btn');

function getTitle(title, spaceParam) {
    for(let i = 0; i < spaceParam; i++) {
        title = title + ' ';
    }
    return title;
}

var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [
            {
                label: 'Capacity',
                data:[375, 390, 410, 425, 430, 440, 445, 445, 450, 500],
                backgroundColor: '#ffc107',
                borderColor: '#ffc107',
                fill: 1,
                lineTension: 0.2,
                paintRadius: 2
            },
            {
                label: 'Error',
                data:[325, 330, 340, 350, 360, 380, 390, 400, 420, 440],
                backgroundColor: '#dc3545',
                borderColor: '#dc3545',
                fill: 2,
                lineTension: 0.2,
                paintRadius: 2
            },
            {
                label: 'Revenue',
                data:[320, 325, 335, 345, 355, 365, 375, 385, 395, 410],
                backgroundColor: '#28a745',
                borderColor: '#28a745',
                fill: true,
                lineTension: 0.2,
                paintRadius: 2
            },
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            position: 'top',
            text: [getTitle('Users Behaviour', 200), getTitle('24 Hours Performance', 185)],
            fontSize: 25,
            fontStyle: '500',
            fontFamily: "'Poppins','sans-serif'",
            fontColor: 'black'
        },
        footer: {
            display: true,
            text: 'Updated 3 mins ago..'
        },
       legend: {
           display: false
       }
    }
});

capcityBtn.addEventListener('click', () => {
    console.log('clicked');
    canvas.style.visibility  = 'hidden';
});