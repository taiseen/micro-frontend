import * as eCharts from 'echarts';

// Initialize the eCharts instance based on the prepared dom
const piChart = eCharts.init(document.getElementById('pi-chart-testing'));

// Specify the configuration items and data for the chart
const option = {
    series: [
        {
            type: 'pie',
            data: [
                {
                    value: 335,
                    name: 'Direct Visit'
                },
                {
                    value: 234,
                    name: 'Union Ad'
                },
                {
                    value: 1548,
                    name: 'Search Engine'
                }
            ]
        }
    ]
};

// Display the chart using the configuration items and data just specified.
piChart.setOption(option);