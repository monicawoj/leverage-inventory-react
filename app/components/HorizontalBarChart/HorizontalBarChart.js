import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { select, selectAll, event } from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale';
import { axisLeft } from 'd3-axis';
import { format } from 'd3-format';
import { max } from 'd3-array';
import { matchDefinition } from 'utils/parseData';
import { Tooltip, ResponsiveWrapper } from 'components/D3Components';

const HorizontalBarChart = ({ data, parentWidth }) => {
  const margin = {
    top: 15,
    right: 50,
    bottom: 15,
    left: 80
  };

  const svgDimensions = {
    width: Math.max(parentWidth, 300),
    height: 480
  };

  const mouseover = (e) => {
    selectAll('.bar').style('opacity', 0.5);
    select(e.target).style('opacity', 1);
    select('.tooltip').style('display', 'inline');
  };

  const matchColor = (name) => {
    const colors = {
      Networks: '#9999ff',
      'Team-building': '#9999ff',
      Exchange: '#9999ff',
      Allocentrism: '#9999ff',
      'Sit. Awareness': '#abf9b4',
      Agency: '#abf9b4',
      Intentionality: '#abf9b4',
      Logos: '#abf9b4',
      Might: '#ff7f7f',
      Ethos: '#ff7f7f',
      Coalitions: '#9999ff',
      Pathos: '#9999ff'
    };
    return colors[name];
  };

  const x = scaleLinear()
    .range([0, svgDimensions.width - margin.left - margin.right])
    .domain([0, max(data, (d) => d.value + 1)]);

  const y = scaleBand()
    .range([svgDimensions.height - margin.top - margin.bottom, 0])
    .padding(0.1)
    .domain(data.map((d) => d.name));

  const mousemove = (e, d) => {
    const yPosition = parseFloat(select(e.target).attr('y')) + (y.bandwidth() / 2);

    select('.tooltip')
      .html(`<span class="has-text-weight-bold">${d.name}</span><hr/>${matchDefinition(d.name)}`)
      .style('left', `${e.pageX - 32}px`)
      .style('top', `${yPosition}px`);
  };

  const mouseout = () => {
    select('.tooltip').style('display', 'none');
    selectAll('.bar').style('opacity', '1');
  };

  const bars = data.map((d) => (
    <g key={d.name}>
      <rect
        className="bar"
        id={`bar-${d.name}`}
        y={y(d.name)}
        height={y.bandwidth()}
        x={0}
        width={x(d.value + 1)}
        fill={matchColor(d.name)}
        onMouseOver={mouseover}
        onMouseMove={(e) => mousemove(e, d)}
        onMouseOut={mouseout}
      />
      <text
        className="label"
        y={y(d.name) + (y.bandwidth() / 2) + 4}
        x={x(d.value + 1) + 3}
      >
        {format(',.2f')(d.value + 1)}
      </text>
    </g>
  ));

  return (
    <Fragment>
      <svg
        width={svgDimensions.width}
        height={svgDimensions.height}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g className="axis axis--y">
            <g ref={(node) => select(node).call(axisLeft(y).tickSize(0))}></g>
            {/* <text transform="rotate(-90)" y="6" dy="0.71em" textAnchor="end">
              Frequency
            </text> */}
          </g>
          { bars }
        </g>
      </svg>
      <Tooltip className="tooltip" />
    </Fragment>
);
};

export default ResponsiveWrapper(HorizontalBarChart);

HorizontalBarChart.propTypes = {
  data: PropTypes.array,
  parentWidth: PropTypes.number
};
