import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PrintPage from 'components/PrintPage';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import PrintHeader from 'components/PrintHeader';
import ItemLevelTable from 'components/ItemLevelTable';
import { factors } from 'utils/factorsList';
import getData from 'utils/parseData';

class PrintSelfOnly extends React.Component {
  componentDidMount() {
    this.props.handleLoad();
  }

  render() {
    const { user } = this.props;
    const { selfData, sortedSelfData } = getData(user, 'absolute');

    const percentilePages = user.groups.filter((group) => group === 'classmates').map((group) => {
      const selfChartData = getData(user, 'percentile', group).selfData;

      return (
        <PrintPage key={group}>
          <PrintHeader name={`${user.first_name} ${user.last_name}`} />
          <div className="columns is-multiline">
            <p className="column is-12 has-text-centered title">Self Assessment: Percentile Scores</p>
            <p className="column is-12 has-text-centered subtitle">vs. {group.toUpperCase()}</p>
            <div className="column is-12">
              <RadialBarChart data={selfChartData} type={'percentile'} selfOnly small />
            </div>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit sed tempora ipsa ad, ut, praesentium excepturi a aut molestiae nostrum possimus facilis corporis eveniet dolores delectus quibusdam hic labore aspernatur.</p> */}
          </div>
        </PrintPage>
      );
    });

    const data = user.survey.map((d) => ({
      ...d,
      factor: factors.find((item) => item.surveyName === d.factor).name
    }));

    return (
      <Fragment>
        <PrintPage>
          <PrintHeader name={`${user.first_name} ${user.last_name}`} />
          <div className="columns is-multiline">
            <h2 className="column is-12 has-text-centered title">Self Assessment: Absolute Scores</h2>
            <div className="column is-5">
              <HorizontalBarChart data={sortedSelfData} />
            </div>
            <div className="column is-7">
              <RadialBarChart data={selfData} type={'absolute'} selfOnly small />
            </div>
          </div>
        </PrintPage>
        { percentilePages }
        <PrintPage>
          <PrintHeader name={`${user.first_name} ${user.last_name}`} />
          <ItemLevelTable user={user} data={data} hasEnough360Ratings={user.hasEnough360Ratings} />
        </PrintPage>
      </Fragment>
    );
  }
}

export default PrintSelfOnly;

PrintSelfOnly.propTypes = {
  user: PropTypes.object,
  handleLoad: PropTypes.func
};
