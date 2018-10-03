import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserResultsPage from 'containers/UserResultsPage/Loadable';
import PrintUserResultsPage from 'containers/PrintUserResultsPage/Loadable';
// import GroupResultsPage from 'containers/GroupResultsPage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const Routes = (props) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <UserResultsPage {...props} />} />
      <Route exact path="/print" component={PrintUserResultsPage} />
      {/* <Route exact path="/group-results" component={GroupResultsPage} /> */}
      {/* add other routes here */}
      <Route path="" component={NotFoundPage} />
    </Switch>
  )
};

export default Routes;
