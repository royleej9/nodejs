// https://codepen.io/anon/pen/VMGVoZ?editors=1111
// Real-time multi-series time series chart data
// http://bl.ocks.org/simenbrekken/6634070

var limit = 60 * 1,
    chartData = [];

const timeFormat = d3.timeFormat("%Y-%m-%d %H:%M:%S");

var sDate = new Date();
chartData = d3.range(limit).map(function () {
    sDate = sDate - 1000;
    return { time: sDate, format: timeFormat(sDate), val: 0 };
});
chartData = chartData.reverse();


var margin = { top: 20, right: 20, bottom: 20, left: 40 },
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


var x = d3.scaleTime().domain(d3.extent(chartData, function (d) { return d.time; })).range([0, width]);
var y = d3.scaleLinear().domain([0, 100]).range([height, 0]);


var axisX = d3.axisBottom().scale(x);
var xAxis = svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + y(0) + ")")
    .call(axisX);


var line = d3.line()
    .x(function (d, i) {
        return x(d.time);
    })
    .y(function (d, i) {
        return y(d.val);
    });


var path = svg.append("g")
    .append("path")
    .datum(chartData)
    .attr("class", "line")
    .attr("d", line);

//tick();
function tick() {

    chartData.push({ time: new Date(), val: d3.randomUniform(0, 10)() });
    x.domain(d3.extent(chartData, function (d) { return d.time; }));

    xAxis.call(axisX);
    path.attr("d", line);
    chartData.shift();
}

makeData();
function makeData() {
    setInterval(() => {
        tick();

    }, 1000);
}