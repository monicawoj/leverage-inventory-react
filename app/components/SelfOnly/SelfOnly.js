import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
// import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import getData from 'utils/parseData';

const SelfOnly = ({ data, absoluteView }) => {

  const { selfData, sortedSelfData } = getData(data, absoluteView) //also needs comparisonGroup
  console.log(sortedSelfData);

  if (absoluteView) {
    return (
      <Fragment>
        <div className="column is-half">
          <HorizontalBarChart data={sortedSelfData} />
        </div>
        {/* <div className="column is-half">
          <RadialBarChart data={selfData} type={'self'} />
        </div> */}
      </Fragment>
    );
  }
  return (
    <div className="column">
      {/* <RadialBarChart data={selfData} type={'self'} /> */}
    </div>
  );
};

SelfOnly.propTypes = {
  data: PropTypes.object,
  absoluteView: PropTypes.bool
};

export default SelfOnly;
