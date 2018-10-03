import React from 'react';
import * as d3 from "d3";

const HorizontalBarChart = ({ data }) => {
  console.log(data);

  const margin = {
      top: 15,
      right: 50,
      bottom: 15,
      left: 50
  };

  const width = 480 - margin.left - margin.right,
      height = 480 - margin.top - margin.bottom;

  const mouseover = (e) => {
  console.log(e.target);
    d3.selectAll('.bar').style('opacity', 0.5);
    d3.select(e.target).style('opacity', 1);
    d3.select('.tooltip').style('display','inline');
  };

  const mousemove = (e) => {
     console.log(d3.select(e.target));
    // var d = d3.select(e.target).data()[0]
    // const tooltip = d3.select('.tooltip');
    // tooltip
    //   .html(d.name + '<hr/>' + matchDefinition(d.name))
    //   .style('left', (d3.e.pageX - 34) + 'px')
    //   .style('top', (d3.e.pageY - 12) + 'px');
  };

  const mouseout = () => {
      d3.select('.tooltip').style('display', 'none');
      d3.selectAll('.bar').style('opacity', '1');
  };

  const matchColor = (name) => {
    const colors = {
      "Networks": "#9999ff",
      "Team-building": "#9999ff",
      "Exchange": "#9999ff",
      "Allocentrism": "#9999ff",
      "Sit. Awareness": "#abf9b4",
      "Agency": "#abf9b4",
      "Intentionality": "#abf9b4",
      "Logos": "#abf9b4",
      "Might": "#ff7f7f",
      "Ethos": "#ff7f7f",
      "Coalitions": "#9999ff",
      "Pathos": "#9999ff"
    }
    return colors[name];
  };

  const x = d3.scaleLinear()
      .range([0, width])
      .domain([0, d3.max(data, function (d) {
          return d.value + 1;
      })]);

  const y = d3.scaleBand()
      .range([height, 0])
      .padding(0.1)
      .domain(data.map(d => d.name));

  const bars = data.map((d,i) => {
    return <g key={d.name}>
      <rect
        className='bar'
        id={`bar-${d.name}`}
        y={y(d.name)}
        height={y.bandwidth()}
        x={0}
        width={x(d.value + 1)}
        fill={matchColor(d.name)}
        onMouseOver={mouseover}
        onMouseMove={mousemove}
        onMouseOut={mouseout} />
      <text
        className="label"
        y={y(d.name) + y.bandwidth() / 2 + 4}
        x={x(d.value+1) + 3}>
        {d3.format(",.2f")(d.value+1)}
      </text>
    </g>
  });

  return (
    <div>
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <g className="axis axis--y">
              <g ref={node => d3.select(node).call(d3.axisLeft(y).tickSize(0))}></g>
              {/* <text transform="rotate(-90)" y="6" dy="0.71em" textAnchor="end">
                Frequency
              </text> */}
            </g>
            { bars }
          </g>
        </svg>
        <div
          className="tooltip"
        />
  </div>
  )
};

export default HorizontalBarChart;
