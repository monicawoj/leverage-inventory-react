import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
// import any other pages

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      {/* add other routes here */}
      <Route path="" component={NotFoundPage} />
    </Switch>
  )
};

export default Routes;
