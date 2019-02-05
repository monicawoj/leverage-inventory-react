import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import Header from 'components/Header';
import OpenEndedResponses from 'components/OpenEndedResponses';
import PerformanceQuestionTable from 'components/PerformanceQuestionTable';

const FreeResponsePage = ({ user, error, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <h4 className="is-size-3">360 Feedback</h4>
      <p>Additional thoughts from your 360 raters</p>
      <Header hasPngExport={false} />
      <PerformanceQuestionTable user={user} data={user.survey} />
      <OpenEndedResponses data={user.openEndedResponses} />
    </div>
  );
};

export default FreeResponsePage;

FreeResponsePage.propTypes = {
  user: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.bool
};
