import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  min-height: ${(props) => (props.fullheight ? '100px' : '150px')} !important;
  height: ${(props) => (props.fullheight ? '95%' : '150px')} !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
`;

const StyledAnchor = styled.a`
  min-height: ${(props) => (props.fullheight ? '100px' : '150px')} !important;
  height: ${(props) => (props.fullheight ? '95%' : '150px')} !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
`;

const sections = [
  {
    title: 'Your Influence Behavior',
    subtitle: 'How you influence others',
    path: 'your-influence-behavior/'
  },
  {
    title: 'Comparison Groups',
    subtitle: 'Your influence behavior compared to others',
    path: 'comparison-groups/'
  },
  {
    title: 'Question-Level Detail',
    subtitle: 'How you scored for each question',
    path: 'question-level-detail/'
  },
  {
    title: 'Bias Measurement',
    subtitle: 'Do others see you as you see yourself?',
    path: 'bias-measurement/'
  },
  {
    title: '360 Feedback',
    subtitle: 'Additional thoughts from your 360 raters',
    path: 'free-response/'
  }
];

const cards = sections.map((item) => (
  <div className="column is-6" key={item.title}>
    <StyledLink
      to={`/your-leverage-inventory/your-results/${item.path}`}
      className="button is-fullwidth "
    >
      <p className="title has-text-centered">{item.title}</p>
      <p className="subtitle has-text-centered">{item.subtitle}</p>
    </StyledLink>
  </div>
));

const ResultsDashboard = ({ user }) => {
  const { hasEnough360Ratings } = user;
  return (
    <Fragment>
      <p>
        The results are in! Check out the reports below to learn more about your
        current influence behavior.
      </p>
      <div className="section columns is-multiline">
        <div className="column is-8 columns is-multiline is-centered">
          {hasEnough360Ratings ? cards : cards.slice(0, cards.length - 2)}
        </div>
        <div className="column is-4">
          <StyledLink
            to="/your-leverage-inventory/your-results/print-report/"
            target="_blank"
            className="button is-fullwidth is-light"
            fullheight
          >
            <p className="title has-text-centered">Full PDF Report</p>
            <p className="subtitle has-text-centered">
              Printable PDF report of your results
            </p>
          </StyledLink>
        </div>
        <div className="column is-12">
          <StyledAnchor
            href="https://leverageinventory.com/resources/"
            className="button is-fullwidth is-info"
            fullheight
          >
            <p className="title has-text-centered has-text-white">Resources</p>
            <p className="subtitle has-text-centered has-text-white">
              Coaching tips for the specific influence tactics you want to
              develop
            </p>
          </StyledAnchor>
        </div>
      </div>
    </Fragment>
  );
};

export default ResultsDashboard;

ResultsDashboard.propTypes = {
  user: PropTypes.object
};
