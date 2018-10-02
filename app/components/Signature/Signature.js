import React from 'react';
import PropTypes from 'prop-types';

const Signature = ({name}) => {
  const dt = new Date();
  const currentYear = dt.getFullYear();
  return <span>
    <a href="https://monicawojciechowski.com">{name} </a>
     &copy; {currentYear.toString()}
  </span>
};

Signature.propTypes = {
  name: PropTypes.string
};

export default Signature;
