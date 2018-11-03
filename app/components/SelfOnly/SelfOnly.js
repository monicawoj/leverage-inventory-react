import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import ItemLevelTable from 'components/ItemLevelTable';
import itemLevelData from 'data/itemLevelData';
import getData from 'utils/parseData';

const SelfOnly = ({ data, view, comparisonGroup }) => {
  const { selfData, sortedSelfData } = getData(data, view, comparisonGroup.name);

  const charts = (
    <div className="column">
      <RadialBarChart data={selfData} type={view} />
    </div>
  );

  return (
    <section className="section">
      <h2 className="has-text-centered is-size-3">Self Assessment</h2>
      <div className="columns is-multiline">
        { charts }
      </div>
    </section>
  );
};

SelfOnly.propTypes = {
  data: PropTypes.object,
  view: PropTypes.oneOf([
    'absolute',
    'percentile',
    'item-level'
  ]),
  comparisonGroup: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ])
};

export default SelfOnly;
