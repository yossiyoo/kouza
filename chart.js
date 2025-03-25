document.addEventListener('DOMContentLoaded', () => {
    const depositForm = document.getElementById('deposit-form');
    const depositSection = document.getElementById('deposit-section');
    const chartSection = document.getElementById('chart-section');
    const amountInput = document.getElementById('amount');

    depositForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const amount = amountInput.value;
        alert(`¥${amount} が正常に入金されました。`);
        depositSection.style.display = 'none';
        chartSection.style.display = 'block';
        displayChart();
    });

    const generateUpwardTrendingData = (numPoints, startValue, endValue) => {
        let data = [];
        let step = (endValue - startValue) / (numPoints - 1);
        let value = startValue;

        for (let i = 0; i < numPoints; i++) {
            let randomChange = (Math.random() - 0.5) * 10000; // -1500から+1500のランダムな変動
            value += step + randomChange;
            data.push(value);
        }

        // 最後の値を正確にendValueに設定
        data[data.length - 1] = endValue;
        return data;
    };

    const displayChart = () => {
        const ctx = document.getElementById('stockChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: 30}, (_, i) => `Day ${i + 1}`), // 30日分のラベル
                datasets: [{
                    label: '右肩上がりのランダム株価データ',
                    data: generateUpwardTrendingData(30, 100000, 135000), // 初期値100000、最終値135000
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
                            text: '日付'
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
    };
});
