/**
 * Created by Kia on 3/26/2017.
 */

var chart;

$(function () {
    $(document).ready(function () {
        chart = new Highcharts.Chart({

            chart: {
                polar: true,
                type: 'line',
                backgroundColor: '#E0F2F1',
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

function traverseArray(arr) {
    var right = 0;
    var left = 0;
    var neither = 0;

    for (let i = 0; i < arr.length; i++) {
        var temp = lookUpBias(arr[i].url);

        if (temp === undefined) continue;
        else if (temp[0] === "right") ++right;
        else if (temp[0] === "left") ++left;
        else if (temp[0] === "neither") ++neither;
    }

    chart.series[0].add([["Right", 5], ["Left", 10]], true);
    console.log("Right: " + right + ", " + "Left: " + left + ", " + "Neither: " + neither);
}

traverseArray(history);