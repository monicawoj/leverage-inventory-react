import React from 'react';
import PropTypes from 'prop-types';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import Header from 'components/Header';
import BiasMeasurementScatterplot from 'components/BiasMeasurementScatterplot';

const BiasMeasurementPage = ({ user, error, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <p>Is your perception rooted in reality? The scatterplot below reflects how your influence behavior is gauged by yourself vs. others.</p>
      <Header />
      <BiasMeasurementScatterplot userData={user} />
    </div>

  );
};

export default BiasMeasurementPage;

BiasMeasurementPage.propTypes = {
  user: PropTypes.object,
  error: PropTypes.any,
  loading: PropTypes.bool
};
