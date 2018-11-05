import React from 'react';
import PropTypes from 'prop-types';
import GroupOptions from 'components/GroupOptions';
import StyledToggleHolder from './styles';

const ViewToggle = ({
  view, changeView, user, comparisonGroup, changeComparisonGroup
}) => {
  const groupOptionsProps = {
    groups: user.groups.map((group) => ({
      name: group,
      submissions: user.group_avgs[group].Submissions
    })),
    selectedGroup: comparisonGroup,
    changeComparisonGroup,
  };

  const groupOptions = (view === 'percentile') ? <GroupOptions {...groupOptionsProps} /> : null;

  return (
    <form>
      <StyledToggleHolder>
        {/* <button
          className="absolute"
          onClick={(e) => {
            e.preventDefault();
            changeView('absolute');
          }}
        >
          Absolute
        </button>
        <button
          className="percentile"
          onClick={(e) => {
            e.preventDefault();
            changeView('percentile');
          }}
        >
          Percentile
        </button> */}
      </StyledToggleHolder>
      { groupOptions }
    </form>
  );
};

export default ViewToggle;

ViewToggle.propTypes = {
  view: PropTypes.string,
  changeView: PropTypes.func,
  user: PropTypes.object
};
