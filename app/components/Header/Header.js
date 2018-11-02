import React from 'react';
import PropTypes from 'prop-types';
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
    <PngButton />
  </StyledHeader>
);

export default Header;

// Header.propTypes = {
//   svgId: PropTypes.string,
//   filename: PropTypes.string
// };
//
// PngButton.propTypes = {
//   svgId: PropTypes.string,
//   filename: PropTypes.string
// };
