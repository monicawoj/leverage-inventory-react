import React from 'react';
import StyledDiv from './styles';

const GroupOptions = () => (
  <StyledDiv>
    <fieldset>
      <legend>Select a comparison group</legend>
      <div className="options">
        <div>vs.</div>
      </div>
    </fieldset>
    <div className="submissions-holder">
      This group contains: <span></span> submissions.
    </div>
  </StyledDiv>
);

export default GroupOptions;
