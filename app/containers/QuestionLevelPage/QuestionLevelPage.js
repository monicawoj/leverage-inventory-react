import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ColorLegend from 'components/ColorLegend';
import Footer from 'components/Footer';
import Header from 'components/Header';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import ItemLevelTable from 'components/ItemLevelTable';
import { factors } from 'utils/factorsList';
import { StyledDiv } from 'containers/UserResultsPage/styles';

const QuestionLevelPage = (props) => {
  const {
    user, loading, error, comparisonGroup
  } = props;

  const { hasEnough360Ratings } = user;
  // const hasEnough360Ratings = 1;

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  const data = user.survey.map((d) => ({
    ...d,
    factor: factors.find((item) => item.surveyName === d.factor).name
  }));

  const charts = (
    <section className="section">
      <div className="columns is-multiline">
        <div className="column">
          <ItemLevelTable user={user} data={data} hasEnough360Ratings={hasEnough360Ratings} />
        </div>
      </div>
    </section>
  );

  const content = (
    <Fragment>
      <Header hasPngExport={false} />
      <StyledDiv>
        <div />
        <ColorLegend />
      </StyledDiv>
      { charts }
    </Fragment>
  );

  return (
    <div>
      <p>See how you scored for each survey question and how that compares to your class.</p>
      { content }
      <Footer />
    </div>
  );
};

export default QuestionLevelPage;

QuestionLevelPage.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.any
};
