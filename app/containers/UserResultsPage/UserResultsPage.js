import React from 'react';
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

  const viewToggleProps = {
    view,
    user,
    changeView,
    changeComparisonGroup
  };

  const charts = hasEnough360Ratings ? <SelfAnd360 /> : <SelfOnly data={user} view={view} comparisonGroup={comparisonGroup} />;

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <div>
      <Header />
      <UserPageDescription>
        <StyledDiv>
          <ViewToggle {...viewToggleProps} />
          <ColorLegend />
        </StyledDiv>
        { charts }
        {/* <ChartHolder>
          { charts }
        </ChartHolder> */}
        {/* <div class="chart-holder">
          <div class="self">
              <div class="chart-holder-self">
              </div>
              <div class="chart-holder-percentile">
              </div>
          </div>
          <div class="third">
            <div class="chart-holder">
              <div class="chart-holder-third">
              </div>
              <div class="chart-holder-percentile">
              </div>
            </div>
          </div>
        </div> */}
      </UserPageDescription>
      <OpenEndedResponses />
      <Footer />
    </div>
  );
};

export default UserResultsPage;

UserResultsPage.propTypes = {
  view: PropTypes.oneOf([
    'absolute',
    'percentile'
  ]),
  user: PropTypes.object,
  changeView: PropTypes.func,
  loading: PropTypes.bool,
  error: PropTypes.any,
  comparisonGroup: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  changeComparisonGroup: PropTypes.func
};
