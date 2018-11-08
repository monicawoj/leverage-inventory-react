import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  min-height: ${(props) => props.fullheight ? '95%' : '150px'} !important;
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
  }
];

const cards = sections.map((item) => (
  <div
    className="column is-6"
    key={item.title}
  >
    <StyledLink
      to={`/your-leverage-inventory/your-results/${item.path}`}
      className="button is-fullwidth"
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
      <p>The results are in! Check out the reports below to learn more about your current influence behavior.</p>
      <p>
        Then when you are ready, visit our <a href="http://leverageinventory.com/resources/">Resources</a> for coaching tips on the specific influence tactics you want to develop.
      </p>
      <p>
        <a href="http://leverageinventory.com/?page_id=42">Agency</a> | <a href="http://leverageinventory.com/?page_id=34">Allocentrism</a> | <a href="http://leverageinventory.com/?page_id=38">Coalitions</a> | <a href="http://leverageinventory.com/?page_id=31">Ethos</a> | <a href="http://leverageinventory.com/?page_id=35">Exchange</a> | <a href="http://leverageinventory.com/?page_id=40">Intentionality</a> | <a href="http://leverageinventory.com/?page_id=33">Logos</a> | <a href="http://leverageinventory.com/?page_id=36">Might</a> | <a href="http://leverageinventory.com/?page_id=37">Networks</a> | <a href="http://leverageinventory.com/?page_id=32">Pathos</a> | <a href="http://leverageinventory.com/?page_id=41">Situation Awareness</a> | <a href="http://leverageinventory.com/?page_id=39">Team-building</a>
      </p>
      <div className="section columns">
        <div className="column is-8 columns is-multiline is-centered">
          { hasEnough360Ratings ? cards : cards.slice(0, cards.length-1)}
        </div>
        <div className="column is-4">
          <StyledLink
            to="/your-leverage-inventory/your-results/print-report/"
            target="_blank"
            className="button is-fullwidth is-primary"
            fullheight="true"
          >
            <p className="title has-text-centered has-text-white">Full PDF Report</p>
            <p className="subtitle has-text-centered has-text-white">Printable PDF report of your results</p>
          </StyledLink>
        </div>
      </div>
    </Fragment>
  );
};

export default ResultsDashboard;

ResultsDashboard.propTypes = {
  user: PropTypes.object
};
