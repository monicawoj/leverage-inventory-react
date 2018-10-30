import React from 'react';
import { Link } from 'react-router-dom';
import StyledHeader from './styles';

// const redirectToPrintReport = () => {
//   window.open('/wp-content/themes/make/leverage-inventory/src/js/index.html/your-leverage-inventory/your-results/print');
//   // w.location = '/print';
// };

const Header = () => (
  <StyledHeader>
    {/* <button
      className="button"
      onClick={() => redirectToPrintReport()}
    >
      Print Results
    </button> */}
    <Link to="/print" target="_blank">Print Results</Link>
    <Link to="/your-leverage-inventory/your-results/your-leverage-inventory-your-results-print/" target="_blank">Print Results</Link>
  </StyledHeader>
);

export default Header;
