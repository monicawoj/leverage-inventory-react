import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import { compose } from 'redux';

export default class HomePage extends React.Component {
  componentDidMount() {
    // get data
  }

  render() {
    return (
      <section className="container section">
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content=""
          />
        </Helmet>
      </section>
    );
  }
}

HomePage.propTypes = {
  // add prop type checks
};
