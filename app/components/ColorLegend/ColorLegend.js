import React from 'react';
import StyledColorLegend from './styles';

const ColorLegend = () => (
  <StyledColorLegend>
    <div className="hard">
      <div className="legend-square hard"></div>
      <p>Hard Power</p>
    </div>
    <div className="soft">
      <div className="legend-square soft"></div>
      <p>Soft Power</p>
    </div>
    <div className="smart">
      <div className="legend-square smart"></div>
      <p>Smart Power</p>
    </div>
  </StyledColorLegend>
);

export default ColorLegend;
