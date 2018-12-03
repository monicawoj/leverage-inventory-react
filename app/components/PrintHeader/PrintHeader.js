import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ColorLegend from 'components/ColorLegend';

const PrintHeader = ({ name, raters, noLegend }) => {
  const date = moment().format('MMMM Do YYYY, h:mm:ss a');
  const legend = noLegend ? null : <ColorLegend />;

  return (
    <section className="section">
      <h1 className="has-text-left">My Leverage Inventory Results</h1>
      <div className="columns">
        <div className="column">
          <h2 className="has-text-left">{name}</h2>
          <h2 className="has-text-left">{date}</h2>
          <h2 className="has-text-left">Total 360 Raters: {raters}</h2>
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
  raters: PropTypes.number,
  noLegend: PropTypes.bool
};
