import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { select, selectAll } from 'd3-selection';
import { scaleSqrt } from 'd3-scale';
import { arc } from 'd3-shape';
import { axisRight } from 'd3-axis';
import { format } from 'd3-format';
import { Tooltip, ResponsiveWrapper } from 'components/D3Components';
import { svgRotate, svgTranslate, matchColor } from 'utils/chartHelperFunctions';
import { factors } from 'utils/factorsList';
import { StyledCircle, StyledOuterCircle, StyledText, CenteredSvg, StyledLine, StyledPath } from './styles';

const RadialBarChart = ({ data, type, parentWidth, small, selfOnly }) => {
  const barData = Object.entries(data[0].data).map((array) => ({
    name: array[0],
    value: array[1]
  }));

  const margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
  };

  const formatTwoDecimals = format('.2f');
  const barHeight = selfOnly ? 190 : Math.min(parentWidth / 2, 220);
  // const barHeight = Math.min(parentWidth / 2, 220);

  let domain = [0, 3];
  let tickLabels = ['1 (rarely or never)', '2 (occasionally)', '3 (often)', '4 (almost always)'];
  const tickFormat = (d, i) => tickLabels[i];
  let tickValues = [0, 1, 2, 3];
  let tickCircleValues = [1, 2];
  if (type === 'percentile') {
    domain = [0, 1];
    tickValues = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];
    tickLabels = ['10th', '20th', '30th', '40th', '50th', '60th', '70th', '80th'];
    tickCircleValues = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    if (small) {
      domain = [0, 1];
      tickValues = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8];
      tickLabels = ['10th', '20th', '30th', '40th', '50th', '60th', '70th', '80th'];
      tickCircleValues = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    }
  }

  // Scales & other useful things
  const barScale = scaleSqrt().domain(domain).range([0, barHeight]);
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
      style={{ textAnchor: 'start'}}
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
    <StyledLine
      key={d}
      y2={-barHeight}
      transform={svgRotate((i * 360) / numBars)}
    />
  ));

  const labels = keys.map((d, i) => (
    <StyledText
      key={d}
      small={small}
    >
      <textPath
        className="textpath"
        href="#label-path"
        startOffset={`${((i * 100) / numBars) + (50 / numBars)}%`}
      >
        { factors.filter((factor) => factor.name === d)[0].radialName.toUpperCase() }
      </textPath>
    </StyledText>
  ));

  const mouseover = (e) => {
    select(e.target).style('opacity', 1);
    select('.radial-tooltip').style('display', 'inline');
  };

  const mousemove = (e, d) => {
    selectAll('.radial-tooltip')
      .html(`<span class="has-text-weight-bold">${(domain[1] === 3) ? formatTwoDecimals(d.value + 1) : formatTwoDecimals(d.value)}</span>`)
      .style('left', `${e.pageX - 42}px`)
      .style('top', `${e.pageY - 264}px`); //header and top padding height
  };

  const mouseout = () => {
    select('.radial-tooltip').style('display', 'none');
    selectAll('.bar').style('opacity', '0.7');
  };

  const layers = barData.map((d, i) => {
    const arcPath = arc()
      .innerRadius(0)
      .outerRadius(barScale(d.value))
      .startAngle((i * 2 * Math.PI) / numBars)
      .endAngle(((i + 1) * 2 * Math.PI) / numBars);
    const arcPathValue = arcPath();
    return (
      <g
        key={d.name}
        className="layer"
      >
        <StyledPath
          id={`bar-${d.name}`}
          className="bar"
          d={arcPathValue}
          fill={matchColor(d.name, 'normal')}
          onMouseOver={mouseover}
          onMouseMove={(e) => mousemove(e, d)}
          onMouseOut={mouseout}
        >
        </StyledPath>
      </g>
    );
  });

  return (
    <Fragment>
      <CenteredSvg
        width={`${(2 * barHeight) + margin.left + margin.right}`}
        height={`${(2 * barHeight) + margin.top + margin.bottom}`}
      >
        <g
          className="radial-barchart"
          transform={svgTranslate(margin.left + barHeight, margin.top + barHeight)}
        >
          <StyledOuterCircle
            className="outer"
            r={barHeight}
          />
          { layers }
          <g className="labels">
            <def>
              <path
                id="label-path"
                d={`m0 ${-labelRadius} a${labelRadius} ${labelRadius} 0 1,1 -0.01 0`}
              />
            </def>
            { labels }
          </g>
          <g className="axis--radial" style={{ fontSize: small ? '6px !important' : '0.32em' }}>
            <g
              ref={(node) => {
                select(node).call(axis);
                selectAll('axis--radial .tick text').style('font-size', '8px').attr('x', '6');
              }}
            >
              { axisTicks }
            </g>
          </g>
          <g className="tick-circles">
            { tickCircles }
          </g>
          <g className="spokes">
            { spokes }
          </g>
        </g>
      </CenteredSvg>
      <Tooltip className="radial-tooltip" />
    </Fragment>
  );
};

export default ResponsiveWrapper(RadialBarChart);

RadialBarChart.propTypes = {
  data: PropTypes.array,
  type: PropTypes.oneOf([
    'absolute',
    'percentile'
  ]),
  parentWidth: PropTypes.number,
  small: PropTypes.bool,
  selfOnly: PropTypes.bool,
};
