import React from 'react';
import { string, arrayOf } from 'prop-types';
import StyledDiv from './styles';

const OpenEndedResponses = ({ data = [] }) => {
  if (data.length < 1) {
    return (
      <StyledDiv>
        <h2 className="is-size-3">
          No open ended responses from your 360 raters
        </h2>
      </StyledDiv>
    );
  }

  const responses = data.map((response, i) => <li key={i}>{response}</li>);
  return (
    <StyledDiv>
      <h2 className="is-size-3">
        What additional information would you like to share about this
        individual?
      </h2>
      <div className="open-ended-responses">
        <ul>{responses}</ul>
      </div>
    </StyledDiv>
  );
};

OpenEndedResponses.propTypes = {
  data: arrayOf(string)
};

export default OpenEndedResponses;
