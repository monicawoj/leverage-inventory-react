import React from 'react';
import PropTypes from 'prop-types';
import StyledDescriptionHolder from './styles';
import Links from 'components/Links';
import linkData from 'data/linkData';

const UserPageDescription = ({ children }) => (
  <StyledDescriptionHolder>
    <p>Your Leverage Inventory results are displayed in two views: <strong>Absolute</strong> and <strong>Percentile</strong>. Both views translate your influence activity into <a href="https://leverageinventory.com/about/influence-tactics/">12 influence tactics</a>:</p>

    <Links links={linkData} />

    <p>
      Each influence tactic maps to a unique subset of assessment questions, with individual scores that make up an average. The <strong>Absolute</strong> view reflects your average score for each influence tactic (1 = Rarely or Never, 2 = Occasionally, 3 = Often, 4 = Almost Always.) The <strong>Percentile</strong> view reflects how much you favor each tactic compared to other groups of people. The default comparison group for this view is your immediate class. For example, if you scored in the 80th percentile for a tactic, you use that tactic more than 80% of your classmates.
    </p>

    {children}

    <p>
      You may notice the tick marks on each axis are not spaced equally. This is intentional. If the tick marks were spaced equally on the axis, the corresponding area for each score would not be proportionate, and thus would create a skewed view. Instead, the tick marks are spaced on the axis so that the areas of different scores are directly proportionate.
    </p>
  </StyledDescriptionHolder>
);

UserPageDescription.propTypes = {
  children: PropTypes.any
};

export default UserPageDescription;
