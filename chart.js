document.addEventListener('DOMContentLoaded', () => {
    const nextButton = document.getElementById('next-button');
    const chartSection = document.getElementById('chart-section');
    const withdrawSection = document.getElementById('withdraw-section');
    const withdrawForm = document.getElementById('withdraw-form');

    nextButton.addEventListener('click', () => {
        chartSection.style.display = 'none';
        withdrawSection.style.display = 'block';
    });

    withdrawForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const withdrawAmount = document.getElementById('withdraw-amount').value;
        alert(`¥${withdrawAmount} が正常に出金されました。`);
        // 出金完了後の処理をここに追加できます
    });

    const generateUpwardTrendingData = (numPoints, startValue, endValue) => {
        let data = [];
        let step = (endValue - startValue) / (numPoints - 1);
        let value = startValue;

        for (let i = 0; i < numPoints; i++) {
            let randomChange = (Math.random() - 0.5) * 1000; // -500から+500のランダムな変動
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

    displayChart();
});
