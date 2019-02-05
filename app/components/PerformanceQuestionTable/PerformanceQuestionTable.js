import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { format } from 'd3-format';
import { StyledTh } from './styles';

export default class PerformanceQuestionTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
        .filter((d) => d.performance_item)
        .sort((a, b) => b.avgRating - a.avgRating)
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
  };

  render() {
    const { data } = this.state;
    const round = format('.2f');
    const tableItems = data.map((d, i) => (
      <tr key={d.performance_item.i}>
        <td>{`Question ${i + 1}`}</td>
        <td>{round(d.performance_item.avgRating || d.avgRating)}</td>
        <td>{round(d.performance_item.classMean || d.classMean)}</td>
        <td>{d.performance_item.text}</td>
      </tr>
    ));

    const classSubmissions = this.props.user.group_avgs.classmates.Submissions;

    if (data.length < 1) {
      return <div />;
    }

    return (
      <Fragment>
        <div className="section">
          <div style={{ marginBottom: '20px' }}>
            <h2 className="is-size-3">Impact Questions</h2>
            <h3 className="is-size-5">
              Your class contains: {classSubmissions}{' '}
              {classSubmissions > 1 ? 'submissions' : 'submission'}
            </h3>
            <p>
              The rater’s version of the assessment includes five additional
              questions designed to measure your perceived impact in an
              organization. Answers are captured using a 9-point scale, which
              ranges from “Much less than expected” (1) to “Much more than
              expected (9)“.
            </p>
          </div>
          <table
            style={{ marginBottom: '20px' }}
            className="table is-hoverable is-fullwidth"
          >
            <thead>
              <tr>
                <StyledTh />
                <StyledTh onClick={() => this.sortValues('avgRating')}>
                  Avg Rating
                </StyledTh>
                <StyledTh onClick={() => this.sortValues('classMean')}>
                  Class Mean
                </StyledTh>
                <StyledTh onClick={() => this.sortValues('performance_item.i')}>
                  Question Text
                </StyledTh>
              </tr>
            </thead>
            <tbody>{tableItems}</tbody>
          </table>
        </div>
      </Fragment>
    );
  }
}

PerformanceQuestionTable.propTypes = {
  data: PropTypes.array,
  user: PropTypes.any
};
