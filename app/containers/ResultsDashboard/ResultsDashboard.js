import React, { Fragment } from 'react';
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
    subtitle: 'your raw influence behavior',
    path: 'your-influence-behavior/'
  },
  {
    title: 'Comparison Groups',
    subtitle: 'your influence behavior compared to others',
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

const ResultsDashboard = () => (
  <Fragment>
    <div className="section columns">
      <div className="column is-8 columns is-multiline is-centered">
        { cards }
      </div>
      <div className="column is-4">
        <StyledLink
          to="/your-leverage-inventory/your-results/print-report/"
          className="button is-fullwidth is-primary"
          fullheight
        >
          <p className="title has-text-centered has-text-white">Full PDF Report</p>
          <p className="subtitle has-text-centered has-text-white">Printable PDF report of your results</p>
        </StyledLink>
      </div>
    </div>
  </Fragment>

);

export default ResultsDashboard;
