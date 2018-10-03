import * as d3 from "d3";

export default function createSortedChart(data,container) {

  var margin = {
      top: 15,
      right: 50,
      bottom: 15,
      left: 50
  };

  var width = 480 - margin.left - margin.right,
      height = 480 - margin.top - margin.bottom;

  var svg = d3.select(`.${container}`).insert("svg",".chart")
      .classed(`${className}`,true)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.right + "," + margin.top + ")");

  // tooltips
  var tooltip = d3.select(`.${container}`).append('div')
      .attr('class', 'tooltip')
      .style('display', 'none');

  function mouseover(){
      tooltip.style('display', 'inline');
      d3.selectAll('.bar').style('opacity',0.5);
      d3.select(this).style('opacity',1);
  }
  function mousemove(){
      var d = d3.select(this).data()[0]
      tooltip
        //.html(d.name + '<hr/>' + d3.format(",.2f")(d.value) + '<hr/>' + d.definition)
        .html(d.name + '<hr/>' + matchDefinition(d.name))
        .style('left', (d3.event.pageX - 34) + 'px')
        .style('top', (d3.event.pageY - 12) + 'px');
  }
  function mouseout(){
      tooltip.style('display', 'none');
      d3.selectAll('.bar').style('opacity','1');
  }

  var x = d3.scale.linear()
      .range([0, width])
      .domain([0, d3.max(data, function (d) {
          return d.value + 1;
      })]);

  var y = d3.scale.ordinal()
      .rangeRoundBands([height, 0], .1)
      .domain(data.map(function (d) {
          return d.name;
      }));

  //make y axis to show bar names
  var yAxis = d3.svg.axis()
      .scale(y)
      //no tick marks
      .tickSize(0)
      .orient("left");

  var gy = svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)

  var bars = svg.selectAll(".bar")
      .data(data)
      .enter()
      .append("g")

      //append rects
      bars.append("rect")
          .attr("class", "bar")
          .attr('id', (d,i) => `bar-${d.name}`)
          .attr("y", function (d) {
              return y(d.name);
          })
          .attr("height", y.rangeBand())
          .attr("x", 0)
          .attr("width", function (d) {
              return x(d.value+1);
          })
          .attr("fill", function (d) {
            return matchColor(d.name);
          })
          .on('mouseover', mouseover)
          .on('mousemove', mousemove)
          .on('mouseout', mouseout);

      //add a value label to the right of each bar
      bars.append("text")
          .attr("class", "label")
          //y position of the label is halfway down the bar
          .attr("y", function (d) {
              return y(d.name) + y.rangeBand() / 2 + 4;
          })
          //x position is 3 pixels to the right of the bar
          .attr("x", function (d) {
              return x(d.value+1) + 3;
          })
          .text(function (d) {
              return d3.format(",.2f")(d.value+1);
              //return d.value;
          });
}
