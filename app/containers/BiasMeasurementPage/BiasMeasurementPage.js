import React from 'react';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import BiasMeasurementScatterplot from 'components/BiasMeasurementScatterplot';

const BiasMeasurementPage = ({ user, error, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <BiasMeasurementScatterplot userData={user} />
  );
};

export default BiasMeasurementPage;
