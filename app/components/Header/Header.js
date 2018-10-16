import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './styles';

const Header = () => (
  <StyledHeader>
    <Link to="/print" target="_blank">Print Results</Link>
  </StyledHeader>
);

export default Header;
