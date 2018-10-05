import React from 'react';
import PropTypes from 'prop-types';
import { select, selectAll, event } from 'd3-selection';
import { scaleLinear, scaleBand, scaleSqrt } from 'd3-scale';
import { axisRight } from 'd3-axis';
import { format } from 'd3-format';
import { max } from 'd3-array';
import { matchDefinition } from 'utils/parseData';
import { Tooltip, ResponsiveWrapper } from 'components/D3Components';
import { svgRotate, svgTranslate, outerRadius, startAngle, endAngle } from 'utils/chartHelperFunctions';
import { StyledCircle, StyledOuterCircle, StyledText, CenteredSvg } from './styles';

const RadialBarChart = ({ data, type, parentWidth }) => {

  console.log(data);
  console.log(`Type: ${type}`)

  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  };

  const svgDimensions = {
    width: Math.max(parentWidth, 300),
    height: 480
  };

  const barHeight = Math.min(parentWidth/2, 220);
  const reverseLayerOrder = true;
  const barColors = ['#9999ff', '#9999ff', '#9999ff', '#9999ff', '#abf9b4', '#abf9b4', '#abf9b4', '#abf9b4', '#ff7f7f', '#ff7f7f', '#9999ff', '#9999ff'];
  const capitalizeLabels = true;
  const colorLabels = false;
  const transitionDuration = 1000;
  const tickFormat = (d, i) => tickLabels[i];

  let domain = [0, 3];
  let tickLabels = ['1 (rarely or never)', '2 (occasionally)', '3 (often)', '4 (almost always)'];
  let tickValues = [0, 1, 2, 3];
  let tickCircleValues = [1, 2];
  if (type === 'percentile') {
    domain = [0, 1];
    tickValues = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    tickLabels = ['10th', '20th', '30th', '40th', '50th', '60th', '70th', '80th', '90th'];
    tickCircleValues = [.1, .2, .3, .4, .5, .6, .7, .8, .9];
  }

  // Scales & other useful things
  const barScale = scaleSqrt().domain(domain).range([0, barHeight]);
  // const keys = d3.map(d[0].data).keys();
  const keys = Object.keys(data[0].data);
  const numBars = keys.length;
  const labelRadius = barHeight * 0.95;
  const axisScale = scaleSqrt().domain(domain).range([0, -barHeight]);

  let axis = axisRight(axisScale);
  if (tickValues && tickFormat) {
    axis = axis.tickValues(tickValues).tickFormat(tickFormat);
  } else if (tickValues) {
    axis = axis.tickValues(tickValues);
  }

  const axisTicks = tickValues.map((d) => (
    <text
      key={d}
      y={d==0 || d==1 || d==2 || d==3 ? -5 : 0}
      x={d==0 || d==1 || d==2 || d==3 ? 0 : 7}
      style={{ textAnchor: 'start' }}
    />
  ));

  const tickCircles = tickCircleValues.map((d) => (
    <StyledCircle
      key={d}
      className="circle"
      r={barScale(d)}
    />
  ));

  const spokes = keys.map((d, i) => (
    <line
      key={d}
      className="line"
      y2={-barHeight}
      transform={svgRotate((i * 360) / numBars)}
    />
  ));

  const labels = keys.map((d, i) => (
    <StyledText
      key={d}
      text-anchor="start"
    >
      <textPath
        className="textpath"
        href="#label-path"
        startOffset={`${((i * 100) / numBars) + (50 / numBars)}%`}
      >
        { d.toUpperCase() }
      </textPath>
    </StyledText>
  ));

// NEED TO ADD TOOLTIP AND SEGMENTS

  // // Prep the tooltip bits, initial display is hidden
  // var tooltip = g.append("g")
  //     .attr("class", "tooltip")
  //     .style("display", "none");
  //
  // tooltip.append("rect")
  //     .attr("width", 30)
  //     .attr("height", 20)
  //     .attr("fill", "white")
  //     .style("opacity", 0.5);
  //
  // tooltip.append("text")
  //     .attr("x", 15)
  //     .attr("dy", "1.2em")
  //     .style("text-anchor", "middle")
  //     .attr("font-size", "12px")
  //     .attr("font-weight", "bold");
  //
  // // Segment enter/exit/update
  // var segments = layers
  //     .selectAll('path')
  //     .data(function(d) {
  //         var m = d3.map(d.data);
  //         return m.values();
  //     });
  //
  // /* Format to two decimals */
  // const formatTwoDecimals = d3.format(".2f");
  // const formatZeroDecimals = (x) => d3.format(".0f")(x*100);
  //
  // segments
  //     .enter()
  //     .append('path')
  //     .classed('bar', true)
  //     .attr('id', (d,i) => `bar-${d}`)
  //     .on("mouseover", function(d) {
  //         d3.selectAll('.bar').style('opacity',0.5);
  //         d3.select(event.target).style('opacity','1');
  //         tooltip.style("display", null);
  //     })
  //     .on("mouseout", function() {
  //         d3.selectAll('.bar').style('opacity','1');
  //         d3.select('.tooltip').style('display','none');
  //         tooltip.style("display", "none");
  //     })
  //     .on("mousemove", function(d) {
  //         var xPosition = d3.mouse(this)[0] - 15;
  //         var yPosition = d3.mouse(this)[1] - 25;
  //         tooltip.attr("transform", "translate(" + xPosition + "," + yPosition + ")");
  //         tooltip
  //             .select("text")
  //             .text(function() {
  //                 if (domain[1] === 3) {
  //                     return formatTwoDecimals(d+1);
  //                 } else {
  //                     return formatTwoDecimals(d);
  //                 }
  //             });
  //     })
  //     .style('fill', function(d, i) {
  //         if(!barColors) return;
  //         return barColors[i % barColors.length];
  //     });
  //
  // segments.exit().remove();
  //
  // segments
  //     .transition()
  //     .duration(transitionDuration)
  //     .attr('d', d3.svg.arc().innerRadius(0).outerRadius(or).startAngle(sa).endAngle(ea));

  return (
    <CenteredSvg
      width={`${(2*barHeight) + margin.left + margin.right}`}
      height={`${(2*barHeight) + margin.top + margin.bottom}`}
    >
      <g
        className="radial-barchart"
        transform={svgTranslate(margin.left + barHeight, margin.top + barHeight)}
      >
        <g className="tick-circles">
          { tickCircles }
        </g>
        <g className="spokes">
          { spokes }
        </g>
        <g className="axis">
          <g ref={(node) => select(node).call(axis)}>
            { axisTicks }
          </g>
        </g>
        <StyledOuterCircle
          className="outer"
          r={barHeight}
        />
        <g className="labels">
          <def>
            <path
              id="label-path"
              d={`m0 ${-labelRadius} a${labelRadius} ${labelRadius} 0 1,1 -0.01 0`}
            />
          </def>
          { labels }
        </g>
      </g>
    </CenteredSvg>
  );
};

export default ResponsiveWrapper(RadialBarChart);

RadialBarChart.propTypes = {
  data: PropTypes.array,
  type: PropTypes.oneOf([
    'absolute',
    'percentile'
  ]),
  parentWidth: PropTypes.number
};
