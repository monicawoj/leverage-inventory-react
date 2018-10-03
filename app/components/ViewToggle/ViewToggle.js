import React from 'react';
import PropTypes from 'prop-types';
import GroupOptions from 'components/GroupOptions';
import StyledToggleHolder from './styles';

const ViewToggle = ({ absoluteView }) => {
  const groupOptions = (absoluteView) ? <GroupOptions /> : null;
  return (
    <form>
      <StyledToggleHolder>
        <button className="absolute">Absolute</button>
        <button className="percentile">Percentile</button>
      </StyledToggleHolder>
      { groupOptions }
    </form>
  );
};

export default ViewToggle;

ViewToggle.propTypes = {
  absoluteView: PropTypes.bool
};
