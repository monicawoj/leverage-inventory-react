import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { scaleLinear, scaleBand } from 'd3-scale';
import { ascending } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { format } from 'd3-format';
import { Tooltip, ResponsiveWrapper, CenteredText, Legend } from 'components/D3Components';

const ScatterPlot = ({ groupData, focusGroupId, errorBars, parentWidth, svgId }) => {

  let { data } = groupData[focusGroupId];
  data = data.sort((a, b) => ascending(+a.avg, +b.avg));

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


  const colors = [{
    tenthPercentile: 'grey',
    ninetiethPercentile: 'grey',
    avg: '#3366cc'
  }, "#dc3912", "#ff9900", "#109618", "#990099", "#0099c6", "#dd4477", "#66aa00", "#b82e2e", "#316395", "#994499", "#22aa99", "#aaaa11", "#6633cc", "#e67300", "#8b0707", "#651067", "#329262", "#5574a6", "#3b3eac"];

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

  const mouseover = (selector) => {
    select(selector)
      .style('display', 'inline');
  };

  const focusGroupMousemove = (selector, e, d, type) => {
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
    }

    select(selector)
      .html(`<strong>${d.factor}</strong><br/>${title} ${format('.2f')(d[type])}`)
      .style('left', `${e.pageX}px`)
      .style('top', `${e.pageY - 28}px`);
  };

  const multiGroupMousemove = (selector, e, d, dataset) => {
    select(selector)
      .html(`<strong>${dataset.name}</strong><br/>Average: ${format('.2f')(d.avg)}`)
      .style('left', `${e.pageX}px`)
      .style('top', `${e.pageY - 28}px`);
  };

  const mouseout = (selector) => {
    select(selector).style('display', 'none');
  };

  const createFocusGroupDots = (type) => data.map((d) => (
    <circle
      key={d.factor}
      className={`${type} dot`}
      cx={margin.left + x(+d[type])}
      cy={y(d.factor) + (y.bandwidth() / 2)}
      r={y.bandwidth() / 4}
      fill={colors[0][type]}
      onMouseOver={() => mouseover('.focusGroupTooltip')}
      onMouseMove={(e) => focusGroupMousemove('.focusGroupTooltip', e, d, type)}
      onMouseOut={() => mouseout('.focusGroupTooltip')}
    />
  ));

  const createOtherGroupDots = (dataset, i) => dataset.data.map((d) => (
    <circle
      key={d.factor}
      className="dot"
      cx={margin.left + x(+d.avg)}
      cy={y(d.factor) + (y.bandwidth() / 2)}
      r={y.bandwidth() / 4}
      fill={(i === 0) ? colors[0].avg : colors[i]}
      onMouseOver={() => mouseover('.multiGroupTooltip')}
      onMouseMove={(e) => multiGroupMousemove('.multiGroupTooltip', e, d, dataset)}
      onMouseOut={() => mouseout('.multiGroupTooltip')}
    />
  ));

  const createMultiLegendEntry = (dataset, i) => (
    <g
      key={i}
      className="legend-row"
      transform={`translate(${0},${20 * i})`}
    >
      <circle
        key={dataset.name}
        className="legend-row"
        cx={0}
        cy={0}
        r={6}
        fill={(i === 0) ? colors[0].avg : colors[i]}
      />
      <text
        className="legend-label"
        x={10}
        y={5}
      >
        { dataset.name }
      </text>
    </g>
  );

  const createFocusLegendEntries = () => (
    <Fragment>
      <g
        className="legend-row"
      >
        <circle
          className="legend-block"
          cx={0}
          cy={0}
          r={6}
          fill={colors[0].avg}
        />
        <text
          className="legend-label"
          x={20}
          y={5}
        >
          Average
        </text>
      </g>
      <g
        className="legend-row"
        transform={`translate(${0},${20})`}
      >
        <line
          className="legend-row"
          y1={0}
          y2={0}
          x1={-4}
          x2={12}
          stroke={'black'}
          strokeDasharray={'5,5'}
          strokeWidth={'0.5'}
        />
        <text
          className="legend-label"
          x={20}
          y={5}
        >
          10th-90th Percentile
        </text>
      </g>
    </Fragment>
  );

  let dots;
  let legendEntries;
  const focusGroupKey = focusGroupId.toString();
  if (errorBars) {
    dots = (
      <g transform={`translate(0, ${margin.top})`}>
        { gridLines }
        { dottedLines }
        { createFocusGroupDots('tenthPercentile') }
        { createFocusGroupDots('ninetiethPercentile') }
        { createFocusGroupDots('avg') }
      </g>
    );
    legendEntries = createFocusLegendEntries();
  } else {
    legendEntries = [createMultiLegendEntry(groupData[focusGroupKey], 0)];
    const groupKeys = Object.keys(groupData);
    const otherGroupKeys = groupKeys.filter((key) => key !== focusGroupKey);
    let otherGroupDots = [createOtherGroupDots(groupData[focusGroupKey], 0)];
    otherGroupKeys.forEach((key, i) => {
      legendEntries = [
        ...legendEntries,
        createMultiLegendEntry(groupData[key], i + 1)
      ];
      otherGroupDots = [
        ...otherGroupDots,
        createOtherGroupDots(groupData[key], i + 1)
      ];
    });

    dots = (
      <g transform={`translate(0, ${margin.top})`}>
        { gridLines }
        { otherGroupDots }
      </g>
    );
  }

  return (
    <Fragment>
      <svg
        id={svgId}
        width={svgDimensions.width + margin.left}
        height={svgDimensions.height + margin.top}
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
        { dots }
        <CenteredText
          className="label"
          y={svgDimensions.height}
          x={(svgDimensions.width + margin.left) / 2}
          dy="1em"
        >
          Frequency of Behavior
        </CenteredText>
        <CenteredText
          className="label"
          transform="rotate(-90)"
          y={0 + (margin.left / 4)}
          x={0 - (svgDimensions.height / 2)}
          dy="1em"
        >
          Leverage Inventory Tactics
        </CenteredText>
        <CenteredText
          className="subtitle has-text-weight-bold"
          y={0}
          x={(svgDimensions.width / 2)}
          dy="1em"
        >
          { errorBars ? groupData[focusGroupId].name : `${groupData[focusGroupId].name} vs. Other Groups`}
        </CenteredText>
        <Legend dimensions={svgDimensions} margin={margin}>
          { legendEntries }
        </Legend>
      </svg>
      <Tooltip className="focusGroupTooltip tooltip" />
      <Tooltip className="multiGroupTooltip tooltip" />
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
