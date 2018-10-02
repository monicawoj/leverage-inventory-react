import React from 'react';
import PropTypes from 'prop-types';

const ErrorIndicator = ({message}) => (
  <div className="content">
    <p>{message}</p>
  </div>
);

ErrorIndicator.propTypes = {
  message: PropTypes.string
}

export default ErrorIndicator;
