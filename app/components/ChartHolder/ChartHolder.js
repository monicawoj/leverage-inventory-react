import React from 'react';
import PropTypes from 'prop-types';

const ChartHolder = ({ children }) => (
  <div className="columns">
    { children }
  </div>
);

ChartHolder.propTypes = {
  children: PropTypes.any
};

export default ChartHolder;
