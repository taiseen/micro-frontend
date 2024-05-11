import * as eCharts from 'echarts';

// Initialize the eCharts instance based on the prepared dom
const barChart = eCharts.init(document.getElementById('bar-chart-testing'));

// Specify the configuration items and data for the chart
const option = {
    xAxis: {
        data: ['Shirts', 'Cardigans', 'Chiffons', 'Pants', 'Heels', 'Socks']
    },
    yAxis: {},
    series: [
        {
            name: 'sales',
            type: 'bar',
            data: [12, 35, 20, 5, 15, 20]
        }
    ]
};

// Display the chart using the configuration items and data just specified.
barChart.setOption(option);