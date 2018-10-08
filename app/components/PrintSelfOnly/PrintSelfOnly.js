import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PrintPage from 'components/PrintPage';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import PrintHeader from 'components/PrintHeader';
import getData from 'utils/parseData';

class PrintSelfOnly extends React.Component {
  componentDidMount() {
    this.props.handleLoad();
  }

  render() {
    const { data } = this.props;
    const { selfData, sortedSelfData } = getData(data, 'absolute');

    const percentilePages = data.groups.map((group) => {
      const chartData = getData(data, 'percentile', group).selfData;

      return (
        <PrintPage key={group}>
          <PrintHeader name={`${data.first_name} ${data.last_name}`} />
          <div className="columns is-multiline">
            <h2 className="column is-12 has-text-centered is-size-4">Self Assessment: Percentile Scores</h2>
            <h3 className="column is-12 has-text-centered is-size-5">vs. {group.toUpperCase()}</h3>
            <div className="column is-12">
              <RadialBarChart data={chartData} type={'percentile'} print />
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
            <h2 className="column is-12 has-text-centered is-size-4">Self Assessment: Absolute Scores</h2>
            <div className="column is-half">
              <HorizontalBarChart data={sortedSelfData} />
            </div>
            <div className="column is-half">
              <RadialBarChart data={selfData} type={'absolute'} print />
            </div>
          </div>
        </PrintPage>
        { percentilePages }
      </Fragment>
    );
  }
}

export default PrintSelfOnly;

PrintSelfOnly.propTypes = {
  data: PropTypes.object,
  handleLoad: PropTypes.func
};
