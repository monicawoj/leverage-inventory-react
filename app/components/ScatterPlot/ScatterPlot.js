import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale';
import { descending } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { Tooltip, ResponsiveWrapper } from 'components/D3Components';

const Legend = ({ errorBars }) => {
  if (errorBars) {
    return <div>legend placeholder</div>
  }
  return <div>legend placeholder with all series shown</div>
};

const ScatterPlot = ({
  groupData, focusGroupId, errorBars, parentWidth
}) => {
  console.log(groupData[focusGroupId], errorBars);

  let { data, name } = groupData[focusGroupId];
  data = data.sort((a, b) => descending(+a.avg, +b.avg));

  const margin = {
    top: 50,
    right: 30,
    bottom: 20,
    left: 150
  };

  const svgDimensions = {
    width: Math.min(parentWidth, 600),
    height: 600
  };

  const colors = {
    tenthPercentile: 'grey',
    ninetiethPercentile: 'grey',
    avg: '#3366cc'
  };
  const xAxisLabels = ['Rarely', 'Occasionally', 'Often', 'Always'];

  const x = scaleLinear()
    .range([0, svgDimensions.width - margin.left - margin.right])
    .domain([1 - 0.2, 4 + 0.2]);

  const y = scaleBand()
    .range([svgDimensions.height - margin.top - margin.bottom, 0])
    .padding(0.1)
    .domain(data.map((d) => d.factor));

  const gridLines = data.map((d) => (
    <line
      key={d.factor}
      className="grid"
      x1={margin.left}
      y1={y(d.factor) + (y.bandwidth() / 2)}
      x2={margin.left + x(4.2)}
      y2={y(d.factor) + (y.bandwidth() / 2)}
      stroke={'#eee'}
    />
  ));

  const dottedLines = data.map((d) => (
    <line
      key={d.factor}
      className="between"
      x1={margin.left + x(d.tenthPercentile)}
      y1={y(d.factor) + (y.bandwidth() / 2)}
      x2={margin.left + x(d.ninetiethPercentile)}
      y2={y(d.factor) + (y.bandwidth() / 2)}
      stroke={'black'}
      strokeDasharray={'5,5'}
      strokeWidth={'0.5'}
    />
  ));

  const mouseover = () => {
    select('.tooltip')
      .style('display', 'inline');
  };

  const mousemove = (e, d, type) => {
    let title;
    switch (type) {
      case 'tenthPercentile':
        title = '10th Percentile:';
        break;
      case 'avg':
        title = 'Average:';
        break;
      case 'ninetiethPercentile':
        title = '90th Percentile:';
        break;
      default:
        title = '';
    };

    select('.tooltip')
      .html(`<strong>${d.factor}</strong><br/>${title} ${d[type]}`)
      .style('left', `${e.pageX}px`)
      .style('top', `${e.pageY - 28}px`);
  };

  const mouseout = () => {
    select('.tooltip').style('display', 'none');
  };

  // Make the dots for each group
  // const groupKeys = Object.keys(groupData);
  // const otherGroupKeys = groupKeys.filter((key) => key !== focusGroupId.toString());
  // const dots = [];
  // otherGroupKeys.forEach((key, i) => {
  //   dots = [...dots, createDots(fullData[key],colors[i])];
  // });

  const createDots = (type) => data.map((d) => (
    <circle
      key={d.factor}
      className="tenthPercentile"
      cx={margin.left + x(+d[type])}
      cy={y(d.factor) + (y.bandwidth() / 2)}
      r={y.bandwidth() / 4}
      fill={colors[type]}
      onMouseOver={mouseover}
      onMouseMove={(e) => mousemove(e, d, type)}
      onMouseOut={mouseout}
    />
  ));

  return (
    <Fragment>
      <svg
        id={'resultsWithErrorBars'}
        width={svgDimensions.width}
        height={svgDimensions.height}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g className="axis axis--y">
            <g ref={(node) => select(node).call(axisLeft(y).tickSize(0))} />
          </g>
          <g className="axis axis--x">
            <g
              transform={`translate(0, ${svgDimensions.height - margin.bottom - margin.top})`}
              ref={(node) => {
                select(node).call(
                  axisBottom(x).ticks(4).tickFormat((d, i) => xAxisLabels[i]).tickSizeOuter([0])
                );
              }}
            />
          </g>
        </g>
        <g transform={`translate(0, ${margin.top})`}>
          { gridLines }
          { errorBars ? dottedLines : null }
          { createDots('tenthPercentile') }
          { createDots('ninetiethPercentile') }
          { createDots('avg') }
        </g>
      </svg>
      <Tooltip className="tooltip" />
    </Fragment>
  );
};

export default ResponsiveWrapper(ScatterPlot);

ScatterPlot.propTypes = {
  parentWidth: PropTypes.number,
  groupData: PropTypes.any,
  focusGroupId: PropTypes.string,
  errorBars: PropTypes.bool
};
