
function makeGraph(number) {
    var node_list = [];
    var link_list = [];
    
    for(var i = 0; i < number; i++){
        var node = {};
        node.name = "";
        node.group = Math.floor(Math.random() * (number));
        node_list = node_list.concat(node);
        
        var link = {};
        link.source = Math.floor(Math.random() * (number));
        link.target = Math.floor(Math.random() * (number));
        link.weight = 1;
        link_list = link_list.concat(link);
    }
    
    var final_link = {"nodes": node_list, "links": link_list};
    return final_link
}
    
var graph_data = makeGraph(30);

var width = 960,
    height = 500

var svg = d3.select("#grapht").append("svg")
    .attr("width", width)
    .attr("height", height);

var force = d3.layout.force()
    .gravity(.05)
    .distance(100)
    .charge(-100)
    .size([width, height]);

d3.json("graphFile.json", function(json) {
    force
        .nodes(graph_data.nodes)
        .links(graph_data.links)
        .start();
  
    console.log(graph_data);
  
    var link = svg.selectAll(".link")
      .data(graph_data.links)
      .enter().append("line")
      .attr("class", "link")
      .style("stroke-width", function(d) { return Math.sqrt(d.weight); });

  var node = svg.selectAll(".node")
      .data(graph_data.nodes)
      .enter().append("g")
      .attr("class", "node")
      .call(force.drag);

  node.append("circle")
      .attr("r","5");

  node.append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text(function(d) { return d.name });

  force.on("tick", function() {
    link.attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node.attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")"; });
  });
});