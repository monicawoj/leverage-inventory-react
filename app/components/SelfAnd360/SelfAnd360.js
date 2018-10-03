import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';

const SelfAnd360 = (props) => {
  const { data, absoluteView } = props;
  return (
    // <Fragment>
    //   <div className="column">
    //     <HorizontalBarChart data={data} absoluteView={absoluteView} type={'self'} />
    //     <RadialBarChart data={data} absoluteView={absoluteView} type={'self'} />
    //   </div>
    //   <div className="column">
    //     <HorizontalBarChart data={data} absoluteView={absoluteView} type={'thirdParty'} />
    //     <RadialBarChart data={data} absoluteView={absoluteView} type={'thirdParty'} />
    //   </div>
    // </Fragment>
    <div>Test</div>
  );
};

SelfAnd360.propTypes = {
  data: PropTypes.object,
  absoluteView: PropTypes.bool
};

export default SelfAnd360;
