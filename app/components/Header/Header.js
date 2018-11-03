import React from 'react';
import { Link } from 'react-router-dom';
import { saveSvgAsPng } from 'save-svg-as-png';
import StyledHeader from './styles';

const saveAllPng = () => {
  const svgs = document.querySelectorAll('svg');
  svgs.forEach((item, i) => saveSvgAsPng(item, `chart${i}.png`, { backgroundColor: 'white' }))
};

const PngButton = () => (
  <div className="columns is-centered">
    <div className="column is-12">
      <button
        className="button is-info is-fullwidth"
        // onClick={() => saveSvgAsPng(document.querySelector(`#${svgId}`), `${filename}.png`, { backgroundColor: 'white' })}
        onClick={() => saveAllPng()}
      >
        Download charts (PNG)
      </button>
    </div>
  </div>
);

const Header = () => (
  <StyledHeader>
    <Link to="/your-leverage-inventory/your-results/">&larr; &nbsp; Back to Results Dashboard</Link>
    <PngButton />
  </StyledHeader>
);

export default Header;
