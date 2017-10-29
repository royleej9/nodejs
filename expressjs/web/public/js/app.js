$(function () {
    const timeChart = createChart();
    var socket = io.connect();

    socket.on('fromServer', function (res) {
        console.log(res);
        if (res.type === 'chart') {
            setChartData(res.data)
        }
    });

    socket.on('connect', function () {
        $.notify({
            message: 'Connected websocket'
        }, {
                type: 'success',
                delay: 3000
            });
    });

    socket.on('connect_timeout', function (res) {
        console.log('connect_timeout');
    });

    socket.on('connect_error', function (res) {
        console.log('connect_error');
        $.notify({
            message: 'Disconnected websocket'
        }, {
                type: 'danger',
                delay: 3000
            });
    });

    socket.on('reconnect', function (res) {
        console.log('reconnect');
        $.notify({
            message: 'Connected websocket'
        }, {
                type: 'success',
                delay: 3000
            });
    });



    let timer = null;
    $('#startTimerBtn').on('click', function (evt) {
        socket.emit('getDatas', { msg: 'send' });

        if (timer) {
            clearInterval(timer);
            timer = null;
        }

        timer = setInterval(function () {
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