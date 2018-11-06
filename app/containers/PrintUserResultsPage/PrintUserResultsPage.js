import React from 'react';
import PropTypes from 'prop-types';
import PrintSelfOnly from 'components/PrintSelfOnly';
import PrintSelfAnd360 from 'components/PrintSelfAnd360';
import LoadingIndicator from 'components/LoadingIndicator';
import ErrorIndicator from 'components/ErrorIndicator';

export default class PrintUserResultsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadComplete: false
    };
  }

  componentDidUpdate() {
    if (this.state.loadComplete) {
      window.print();
    }
  }

  changeLoadStatus = () => {
    this.setState({
      loadComplete: true
    });
  }

  render() {
    const {
      user, loading, error,
    } = this.props;

    const { hasEnough360Ratings } = user;
    // const hasEnough360Ratings = 1;

    let charts;
    if (hasEnough360Ratings) {
      charts = <PrintSelfAnd360 user={user} handleLoad={this.changeLoadStatus} />;
    } else {
      charts = <PrintSelfOnly user={user} handleLoad={this.changeLoadStatus} />;
    }

    if (loading) {
      return <LoadingIndicator />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return charts;
  }
}

PrintUserResultsPage.propTypes = {
  user: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.any
};
