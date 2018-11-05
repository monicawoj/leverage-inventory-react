import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import HorizontalBarChart from 'components/HorizontalBarChart';
import Header from 'components/Header';
import ColorLegend from 'components/ColorLegend';
import OpenEndedResponses from 'components/OpenEndedResponses';
import Footer from 'components/Footer';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import { StyledDiv, StyledBox } from 'containers/UserResultsPage/styles';
import getData from 'utils/parseData';

const HorizontalBarChartsPage = (props) => {
  const {
    view, user, loading, error, comparisonGroup
  } = props;

  const {
    sortedSelfData,
    sortedThirdPartyData
  } = getData(user, view, comparisonGroup.name);

  const { hasEnough360Ratings } = user;
  // const hasEnough360Ratings = 1;

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  let charts;
  if (hasEnough360Ratings) {
    charts = (
      <section className="section">
        <div className="columns is-multiline">
          <StyledBox className="column is-half box">
            <h2 className="has-text-centered is-size-3">Self Assessment</h2>
            <HorizontalBarChart data={sortedSelfData} />
          </StyledBox>
          <StyledBox className="column is-half box">
            <h2 className="has-text-centered is-size-3">360 Assessment</h2>
            <HorizontalBarChart data={sortedThirdPartyData} />
          </StyledBox>
        </div>
      </section>
    );
  } else {
    charts = (
      <section className="section">
        <h2 className="has-text-centered is-size-3">Self Assessment</h2>
        <div className="columns is-multiline">
          <div className="column">
            <HorizontalBarChart data={sortedSelfData} />
          </div>
        </div>
      </section>
    );
  }

  const content = (
    <Fragment>
      <StyledDiv>
        <div />
        <ColorLegend />
      </StyledDiv>
      { charts }
    </Fragment>
  );

  return (
    <div>
      <p>The Leverage Inventory measures your influence behavior in terms of 12 unique influence tactics, shown below. Each influence tactic maps to a specific subset of questions from the survey, which are averaged to produce a score. The scores reflect frequency of behavior: 1 = Rarely or Never, 2 = Occasionally, 3 = Often, 4 = Almost Always.</p>
      <Header />
      { content }
      <OpenEndedResponses />
      <Footer />
    </div>
  );
};

export default HorizontalBarChartsPage;

HorizontalBarChartsPage.propTypes = {
  view: PropTypes.oneOf([
    'absolute',
    'percentile',
    'item-level'
  ]),
  user: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.any,
  comparisonGroup: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ])
};
