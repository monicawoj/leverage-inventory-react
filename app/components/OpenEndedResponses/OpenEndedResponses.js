import React from 'react';
import { string, arrayOf } from 'prop-types';
import StyledDiv from './styles';

const OpenEndedResponses = ({
  data = [
    'default response 1',
    'default response 2',
    'another answer',
    'and one more which is a little longer'
  ]
}) => {
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
