import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import RadialBarChart from 'components/RadialBarChart';
import HorizontalBarChart from 'components/HorizontalBarChart';
import PrintPage from 'components/PrintPage';
import PrintHeader from 'components/PrintHeader';
import ItemLevelTable from 'components/ItemLevelTable';
import BiasMeasurementScatterplot from 'components/BiasMeasurementScatterplot';
import getData from 'utils/parseData';
import OpenEndedResponses from 'components/OpenEndedResponses';
import PDFIntroPage from 'containers/PDFIntroPage/PDFIntroPage';
import PerformanceQuestionTable from 'components/PerformanceQuestionTable';
import { factors } from 'utils/factorsList';
import { StyledDivWithBorder } from './styles';

class PrintSelfAnd360 extends React.Component {
  componentDidMount() {
    this.props.handleLoad();
  }

  render() {
    const { user } = this.props;
    const { sortedSelfData, sortedThirdPartyData } = getData(user, 'absolute');

    const percentilePages = user.groups
      .filter((group) => group === 'classmates')
      .map((group) => {
        const selfChartData = getData(user, 'percentile', group).selfData;
        const thirdPartyChartData = getData(user, 'percentile', group)
          .thirdPartyData;

        return (
          <PrintPage key={group}>
            <PrintHeader
              name={`${user.first_name} ${user.last_name}`}
              raters={`${user.numOfRatersComplete}`}
            />
            <div className="columns is-multiline">
              <h2 className="column is-12 has-text-centered title">
                Percentile Scores
              </h2>
              <h3 className="column is-12 has-text-centered subtitle">
                vs. {group.toUpperCase()}
              </h3>
              <h3 className="column is-12 has-text-centered subtitle">
                Number of Submissions: {`${thirdPartyChartData[0].Submissions}`}
              </h3>
              <div className="column is-half">
                <h2 className="has-text-centered is-size-3">Self Assessment</h2>
                <RadialBarChart
                  data={selfChartData}
                  type={'percentile'}
                  small
                />
              </div>
              <div className="column is-half">
                <h2 className="has-text-centered is-size-3">360 Assessment</h2>
                <RadialBarChart
                  data={thirdPartyChartData}
                  type={'percentile'}
                  small
                />
              </div>
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
          <PrintHeader
            name={`${user.first_name} ${user.last_name}`}
            raters={`${user.numOfRatersComplete}`}
            noLegend
          />
          <PDFIntroPage />
        </PrintPage>
        <PrintPage>
          <PrintHeader
            name={`${user.first_name} ${user.last_name}`}
            raters={`${user.numOfRatersComplete}`}
          />
          <div className="columns is-multiline">
            <h2 className="column is-12 has-text-centered title">
              Absolute Scores
            </h2>
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
          <PrintHeader
            name={`${user.first_name} ${user.last_name}`}
            raters={`${user.numOfRatersComplete}`}
          />
          <div className="columns is-multiline">
            <div className="column is-12">
              <BiasMeasurementScatterplot userData={user} />
            </div>
          </div>
        </PrintPage>
        {percentilePages[0]}
        <PrintPage>
          <PrintHeader
            name={`${user.first_name} ${user.last_name}`}
            raters={`${user.numOfRatersComplete}`}
          />
          <ItemLevelTable
            user={user}
            data={data}
            hasEnough360Ratings={user.hasEnough360Ratings}
          />
        </PrintPage>
        <PrintPage>
          <PrintHeader
            name={`${user.first_name} ${user.last_name}`}
            raters={`${user.numOfRatersComplete}`}
            noLegend
          />
          <h1
            className="is-size-2"
            style={{ width: '100%', textAlign: 'center' }}
          >
            360 Feedback
          </h1>
          <PerformanceQuestionTable user={user} data={data} />
          <div>
            <h2 className="is-size-3">Free Response Questions</h2>
            <h3 className="is-size-4">
              Additional thoughts from your 360 raters.
            </h3>
            <OpenEndedResponses data={user.openEndedResponses} />
          </div>
        </PrintPage>
      </Fragment>
    );
  }
}

export default PrintSelfAnd360;

PrintSelfAnd360.propTypes = {
  user: PropTypes.object,
  handleLoad: PropTypes.func
};
