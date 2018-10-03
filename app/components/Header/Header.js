import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './styles';

const Header = () => (
  <StyledHeader>
    <Link to="/print">Print Results</Link>
  </StyledHeader>
);

export default Header;
