import React from 'react';
import { Link } from 'react-router-dom';
import { saveSvgAsPng } from 'save-svg-as-png';
import StyledHeader from './styles';

const saveAllPng = () => {
  const svgs = document.querySelectorAll('svg');
  svgs.forEach((item, i) =>
    saveSvgAsPng(item, `chart${i}.png`, { backgroundColor: 'white' })
  );
};

const PngButton = () => (
  <div className="column hasMinWidth">
    <button
      className="button is-info is-fullwidth"
      onClick={() => saveAllPng()}
    >
      Download charts (PNG)
    </button>
  </div>
);

const ResourcesButton = () => (
  <div className="column hasMinWidth">
    <a href={'https://leverageinventory.com/resources/'}>
      <button className="button is-info is-fullwidth">Resources</button>
    </a>
  </div>
);

const Header = ({ hasPngExport = true }) => (
  <StyledHeader>
    <Link to="/your-leverage-inventory/your-results/">
      &larr; &nbsp; Back to Results Dashboard
    </Link>
    <div className="columns is-centered">
      <ResourcesButton />
      {hasPngExport && <PngButton />}
    </div>
  </StyledHeader>
);

export default Header;
