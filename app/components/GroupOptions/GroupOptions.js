import React from 'react';
import PropTypes from 'prop-types';
import StyledDiv from './styles';

const GroupOptions = ({ groups, selectedGroup, changeComparisonGroup }) => {
  console.log(selectedGroup);

  const options = groups.map((group) => {

    return (
      <label
        className="radio column"
        key={group.name}
      >
        <input
          type="radio"
          name={group.name}
          onChange={() => changeComparisonGroup(group.name, group.submissions)}
          checked={group.name === selectedGroup.name}
        />
        { group.name.toUpperCase() }
      </label>);
  });

  return (
    <StyledDiv>
      <fieldset>
        <legend>Select a comparison group</legend>
        <div className="options">
          <div>vs.</div>
          <div className="control columns">
            { options }
          </div>
        </div>
      </fieldset>
      <div className="submissions-holder">
        This group contains: <span>{selectedGroup.submissions}</span> submissions.
      </div>
    </StyledDiv>
  );
};

export default GroupOptions;

GroupOptions.propTypes = {
  groups: PropTypes.array,
  selectedGroup: PropTypes.object,
  changeComparisonGroup: PropTypes.func
};
