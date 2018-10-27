import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import ItemLevelTable from 'components/ItemLevelTable';
import itemLevelData from 'data/itemLevelData';
import getData from 'utils/parseData';
import { StyledBox } from './styles';

const SelfAnd360 = ({ data, view, comparisonGroup }) => {
  const {
    selfData,
    sortedSelfData,
    thirdPartyData,
    sortedThirdPartyData
  } = getData(data, view, comparisonGroup.name);

  let charts;
  if (view === 'absolute') {
    charts = (
      <Fragment>
        <StyledBox className="column is-half box">
          <h2 className="has-text-centered is-size-3">Self Assessment</h2>
          <HorizontalBarChart data={sortedSelfData} />
          <RadialBarChart data={selfData} type={view} />
        </StyledBox>
        <StyledBox className="column is-half box">
          <h2 className="has-text-centered is-size-3">360 Assessment</h2>
          <HorizontalBarChart data={sortedThirdPartyData} />
          <RadialBarChart data={thirdPartyData} type={view} />
        </StyledBox>
      </Fragment>
    );
  } else if (view === 'percentile') {
    charts = (
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
  } else {
    charts = (
      <Fragment>
        <StyledBox className="column is-12 box">
          <h2 className="has-text-centered is-size-3">Item-Level Summary</h2>
          <ItemLevelTable data={itemLevelData} />
        </StyledBox>
      </Fragment>
    );
  }

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
