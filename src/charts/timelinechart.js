/**
 * Created by Kia on 3/25/2017.
 */

$(function () {
    var chart;

    $(document).ready(function () {
        Highcharts.chart('timeline', {
            chart: {
                polar: true,
                backgroundColor:'#E0F2F1',
                type: 'area'
            },
            title: {
                text: 'Number of visits based on political biased websites'
            },
            subtitle: {
                text: 'Source: <a href="http://thebulletin.metapress.com/content/c4120650912x74k7/fulltext.pdf">' +
                'thebulletin.metapress.com</a>'
            },
            xAxis: {
                allowDecimals: false,
                labels: {
                    formatter: function () {
                        return this.value; // clean, unformatted number for year
                    }
                }
            },
            yAxis: {
                title: {
                    text: 'Number of visits'
                },
                labels: {
                    formatter: function () {
                        return this.value;
                    }
                }
            },
            tooltip: {
                pointFormat: '{series.name} produced <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
            },
            plotOptions: {
                area: {
                    pointStart: 2010,
                    marker: {
                        enabled: false,
                        symbol: 'circle',
                        radius: 2,
                        states: {
                            hover: {
                                enabled: true
                            }
                        }
                    }
                }
            },
            series: [{
                color: '#EF5350',
                name: 'Right',
                data: [6, 11, 32, 12, 20, 32, 15]
            }, {
                name: 'Left',
                color: '#42A5F5',
                data: [2, 9, 23, 19, 21, 21, 30]
            }]
        });
    });
});

