import React from 'react';
import PropTypes from 'prop-types';
import UserPageDescription from 'components/UserPageDescription';
import Header from 'components/Header';
import ViewToggle from 'components/ViewToggle';
import ColorLegend from 'components/ColorLegend';
import OpenEndedResponses from 'components/OpenEndedResponses';
import Footer from 'components/Footer';
import ChartHolder from 'components/ChartHolder';
import SelfOnly from 'components/SelfOnly';
import SelfAnd360 from 'components/SelfAnd360';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';
import { StyledDiv } from './styles';

const UserResultsPage = (props) => {
  const { absoluteView, user, loading, error } = props;
  const { hasEnough360Ratings } = user;

  const charts = hasEnough360Ratings ? <SelfAnd360 /> : <SelfOnly data={user} absoluteView={absoluteView} />;

  if (loading) {
    return <LoadingIndicator />
  }

  if (error) {
    return <ErrorIndicator />
  }

  return (
    <div>
      <Header />
      <UserPageDescription>
        <StyledDiv>
          <ViewToggle absoluteView={absoluteView} />
          <ColorLegend />
        </StyledDiv>
        <ChartHolder>
          { charts }
        </ChartHolder>
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
  )
};

export default UserResultsPage;

UserResultsPage.propTypes = {
  absoluteView: PropTypes.bool,
  user: PropTypes.object
};
