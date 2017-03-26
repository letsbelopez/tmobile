$(function () {
    var chart;

    $(document).ready(function () {

        chart = new Highcharts.Chart({

            chart: {
                polar: true,
                type: 'line',
                backgroundColor:'#E0F2F1',
                renderTo: 'trustedVSfake',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: 'Fake Vs. Trusted'
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                }
            },

            plotOptions: {
                pie: {
                    colors: ['#66BB6A', '#EF5350'],
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
                    {
                        name: 'Trusted',
                        y: 50,
                        sliced: false,
                        selected: true
                    },
                    ['Fake', 50]
                ]
            }]
        });
    });
});

