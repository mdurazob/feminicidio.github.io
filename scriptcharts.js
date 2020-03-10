var data = [
{"quarter":"Q1","medios":10, "twitter":100,"date":"04/03/2020"},
	{"quarter":"Q1","medios":20, "twitter":1000,"date":"03/03/2020"},
	{"quarter":"Q1","medios":30, "twitter":1500,"date":"02/03/2020"},
	{"quarter":"Q1","medios":20, "twitter":2000,"date":"01/03/2020"},
	{"quarter":"Q1","medios":50, "twitter":800,"date":"29/02/2020"},
	{"quarter":"Q1","medios":70, "twitter":1200,"date":"28/02/2020"},
	{"quarter":"Q2","medios":20, "twitter":1500,"date":"27/02/2020"},
	{"quarter":"Q2","medios":30, "twitter":2500,"date":"26/02/2020"},
	{"quarter":"Q2","medios":20, "twitter":2000,"date":"25/02/2020"}
]
var parseDate = d3.time.format("%d/%m/%Y").parse;

data.forEach(function(d) {
	d.date = parseDate(d.date)
	d.Year = d.date.getFullYear();
	d.mes = parseDate(d.date.getMonth);
})

var ndx = crossfilter(data);


/*
CREATING CHARTS
*/

var mencionesChart = dc.lineChart('#chart-mencionespordia');
var dateDim = ndx.dimension(function(d) { return d.mes;});
var mencionesmedios = dateDim.group().reduceSum(function(d) {return d.medios;});

var minDate = new Date("20/02/2020");
	var maxDate = new Date("05/03/2020");

mencionesChart
	.width(500).height(200)
	.dimension(dateDim)
        .group(mencionesmedios,"medios")
     /**   .stack(hits_2012,"2012")
        .stack(hits_2013,"2013")   */
        .renderArea(true)
	.x(d3.time.scale().domain([minDate,maxDate]))
        .elasticX(true)
        .brushOn(false)
        .legend(dc.legend().x(60).y(10).itemHeight(13).gap(5))
	.yAxisLabel("mencionesmedios")
    ;