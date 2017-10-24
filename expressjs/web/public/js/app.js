$(function () {
    const timeChart = createChart();
    var socket = io.connect();

    socket.on('fromServer', function (res) {
        console.log(res);
        if (res.type === 'chart') {
            setChartData(res.data)
        }
    });

    $('#startTimerBtn').on('click', function (evt) {
        socket.emit('getDatas', { msg: 'send' });
        setInterval(function () {
            socket.emit('getDatas', { msg: 'send' });
        }, 5000);
    });

    function setChartData(datas) {
        const x = _.pluck(datas, 'full_ms');
        x.push('x');
        x.reverse();
        const y = _.pluck(datas, 'val');
        y.push('y');
        y.reverse();


        timeChart.load({
            columns: [x, y]
        })

        // chart.load({
        //     columns: [
        //         ['data3', 400, 500, 450, 700, 600, 500]
        //     ]
        // });

    }

    function createChart() {
        var chart = c3.generate({
            bindto: '#chart',
            data: {
                x: 'x',

                columns: [
                ]
            },
            axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%H:%M:%S'
                    }
                }
            }
        });

        return chart;
    }




});