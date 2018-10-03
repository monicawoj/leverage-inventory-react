import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserResultsPage from 'containers/UserResultsPage/Loadable';
import GroupResultsPage from 'containers/GroupResultsPage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={UserResultsPage} />
      <Route exact path="/group-results" component={GroupResultsPage} />
      {/* add other routes here */}
      <Route path="" component={NotFoundPage} />
    </Switch>
  )
};

export default Routes;
