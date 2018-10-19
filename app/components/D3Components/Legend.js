import React from 'react';
import PropTypes from 'prop-types';

export const Legend = ({ children, dimensions, margin }) => (
  <g
    className="legend-holder"
    transform={`translate(${dimensions.width - margin.right - margin.left},${30})`}
  >
    { children }
  </g>
);

Legend.propTypes = {
  children: PropTypes.any,
  dimensions: PropTypes.object,
  margin: PropTypes.object
};
