import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import OpenEndedResponses from 'components/OpenEndedResponses';
import PrintPage from 'components/PrintPage';
import PrintHeader from 'components/PrintHeader';
import getData from 'utils/parseData';

class PrintSelfAnd360 extends React.Component {
  componentDidMount() {
    this.props.handleLoad();
  }

  render() {
    const { data } = this.props;
    const {
      selfData, sortedSelfData, thirdPartyData, sortedThirdPartyData
    } = getData(data, 'absolute');

    const percentilePages = data.groups.map((group) => {
      const selfChartData = getData(data, 'percentile', group).selfData;
      const thirdPartyChartData = getData(data, 'percentile', group).thirdPartyData;

      return (
        <PrintPage key={group}>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <div className="columns is-multiline">
            <h2 className="column is-12 has-text-centered is-size-4">Percentile Scores</h2>
            <h3 className="column is-12 has-text-centered is-size-5">vs. {group.toUpperCase()}</h3>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">Self Assessment</h2>
              <RadialBarChart data={selfChartData} type={'percentile'} print />
            </div>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">360 Assessment</h2>
              <RadialBarChart data={thirdPartyChartData} type={'percentile'} print />
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sed tempora ipsa ad, ut, praesentium excepturi a aut molestiae nostrum possimus facilis corporis eveniet dolores delectus quibusdam hic labore aspernatur.</p> */}
          </div>
        </PrintPage>
      );
    });

    return (
      <Fragment>
        <PrintPage>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <div className="columns is-multiline">
            <h2 className="column is-12 has-text-centered is-size-4">Absolute Scores</h2>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">Self Assessment</h2>
              <HorizontalBarChart data={sortedSelfData} />
            </div>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">360 Assessment</h2>
              <HorizontalBarChart data={sortedThirdPartyData} />
            </div>
          </div>
        </PrintPage>
        <PrintPage>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <div className="columns is-multiline">
            <h2 className="column is-12 has-text-centered is-size-4">Absolute Scores</h2>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">Self Assessment</h2>
              <RadialBarChart data={selfData} type={'absolute'} print />
            </div>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">360 Assessment</h2>
              <RadialBarChart data={thirdPartyData} type={'absolute'} print />
            </div>
          </div>
        </PrintPage>
        { percentilePages }
      </Fragment>
    );
  }
}

export default PrintSelfAnd360;

PrintSelfAnd360.propTypes = {
  data: PropTypes.object,
  handleLoad: PropTypes.func
};
