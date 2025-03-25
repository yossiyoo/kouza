document.addEventListener('DOMContentLoaded', () => {
    const generateUptrendData = (numPoints, startValue, endValue) => {
        let data = [];
        let step = (endValue - startValue) / (numPoints - 1);
        
        for (let i = 0; i < numPoints; i++) {
            data.push(startValue + step * i);
        }
        
        return data;
    };

    const ctx = document.getElementById('stockChart').getContext('2d');
    const stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 30}, (_, i) => `time ${i + 1}`), // 30日分のラベル
            datasets: [{
                label: '右肩上がりの株価データ',
                data: generateUptrendData(30, 100000, 135000), // 初期値100000、最終値135000
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: '時間'
                    }
                },
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: '株価'
                    }
                }
            }
        }
    });
});
