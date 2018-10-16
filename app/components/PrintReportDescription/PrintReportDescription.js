import React from 'react';
import StyledP from './styles';

const PrintReportDescription = () => (
  <div className="section">
    <h3 className="title">How to Interpret Scores</h3>

    <StyledP>
      Your Leverage Inventory results are displayed in two views: Absolute and Percentile. In both views, each of the 12 influence tactics has an equal slice of the circle.
    </StyledP>

    <StyledP>
      The <strong>Absolute</strong> view reflects your average score for each influence tactic. Each tactic maps to a subset of assessment questions, with individual scores that make up that average. Your Absolute scores are based on a 1-4 scale: 1 = Rarely or Never, 2 = Occasionally, 3 = Often, 4 = Almost Always.
    </StyledP>

    <StyledP>The <strong>Percentile</strong> view reflects your frequency-of-use relative to different comparison groups. The default comparison group for this view is your immediate class. Your percentile score <em>can</em> change as submissions are coming in, so wait to view this score until after the submission deadline. If you showing in the 80th percentile for a tactic, that means you use that tactic more than 80% of that comparison group.</StyledP>

    <StyledP>You may notice the <strong>tick marks</strong> on each axis are not spaced equally. This is intentional. If the tick marks were spaced equally on the axis, the corresponding area for each score would not be proportionate, and thus would create a skewed view. Instead, the tick marks are spaced on the axis so that the areas of different scores are directly proportionate.</StyledP>

  </div>
);

export default PrintReportDescription;
