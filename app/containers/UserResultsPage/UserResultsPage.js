import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import UserPageDescription from 'components/UserPageDescription';
import Header from 'components/Header';
import ViewToggle from 'components/ViewToggle';
import ColorLegend from 'components/ColorLegend';
import OpenEndedResponses from 'components/OpenEndedResponses';
import Footer from 'components/Footer';
import SelfOnly from 'components/SelfOnly';
import SelfAnd360 from 'components/SelfAnd360';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import { StyledDiv } from './styles';

const UserResultsPage = (props) => {
  const {
    view, user, loading, error, changeView, comparisonGroup, changeComparisonGroup
  } = props;

  const { hasEnough360Ratings } = user;
  // const hasEnough360Ratings = 1;

  const viewToggleProps = {
    view,
    user,
    changeView,
    changeComparisonGroup,
    comparisonGroup
  };

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  let charts;
  if (hasEnough360Ratings) {
    charts = <SelfAnd360 data={user} view={view} comparisonGroup={comparisonGroup} />;
  } else {
    charts = <SelfOnly data={user} view={view} comparisonGroup={comparisonGroup} />;
  }

  let content = (
    <UserPageDescription>
      <StyledDiv>
        <ViewToggle {...viewToggleProps} />
        <ColorLegend />
      </StyledDiv>
      { charts }
    </UserPageDescription>
  );
  if (view === 'item-level') {
    content = (
      <Fragment>
        <StyledDiv>
          <ViewToggle {...viewToggleProps} />
          <ColorLegend />
        </StyledDiv>
        { charts }
      </Fragment>
    );
  }

  return (
    <div>
      <Header />
      { content }
      <OpenEndedResponses />
      <Footer />
    </div>
  );
};

export default UserResultsPage;

UserResultsPage.propTypes = {
  view: PropTypes.oneOf([
    'absolute',
    'percentile',
    'item-level'
  ]),
  user: PropTypes.object,
  changeView: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.any,
  comparisonGroup: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool
  ]),
  changeComparisonGroup: PropTypes.func
};
