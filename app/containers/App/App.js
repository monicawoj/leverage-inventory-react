import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Routes from 'containers/Routes';
import { getCookie } from 'utils/cookie';

export default class App extends React.Component {
  componentDidMount() {
    // get data - if production, get the cookie; if development use static id
    let id = getCookie('resultsid');
    const env = process.env.NODE_ENV;
    if (env === 'development') {
      id = '4260ccb2-60fe-46ba-8122-7ccd233cbf2d';
    }

    this.props.getUser(id);
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>My Results</title>
          <meta
            name="description"
            content="Leverage Inventory Results"
          />
        </Helmet>
        <Routes {...this.props} />
      </div>
    );
  }
}

App.propTypes = {
  getUser: PropTypes.func,
  user: PropTypes.object
};
