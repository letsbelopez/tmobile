$(function () {

    Highcharts.setOptions({
        colors: ['#ff0000', '#33cc33']
    });
    var chart;

    $(document).ready(function () {

        chart = new Highcharts.Chart({

            chart: {
                renderTo: 'trustedvsfake',
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false
            },

            title: {
                text: 'Trusted Vs. Fake news sources'
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.point.name + '</b>: ' + this.percentage + ' %';
                }
            },

            plotOptions: {
                pie: {
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
                name: 'Browser share',
                data: [
                    {
                        name: 'Trusted',
                        y: 50,
                        sliced: false,
                        selected: true
                    },
                    ['Fake', 50],
                ]
            }]
        });
    });
});

