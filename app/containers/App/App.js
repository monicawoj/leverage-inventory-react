import React from 'react';
import { Helmet } from 'react-helmet';
// import Header from 'components/Header';
// import Footer from 'components/Footer';
// import Routes from 'containers/Routes';

export default class App extends React.Component {
  render() {
    return <div>
      <Helmet titleTemplate="" defaultTitle="">
        <meta name="description" content="" />
      </Helmet>
      {/* <Header />
      <Routes />
      <Footer /> */}
    </div>
  }
};
