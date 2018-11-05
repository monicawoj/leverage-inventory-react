import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ColorLegend from 'components/ColorLegend';
import Footer from 'components/Footer';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import ItemLevelTable from 'components/ItemLevelTable';
import { factors } from 'utils/factorsList';
import { StyledDiv } from 'containers/UserResultsPage/styles';

const QuestionLevelPage = (props) => {
  const {
    user, loading, error,
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
          <h2 className="has-text-centered is-size-3">Item-Level Summary</h2>
          <ItemLevelTable data={data} hasEnough360Ratings={hasEnough360Ratings} />
        </div>
      </div>
    </section>
  );

  const content = (
    <Fragment>
      <StyledDiv>
        <Link to="/your-leverage-inventory/your-results/">&larr; &nbsp; Back to Results Dashboard</Link>
        <ColorLegend />
      </StyledDiv>
      { charts }
    </Fragment>
  );

  return (
    <div>
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
