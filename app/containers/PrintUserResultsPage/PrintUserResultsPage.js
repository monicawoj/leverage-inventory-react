import React from 'react';
import PropTypes from 'prop-types';
import linkData from 'data/linkData';
import Links from 'components/Links';
import { Link } from 'react-router';

export default class UserResultsPage extends React.Component {

  render() {
    return ( <div>
      <div class="app-header">
      <h1></h1>
      <Link to='/print'></Link>
      {/* <!-- <a id='print-button' href="javascript: w=window.open('http://levinventory.staging.wpengine.com/wp-content/themes/make/leverage-inventory/print_results.html')">Print Results</a> --> */}
      <a id='print-button' href="javascript: w=window.open('./print_results.html')">Print Results</a>
    </div>

    <div class="description-holder">
      <p>Your Leverage Inventory results are displayed in two views: <strong>Absolute</strong> and <strong>Percentile</strong>. Both views translate your influence activity into <a href="https://leverageinventory.com/about/influence-tactics/">12 influence tactics</a>:</p>

        <Links links={linkData} />

      <p>
        Each influence tactic maps to a unique subset of assessment questions, with individual scores that make up an average. The <strong>Absolute</strong> view reflects your average score for each influence tactic (1 = Rarely or Never, 2 = Occasionally, 3 = Often, 4 = Almost Always.) The <strong>Percentile</strong> view reflects how much you favor each tactic compared to other groups of people. The default comparison group for this view is your immediate class. For example, if you scored in the 80th percentile for a tactic, you use that tactic more than 80% of your classmates.
      </p>
    </div>

    <div class='toggle-and-legend-holder'>
    <form class="selected-student">
      <div class="type-toggle">
        <button class="absolute">Absolute</button>
        <button class="percentile">Percentile</button>
      </div>
      <div class="percentile-options hidden">
        <fieldset>
          <legend>Select a comparison group</legend>
          <div class="options">
            <div>vs.</div>
          </div>
        </fieldset>
        <div class="submissions-holder">
          This group contains: <span></span> submissions.
        </div>
      </div>
    </form>
    <div class="color-legend">
      <div class="hard">
        <div class="legend-square hard"></div>
        <p>Hard Power</p>
      </div>
      <div class="soft">
        <div class="legend-square soft"></div>
        <p>Soft Power</p>
      </div>
      <div class="smart">
        <div class="legend-square smart"></div>
        <p>Smart Power</p>
      </div>
    </div>
    </div>

    <div class="chart-holder">
      <div class="self">
          <div class="chart-holder-self">
          </div>
          <div class="chart-holder-percentile">
          </div>

      </div>
      <div class="third">
        <div class="chart-holder">
          <div class="chart-holder-third">
          </div>
          <div class="chart-holder-percentile">
          </div>
        </div>
      </div>
    </div>

    <div class="description-holder">
      <p style={{fontSize: '14px'}}>You may notice the tick marks on each axis are not spaced equally. This is intentional. If the tick marks were spaced equally on the axis, the corresponding area for each score would not be proportionate, and thus would create a skewed view. Instead, the tick marks are spaced on the axis so that the areas of different scores are directly proportionate.</p>
    </div>

    <div class= "open-ended-response-container">
      <h3></h3>
      <div class="open-ended-responses"></div>
    </div>

    <footer>
      Created by <a href="http://monicawojciechowski.com">Monica Wojciechowski</a>, 2018.
    </footer>
    </div>
    );
  }
}

UserResultsPage.propTypes = {
  // add prop type checks
};
