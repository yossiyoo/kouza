document.addEventListener('DOMContentLoaded', () => {
    const ctx = document.getElementById('stockChart').getContext('2d');
    const stockChart = new Chart(ctx, {
        type: 'line', // チャートの種類（ラインチャート）
        data: {
            labels: ['2025-01-01', '2025-01-02', '2025-01-03', '2025-01-04', '2025-01-05', '2025-01-06', '2025-01-07'],
            datasets: [{
                label: 'サンプル株価データ',
                data: [150, 152, 148, 145, 149, 153, 151],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
                tension: 0.1
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        tooltipFormat: 'YYYY-MM-DD'
                    }
                },
                y: {
                    beginAtZero: false
                }
            }
        }
    });
});
