import React from 'react';
import PropTypes from 'prop-types';
import { StyledPrintPage } from './styles';

const PrintPage = ({ children }) => (
  <StyledPrintPage>
    {children}
  </StyledPrintPage>
);

export default PrintPage;

PrintPage.propTypes = {
  children: PropTypes.any
};
