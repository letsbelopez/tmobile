$(function () {
    var chart;

    $(document).ready(function () {

        chart = new Highcharts.Chart({

            chart: {
                renderTo: 'leftVSright',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: 'Left Vs. Right'
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                }
            },

            plotOptions: {
                pie: {
                    colors: ['#EF5350', '#42A5F5'],
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        color: '#000000',
                        connectorColor: '#000000',
                        formatter: function () {
                            return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                        }
                    }
                }
            },
            series: [{
                type: 'pie',
                name: '',
                data: [
                    ['Right', 50],
                    {
                        name: 'Left',
                        y: 50,
                        sliced: false,
                        selected: true
                    }
                ]
            }]
        });
    });
});

