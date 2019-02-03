import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.h4`
  text-transform: uppercase;
`;

const StyledP = styled.p`
  margin: 10px;
`;

const PDFIntroPage = () => (
  <div>
    <h3 className="is-size-3">
      You have taken the Leverage Inventory assessment, now what?
    </h3>
    <StyledP>
      The good news: this inventory explicitly assesses behavior, not fixed
      traits. Everything here is malleable.
    </StyledP>
    <StyledP>
      Those who currently appear influential must continue to cultivate these
      behaviors or risk their influence atrophying. Those who do not currently
      appear influential have considerable opportunity to change their behavior.
      This instrument is designed to show the areas with the greatest
      possibility for improvement, as well as those areas where the returns to
      improvement are likely to be greatest.
    </StyledP>
    <StyledP>
      Here are some tips for behavior change that can apply to any tactic you
      wish to develop:
    </StyledP>
    <StyledHeader className="capitalized is-size-4">reflect</StyledHeader>
    <div className="box has-background-light">
      <StyledP>
        <strong>Behavior = Personality + Environment</strong>
      </StyledP>
      <StyledP>
        <strong>Know yourself.</strong> What is your comfort zone? What falls
      outside of that and why?
      </StyledP>
      <StyledP>
        <strong>Know your context.</strong> The way you deploy the same influence
      tactic can vary across situations, people, and environments.
      </StyledP>
    </div>
    <StyledHeader className="capitalized is-size-4">research</StyledHeader>
    <div className="box has-background-light">
      <StyledP>
        <strong>What do the experts say?</strong> Chances are, someone has
        published their expertise on these topics.
      </StyledP>
      <StyledP>
        To get started, see our Additional Resources online at{' '}
        <a href="https://leverageinventory.com/resources/">
          https://leverageinventory.com/resources/
        </a>
      </StyledP>
    </div>
    <StyledHeader className="capitalized is-size-4">observe</StyledHeader>
    <div className="box has-background-light">
      <StyledP>
        <strong>Who does this well?</strong> Role models can range from personal
        acquaintances to public figures.
      </StyledP>
      <StyledP>
        <strong>Why do they succeed?</strong> Consider her/his internal
        (personality and counter-balancing strengths) and external (status,
        culture, situation) variables.
      </StyledP>
    </div>
    <StyledHeader className="capitalized is-size-4">exercise</StyledHeader>
    <div className="box has-background-light">
      <StyledP>
        <strong>Use your strengths.</strong> These influence tactics compliment
        each other, so pair a weakness with a strength for greater effectiveness.
      </StyledP>
      <StyledP>
        <strong>Establish the rules of engagement</strong> "When this happens,
        this is how we will communicate about it."
      </StyledP>
      <StyledP>
        <strong>Plan it.</strong> <em>Who</em> will you be with? <em>Where</em>
        will you be? <em>When</em> will it be? <em>What</em> will you say?
        <em>How</em> will you say it?
      </StyledP>
      <StyledP>
        <strong>Be accountable.</strong> Have a buddy to ask about your progress.
      </StyledP>
    </div>
    <StyledP>
      Visit{' '}
      <a href="https://leverageinventory.com">https://leverageinventory.com</a>
      {' '}to learn more specific tips about each tactic.{' '}
    </StyledP>
  </div>
);

export default PDFIntroPage;
