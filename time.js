//0.load data
var dataset = [
  {
    "date": "2006-10",
    "number": 23091
  },
  {
    "date": "2006-11",
    "number": 21371
  },
  {
    "date": "2006-12",
    "number": 22051
  },
  {
    "date": "2007-01",
    "number": 22104
  },
  {
    "date": "2007-02",
    "number": 20848
  },
  {
    "date": "2007-03",
    "number": 26691
  },
  {
    "date": "2007-04",
    "number": 24888
  },
  {
    "date": "2007-05",
    "number": 26017
  },
  {
    "date": "2007-06",
    "number": 26327
  },
  {
    "date": "2007-07",
    "number": 25061
  },
  {
    "date": "2007-08",
    "number": 27844
  },
  {
    "date": "2007-09",
    "number": 24767
  },
  {
    "date": "2007-10",
    "number": 26635
  },
  {
    "date": "2007-11",
    "number": 26269
  },
  {
    "date": "2007-12",
    "number": 24305
  },
  {
    "date": "2008-01",
    "number": 25089
  },
  {
    "date": "2008-02",
    "number": 27495
  },
  {
    "date": "2008-03",
    "number": 29743
  },
  {
    "date": "2008-04",
    "number": 32613
  },
  {
    "date": "2008-05",
    "number": 32131
  },
  {
    "date": "2008-06",
    "number": 30483
  },
  {
    "date": "2008-07",
    "number": 35519
  },
  {
    "date": "2008-08",
    "number": 39875
  },
  {
    "date": "2008-09",
    "number": 39064
  },
  {
    "date": "2008-10",
    "number": 34998
  },
  {
    "date": "2008-11",
    "number": 28753
  },
  {
    "date": "2008-12",
    "number": 30974
  },
  {
    "date": "2009-01",
    "number": 30142
  },
  {
    "date": "2009-02",
    "number": 30259
  },
  {
    "date": "2009-03",
    "number": 34207
  },
  {
    "date": "2009-04",
    "number": 34288
  },
  {
    "date": "2009-05",
    "number": 31511
  },
  {
    "date": "2009-06",
    "number": 32736
  },
  {
    "date": "2009-07",
    "number": 34819
  },
  {
    "date": "2009-08",
    "number": 32748
  },
  {
    "date": "2009-09",
    "number": 34399
  },
  {
    "date": "2009-10",
    "number": 39250
  },
  {
    "date": "2009-11",
    "number": 30826
  },
  {
    "date": "2009-12",
    "number": 29496
  },
  {
    "date": "2010-01",
    "number": 27733
  },
  {
    "date": "2010-02",
    "number": 27417
  },
  {
    "date": "2010-03",
    "number": 34845
  },
  {
    "date": "2010-04",
    "number": 34530
  },
  {
    "date": "2010-05",
    "number": 29950
  },
  {
    "date": "2010-06",
    "number": 37442
  },
  {
    "date": "2010-07",
    "number": 33604
  },
  {
    "date": "2010-08",
    "number": 34074
  },
  {
    "date": "2010-09",
    "number": 33695
  },
  {
    "date": "2010-10",
    "number": 30406
  },
  {
    "date": "2010-11",
    "number": 28028
  },
  {
    "date": "2010-12",
    "number": 30345
  },
  {
    "date": "2011-01",
    "number": 28224
  },
  {
    "date": "2011-02",
    "number": 30743
  },
  {
    "date": "2011-03",
    "number": 41241
  },
  {
    "date": "2011-04",
    "number": 38190
  },
  {
    "date": "2011-05",
    "number": 37341
  },
  {
    "date": "2011-06",
    "number": 35428
  },
  {
    "date": "2011-07",
    "number": 30924
  },
  {
    "date": "2011-08",
    "number": 33891
  },
  {
    "date": "2011-09",
    "number": 32145
  },
  {
    "date": "2011-10",
    "number": 31723
  },
  {
    "date": "2011-11",
    "number": 31903
  },
  {
    "date": "2011-12",
    "number": 31360
  },
  {
    "date": "2012-01",
    "number": 30226
  },
  {
    "date": "2012-02",
    "number": 32867
  },
  {
    "date": "2012-03",
    "number": 39410
  },
  {
    "date": "2012-04",
    "number": 37414
  },
  {
    "date": "2012-05",
    "number": 40164
  },
  {
    "date": "2012-06",
    "number": 35179
  },
  {
    "date": "2012-07",
    "number": 32742
  },
  {
    "date": "2012-08",
    "number": 23304
  }
];

