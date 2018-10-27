import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import OpenEndedResponses from 'components/OpenEndedResponses';
import PrintPage from 'components/PrintPage';
import PrintHeader from 'components/PrintHeader';
import PrintReportDescription from 'components/PrintReportDescription';
import ItemLevelTable from 'components/ItemLevelTable';
import itemLevelData from 'data/itemLevelData';
import getData from 'utils/parseData';
import { StyledDivWithBorder } from './styles';

class PrintSelfAnd360 extends React.Component {
  componentDidMount() {
    this.props.handleLoad();
  }

  render() {
    const { data } = this.props;
    const {
      selfData, sortedSelfData, thirdPartyData, sortedThirdPartyData
    } = getData(data, 'absolute');

    const coverPage = (
      <PrintPage>
        <PrintHeader name={`${data.first_name} ${data.last_name}`} noLegend />
        <PrintReportDescription />
      </PrintPage>
    );

    const percentilePages = data.groups.map((group) => {
      const selfChartData = getData(data, 'percentile', group).selfData;
      const thirdPartyChartData = getData(data, 'percentile', group).thirdPartyData;

      return (
        <PrintPage key={group}>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <div className="columns is-multiline">
            <h2 className="column is-12 has-text-centered title">Percentile Scores</h2>
            <h3 className="column is-12 has-text-centered subtitle">vs. {group.toUpperCase()}</h3>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">Self Assessment</h2>
              <RadialBarChart data={selfChartData} type={'percentile'} />
            </div>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">360 Assessment</h2>
              <RadialBarChart data={thirdPartyChartData} type={'percentile'} />
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sed tempora ipsa ad, ut, praesentium excepturi a aut molestiae nostrum possimus facilis corporis eveniet dolores delectus quibusdam hic labore aspernatur.</p> */}
          </div>
        </PrintPage>
      );
    });

    return (
      <Fragment>
        { coverPage }
        <PrintPage>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <div className="columns is-multiline">
            <h2 className="column is-12 has-text-centered title">Absolute Scores</h2>
            <StyledDivWithBorder className="column is-half">
              <h2 className="has-text-centered is-size-3">Self Assessment</h2>
              <HorizontalBarChart data={sortedSelfData} />
            </StyledDivWithBorder>

            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">360 Assessment</h2>
              <HorizontalBarChart data={sortedThirdPartyData} />
            </div>
          </div>
        </PrintPage>
        <PrintPage>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <div className="columns is-multiline">
            <h2 className="column is-12 has-text-centered title">Absolute Scores</h2>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">Self Assessment</h2>
              <RadialBarChart data={selfData} type={'absolute'} />
            </div>
            <div className="column is-half">
              <h2 className="has-text-centered is-size-3">360 Assessment</h2>
              <RadialBarChart data={thirdPartyData} type={'absolute'} />
            </div>
          </div>
        </PrintPage>
        { percentilePages }
        <PrintPage>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <ItemLevelTable data={itemLevelData} hasEnough360Ratings />
        </PrintPage>
      </Fragment>
    );
  }
}

export default PrintSelfAnd360;

PrintSelfAnd360.propTypes = {
  data: PropTypes.object,
  handleLoad: PropTypes.func
};
