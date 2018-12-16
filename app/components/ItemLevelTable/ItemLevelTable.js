import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { format } from 'd3-format';
import { matchColor } from 'utils/chartHelperFunctions';
import { StyledTh, StyledTd } from './styles';

export default class ItemLevelTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data.sort((a, b) => {
        if (this.props.hasEnough360Ratings) {
          return b.avgRating - a.avgRating;
        }
        return b.selfRating - a.selfRating;
      })
    };
  }

  sortValues = (metric, compareFunction = true) => {
    if (compareFunction) {
      this.setState({
        data: this.state.data.sort((a, b) => b[metric] - a[metric])
      });
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => a[metric].localeCompare(b[metric]))
      });
    }
  }

  render() {
    const { data } = this.state;
    const { hasEnough360Ratings } = this.props;
    const round = format('.2f');
    const tableItems = data.map((d) => (
      <tr key={d.survey_item.i}>
        <StyledTd color={matchColor(d.factor)}>{d.factor}</StyledTd>
        <td>{round(d.selfRating)}</td>
        { hasEnough360Ratings ? <td>{round(d.avgRating)}</td> : null}
        { hasEnough360Ratings ? <td>{round(d.bias)}</td> : null}
        <td>{round(d.classMean)}</td>
        <td>{round(d.classStdev)}</td>
        <td>{round(d.zScore)}</td>
        <td>{d.survey_item.text}</td>
      </tr>
    ));

    let avgRatingHeader = null;
    let biasHeader = null;

    if (hasEnough360Ratings) {
      avgRatingHeader = (
        <StyledTh
          onClick={() => this.sortValues('avgRating')}
        >
          Avg 360 Rating
        </StyledTh>
      );
      biasHeader = (
        <StyledTh
          onClick={() => this.sortValues('bias')}
        >
          Bias (Self-360)
        </StyledTh>
      );
    }

    const classSubmissions = this.props.user.group_avgs.classmates.Submissions;

    return (
      <Fragment>
        <div className="section">
          <h2 className="has-text-centered is-size-3">Item-Level Summary</h2>
          <h3 className="has-text-centered is-size-5">Your class contains: {classSubmissions} {classSubmissions > 1 ? 'submissions' : 'submission'}</h3>
        </div>
        <table className="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <StyledTh
                onClick={() => this.sortValues('factor', false)}
              >
                Influence Factor
              </StyledTh>
              <StyledTh
                onClick={() => this.sortValues('selfRating')}
              >
                Self Rating
              </StyledTh>
              { avgRatingHeader }
              { biasHeader }
              <StyledTh
                onClick={() => this.sortValues('classMean')}
              >
                {`Class Mean ${hasEnough360Ratings ? ', 360' : ''}`}
              </StyledTh>
              <StyledTh
                onClick={() => this.sortValues('classStdev')}
              >
                {`Class StDev ${hasEnough360Ratings ? ', 360' : ''}`}
              </StyledTh>
              <StyledTh
                onClick={() => this.sortValues('zScore')}
              >
                {`Z-score ${hasEnough360Ratings ? ', 360' : ''}`}
              </StyledTh>
              <StyledTh
                onClick={() => this.sortValues('survey_item.i')}
              >
                Survey Item
              </StyledTh>
            </tr>
          </thead>
          <tbody>
            { tableItems }
          </tbody>
        </table>
      </Fragment>
    );
  }
}

ItemLevelTable.propTypes = {
  data: PropTypes.array,
  hasEnough360Ratings: PropTypes.any,
  user: PropTypes.any
};