var dataset2 = [
  {
    "date": "2007-10",
    "number": 23091
  },
  {
    "date": "2007-11",
    "number": 21371
  },
  {
    "date": "2007-12",
    "number": 22051
  },
  {
    "date": "2007-1",
    "number": 22104
  },
  {
    "date": "2007-2",
    "number": 20848
  },
  {
    "date": "2007-3",
    "number": 26691
  },
  {
    "date": "2007-4",
    "number": 24888
  },
  {
    "date": "2007-5",
    "number": 26017
  },
  {
    "date": "2007-6",
    "number": 26327
  },
  {
    "date": "2007-7",
    "number": 25061
  },
  {
    "date": "2007-8",
    "number": 27844
  },
  {
    "date": "2007-9",
    "number": 24767
  },
  {
    "date": "2008-10",
    "number": 26635
  },
  {
    "date": "2008-11",
    "number": 26269
  },
  {
    "date": "2008-12",
    "number": 24305
  },
  {
    "date": "2008-1",
    "number": 25089
  },
  {
    "date": "2008-2",
    "number": 27495
  },
  {
    "date": "2008-3",
    "number": 29743
  },
  {
    "date": "2008-4",
    "number": 32613
  },
  {
    "date": "2008-5",
    "number": 32131
  },
  {
    "date": "2008-6",
    "number": 30483
  },
  {
    "date": "2008-7",
    "number": 35519
  },
  {
    "date": "2008-8",
    "number": 39875
  },
  {
    "date": "2008-9",
    "number": 39064
  },
  {
    "date": "2009-10",
    "number": 34998
  },
  {
    "date": "2009-11",
    "number": 28753
  },
  {
    "date": "2009-12",
    "number": 30974
  },
  {
    "date": "2009-01",
    "number": 30142
  },
  {
    "date": "2009-02",
    "number": 30259
  },
  {
    "date": "2009-03",
    "number": 34207
  },
  {
    "date": "2009-04",
    "number": 34288
  },
  {
    "date": "2009-05",
    "number": 31511
  },
  {
    "date": "2009-06",
    "number": 32736
  },
  {
    "date": "2009-07",
    "number": 34819
  },
  {
    "date": "2009-08",
    "number": 32748
  },
  {
    "date": "2009-09",
    "number": 34399
  },
  {
    "date": "2010-10",
    "number": 39250
  },
  {
    "date": "2010-11",
    "number": 30826
  },
  {
    "date": "2010-12",
    "number": 29496
  },
  {
    "date": "2010-01",
    "number": 27733
  },
  {
    "date": "2010-02",
    "number": 27417
  },
  {
    "date": "2010-03",
    "number": 34845
  },
  {
    "date": "2010-04",
    "number": 34530
  },
  {
    "date": "2010-05",
    "number": 29950
  },
  {
    "date": "2010-06",
    "number": 37442
  },
  {
    "date": "2010-07",
    "number": 33604
  },
  {
    "date": "2010-08",
    "number": 34074
  },
  {
    "date": "2010-09",
    "number": 33695
  },
  {
    "date": "2011-10",
    "number": 30406
  },
  {
    "date": "2011-11",
    "number": 28028
  },
  {
    "date": "2011-12",
    "number": 30345
  },
  {
    "date": "2011-01",
    "number": 28224
  },
  {
    "date": "2011-02",
    "number": 30743
  },
  {
    "date": "2011-03",
    "number": 41241
  },
  {
    "date": "2011-04",
    "number": 38190
  },
  {
    "date": "2011-05",
    "number": 37341
  },
  {
    "date": "2011-06",
    "number": 35428
  },
  {
    "date": "2011-07",
    "number": 30924
  },
  {
    "date": "2011-08",
    "number": 33891
  },
  {
    "date": "2011-09",
    "number": 32145
  },
  {
    "date": "2012-10",
    "number": 31723
  },
  {
    "date": "2012-11",
    "number": 31903
  },
  {
    "date": "2012-12",
    "number": 31360
  },
  {
    "date": "2012-01",
    "number": 30226
  },
  {
    "date": "2012-02",
    "number": 32867
  },
  {
    "date": "2012-03",
    "number": 39410
  },
  {
    "date": "2012-04",
    "number": 37414
  },
  {
    "date": "2012-05",
    "number": 40164
  },
  {
    "date": "2012-06",
    "number": 35179
  },
  {
    "date": "2012-07",
    "number": 32742
  },
  {
    "date": "2012-08",
    "number": 23304
  },
  {
    "date": "2012-09",
    "number": 0
  }
];

