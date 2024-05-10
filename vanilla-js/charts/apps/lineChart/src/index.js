import * as eCharts from 'echarts';

// Initialize the eCharts instance based on the prepared dom
const lineChart = eCharts.init(document.getElementById('line-chart-testing'));

// Specify the configuration items and data for the chart
const option = {
    xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D']
    },

    yAxis: {
        type: 'value'
    },

    series: [
        {
            data: [100, 50, 100 , 150],
            type: 'line'
        }
    ]
};

// Display the chart using the configuration items and data just specified.
lineChart.setOption(option);