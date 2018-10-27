import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PrintPage from 'components/PrintPage';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import PrintHeader from 'components/PrintHeader';
import PrintReportDescription from 'components/PrintReportDescription';
import ItemLevelTable from 'components/ItemLevelTable';
import itemLevelData from 'data/itemLevelData';
import getData from 'utils/parseData';

class PrintSelfOnly extends React.Component {
  componentDidMount() {
    this.props.handleLoad();
  }

  render() {
    const { data } = this.props;
    const { selfData, sortedSelfData } = getData(data, 'absolute');

    const coverPage = (
      <PrintPage>
        <PrintHeader name={`${data.first_name} ${data.last_name}`} noLegend />
        <PrintReportDescription />
      </PrintPage>
    );

    const percentilePages = data.groups.map((group) => {
      const chartData = getData(data, 'percentile', group).selfData;

      return (
        <PrintPage key={group}>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <div className="columns is-multiline">
            <p className="column is-12 has-text-centered title">Self Assessment: Percentile Scores</p>
            <p className="column is-12 has-text-centered subtitle">vs. {group.toUpperCase()}</p>
            <div className="column is-12">
              <RadialBarChart data={chartData} type={'percentile'} small />
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
            <h2 className="column is-12 has-text-centered title">Self Assessment: Absolute Scores</h2>
            <div className="column is-5">
              <HorizontalBarChart data={sortedSelfData} />
            </div>
            <div className="column is-7">
              <RadialBarChart data={selfData} type={'absolute'} print />
            </div>
          </div>
        </PrintPage>
        { percentilePages }
        <PrintPage>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <ItemLevelTable data={itemLevelData} />
        </PrintPage>
      </Fragment>
    );
  }
}

export default PrintSelfOnly;

PrintSelfOnly.propTypes = {
  data: PropTypes.object,
  handleLoad: PropTypes.func
};