//parser
var timeForm = d3.timeParse("%Y-%m");

//comp function
function comp( a, b ){
    if(timeForm(a.date) < timeForm(b.date)){
        return -1;
    }
    if (a.date > b.date){
        return 1;
    }
    return 0;
}

dataset.sort( comp );

var container = d3.select("#time-series").attr("width", 600).attr("height", 400);

// 2. Use the margin1 convention practice
var margin1 = {top: 50, right: 50, bottom: 50, left: 60}
  , width1 = 600 - margin1.left - margin1.right 
  , height1 = 400 - margin1.top - margin1.bottom; 



// 5. X scale will use the index of our data
var xScale1 = d3.scaleTime()
    .range([0, width1]); // output
    xScale1.domain(d3.extent(dataset, function(d) { return timeForm(d.date); }));

var test = d3.extent(dataset, function(d) { return timeForm(d.date); });

console.log(test);
const maxYVal = 60000;
// 6. Y scale will use the dataset 
var yScale1 = d3.scaleLinear()
    .domain([0, maxYVal]) // input 
    .range([height1, 0]); // output 

// 7. d3's line generator
var line = d3.line()
    .x(function(d) { console.log(d.date);   return xScale1(timeForm(d.date)); }) // set the x values for the line generator
    .y(function(d) { console.log(d.number); return yScale1(d.number); }) // set the y values for the line generator 
//    .curve(d3.curveLinear) // apply smoothing to the line

// 8. An array of objects of length N. Each object has key -> value pair, the key being "y" and the value is a random number
//var dataset = d3.range(n).map(function(d) { return {"y": d3.randomUniform(1)() } })

// 1. Add the SVG to the page and employ #2
var svg1 = d3.select("#time-series").append("svg")
    .attr("width", width1 + margin1.left + margin1.right)
    .attr("height", height1 + margin1.top + margin1.bottom)
    .append("g")
    .attr("transform", "translate(" + margin1.left + "," + margin1.top + ")");

// 3. Call the x axis in a group tag
svg1.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height1 + ")")
    .call(d3.axisBottom(xScale1)); // Create an axis component with d3.axisBottom

// 4. Call the y axis in a group tag
svg1.append("g")
    .attr("class", "y axis")
    .call(d3.axisLeft(yScale1)); // Create an axis component with d3.axisLeft

// 9. Append the path, bind the data, and call the line generator 
svg1.append("path")
    .datum(dataset) // 10. Binds data to the line 
    .attr("class", "line") // Assign a class for styling 
    .attr("d", line); // 11. Calls the line generator 

svg1.append('text')
  .attr('class', 'title')
  .attr('x', width1 / 2 )
  .attr('y', -10)
  .attr('text-anchor', 'middle')
  .text('Deportations per Month, 2006-2012')

svg1
  .append('text')
  .attr('class', 'label')
  .attr('x', -(height1 / 2))
  .attr('y', -48 ) 
  .attr('transform', 'rotate(-90)')
  .attr('text-anchor', 'middle')
  .text('Number of Deportees')

svg1.append('text')
  .attr('class', 'label')
  .attr('x', width / 2)
  .attr('y', height )
  .attr('text-anchor', 'middle')
  .text('Months')


const div = d3
  .select('body')
  .append('div')
  .attr('class', 'tooltip')
  .style('opacity', 0);

// 12. Appends a circle for each datapoint 
svg1.selectAll(".dot")
    .data(dataset)
    .enter().append("circle") // Uses the enter().append() method
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", function(d) { return xScale1(timeForm(d.date)); })
    .attr("cy", function(d) { return yScale1(d.number); })
    .attr("r", 5)
    .on("mouseover",  d => {
      div
        .transition()
        .duration(200)
        .style('opacity', 0.9);
      div
        .html(d.date +" " + d.number)
        .style('left', d3.event.pageX + 'px')
        .style('top', d3.event.pageY - 28 + 'px');
    })
    .on("mouseout", () => {
        div
        .transition()
        .duration(500)
        .style('opacity', 0);});