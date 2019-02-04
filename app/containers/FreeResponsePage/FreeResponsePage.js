import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import Header from 'components/Header';
import OpenEndedResponses from 'components/OpenEndedResponses';

const FreeResponsePage = ({ user, error, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <p>Additional thoughts from your 360 raters</p>
      <Header hasPngExport={false} />
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
