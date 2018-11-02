import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { select } from 'd3-selection';
import { scaleLinear } from 'd3-scale';
// import { ascending } from 'd3-array';
import { axisLeft, axisBottom } from 'd3-axis';
import { format } from 'd3-format';
import { Tooltip, ResponsiveWrapper, CenteredText, CenteredSvg } from 'components/D3Components';
import { factors } from 'utils/factorsList';

const BiasMeasurementScatterplot = ({ userData, parentWidth, svgId }) => {
  const data = factors.map((factor) => ({
    factor: factor.name,
    abrev: factor.abrev,
    selfRating: userData[`${factor.dataName}1`],
    thirdRating: userData[`${factor.dataName}3`]
  }));

console.log(data);

  const margin = {
    top: 140,
    right: 30,
    bottom: 80,
    left: 120
  };

  const svgDimensions = {
    width: Math.min(parentWidth, 600),
    height: Math.min(parentWidth, 600)
  };

  const color = ['#3366cc','#9f'];

  const xAxisLabels = ['Rarely', 'Occasionally', 'Often', 'Always'];

  const x = scaleLinear()
    .range([0, svgDimensions.width - margin.left - margin.right])
    .domain([1 - 0.2, 4 + 0.2]);

  const y = scaleLinear()
    .range([svgDimensions.height - margin.top - margin.bottom, 0])
    .domain([1 - 0.2, 4 + 0.2]);

  const xGridLines = [1,2,3,4].map((d) => (
    <line
      key={d}
      className="grid"
      x1={margin.left}
      y1={y(d)}
      x2={margin.left + x(4.2)}
      y2={y(d)}
      stroke={'#eee'}
    />
  ));

  const yGridLines = [1,2,3,4].map((d) => (
    <line
      key={d}
      className="grid"
      y1={0}
      x1={margin.left + x(d)}
      y2={y(0.8)}
      x2={margin.left + x(d)}
      stroke={'#eee'}
    />
  ));

  const degree45Line = (
    <line
      className="degree-line line"
      y1={y(0.8)}
      x1={margin.left}
      y2={y(4.2)}
      x2={margin.left + x(4.2)}
      stroke={'dimGrey'}
    />
  );

  const mouseover = (selector) => {
    select(selector)
      .style('display', 'inline');
  };

  const mousemove = (selector, e, d) => {
    select(selector)
      .html(`<strong>${d.factor}</strong><br/>Self-Rating: ${format('.2f')(d.selfRating)}<br/>Average 360 Rating: ${format('.2f')(d.thirdRating)}`)
      .style('left', `${e.pageX}px`)
      .style('top', `${e.pageY - 28}px`);
  };

  const mouseout = (selector) => {
    select(selector).style('display', 'none');
  };

  const createDots = () => data.map((d) => (
    <g
      className="dot"
      key={d.factor}
    >
      <circle
        className="dot"
        cx={margin.left + x(+d.selfRating)}
        cy={y(+d.thirdRating)}
        r={6}
        fill={color[0]}
        onMouseOver={() => mouseover('.tooltip')}
        onMouseMove={(e) => mousemove('.tooltip', e, d)}
        onMouseOut={() => mouseout('.tooltip')}
      />
      <text
        transform={`translate(${margin.left + x(+d.selfRating) + 6},${y(+d.thirdRating) + 4})`}
      >
        {d.abrev}
      </text>
    </g>

  ));

  const topLeftSquare = (
    <path
      d={`M ${margin.left} ${0} L ${margin.left} ${y(0.8)} L ${margin.left + x(4.2)} ${0} L ${margin.left} ${0}`}
      // x={margin.left}
      // y={0}
      // width={Math.abs(x(4.2) - x(0.8)) / 2}
      // height={Math.abs(y(4.2) - y(0.8)) / 2}
      fill={color[1]}
      opacity={0.2}
    />
  );

  // const bottomRightSquare = (
  //   <rect
  //     className="square"
  //     x={margin.left + (Math.abs(x(4.2) - x(0.8)) / 2)}
  //     y={Math.abs(y(4.2) - y(0.8)) / 2}
  //     width={Math.abs(x(4.2) - x(0.8)) / 2}
  //     height={Math.abs(y(4.2) - y(0.8)) / 2}
  //     fill={color[1]}
  //     opacity={0.2}
  //   />
  // );

  const dots = (
    <g transform={`translate(0, ${margin.top})`}>
      { topLeftSquare }
      {/* { bottomRightSquare } */}
      { xGridLines }
      { yGridLines }
      { degree45Line }
      { createDots() }
    </g>
  );

  return (
    <Fragment>
      <CenteredSvg
        id={svgId}
        width={svgDimensions.width}
        height={svgDimensions.height}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <g className="axis">
            <g
              ref={(node) => {
                select(node).call(
                  axisLeft(y).ticks(4).tickFormat((d, i) => xAxisLabels[i]).tickSizeOuter([0])
                );
              }}
            />
          </g>
          <g className="axis">
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
          y={svgDimensions.height + margin.bottom - margin.top}
          x={(svgDimensions.width + margin.left) / 2}
          dy="1em"
        >
          Average 360 Ratings
        </CenteredText>
        <CenteredText
          className="label"
          transform="rotate(-90)"
          y={0 + (margin.left / 4)}
          x={0 - (svgDimensions.height / 2)}
          dy="1em"
        >
          Average Self Ratings
        </CenteredText>
        <CenteredText
          className="subtitle has-text-weight-bold"
          y={margin.top - 50}
          x={((svgDimensions.width + margin.left) / 2)}
          dy="1em"
        >
          Bias Measurement
        </CenteredText>
      </CenteredSvg>
      <Tooltip className="tooltip" />
    </Fragment>
  );
};

export default ResponsiveWrapper(BiasMeasurementScatterplot);

BiasMeasurementScatterplot.propTypes = {
  parentWidth: PropTypes.number,
  userData: PropTypes.any,
  svgId: PropTypes.string
};
