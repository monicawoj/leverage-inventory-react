import React from 'react';
import PropTypes from 'prop-types';
import formattedDate from 'utils/formattedDate';
import ColorLegend from 'components/ColorLegend';

const PrintHeader = ({ name, noLegend }) => {
  const date = formattedDate();
  const legend = noLegend ? null : <ColorLegend />;

  return (
    <section className="section">
      <h1 className="has-text-left">My Leverage Inventory Results</h1>
      <div className="columns">
        <div className="column">
          <h2 className="has-text-left">Name: {name}</h2>
          <h2 className="has-text-left">Date: {date}</h2>
        </div>
        <div className="level-right">
          { legend }
        </div>
      </div>
    </section>
  );
};

export default PrintHeader;

PrintHeader.propTypes = {
  name: PropTypes.string,
  noLegend: PropTypes.bool
};
