document.addEventListener('DOMContentLoaded', () => {
    const generateRandomData = (numPoints, startValue, endValue) => {
        let data = [];
        let value = startValue;
        
        for (let i = 0; i < numPoints - 1; i++) {
            const change = (Math.random() - 0.5) * 2000; // -1000から+1000のランダムな変動
            value += change;
            data.push(value);
        }
        
        data.push(endValue); // 最終値を設定
        return data;
    };

    const ctx = document.getElementById('stockChart').getContext('2d');
    const stockChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({length: 30}, (_, i) => `time ${i + 1}`), // 30日分のラベル
            datasets: [{
                label: 'ランダム株価データ',
                data: generateRandomData(30, 100000, 135000), // 初期値100000、最終値135000
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
