import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RadialBarChart from 'components/RadialBarChart';
import getData from 'utils/parseData';
import { StyledBox } from 'containers/UserResultsPage/styles';

const SelfAnd360 = ({ data, view, comparisonGroup }) => {
  // console.log(data);
  // console.log(comparisonGroup);

  const {
    selfData,
    thirdPartyData,
  } = getData(data, view, comparisonGroup.name);

  const charts = (
    <Fragment>
      <StyledBox className="column is-half box">
        <h2 className="has-text-centered is-size-3">Self Assessment</h2>
        <RadialBarChart data={selfData} type={view} />
      </StyledBox>
      <StyledBox className="column is-half box">
        <h2 className="has-text-centered is-size-3">360 Assessment</h2>
        <RadialBarChart data={thirdPartyData} type={view} />
      </StyledBox>
    </Fragment>
  );

  return (
    <section className="section">
      <div className="columns is-multiline">
        { charts }
      </div>
    </section>
  );
};

SelfAnd360.propTypes = {
  data: PropTypes.object,
  view: PropTypes.oneOf([
    'absolute',
    'percentile'
  ]),
  comparisonGroup: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ])
};

export default SelfAnd360;
