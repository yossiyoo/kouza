document.addEventListener('DOMContentLoaded', () => {
    const generateRandomData = (numPoints) => {
        let data = [];
        let value = 100; // 初期値
        
        for (let i = 0; i < numPoints; i++) {
            const change = (Math.random() - 0.5) * 10; // -5から+5のランダムな変動
            value += change;
            data.push(value);
        }
        
        return data;
    };

    const ctx = document.getElementById('stockChart').getContext('2d');
    const stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 30}, (_, i) => `time ${i + 1}`), // 30日分のラベル
            datasets: [{
                label: 'ランダム株価データ',
                data: generateRandomData(30),
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
