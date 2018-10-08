import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserResultsPage from 'containers/UserResultsPage/Loadable';
import PrintUserResultsPage from 'containers/PrintUserResultsPage/Loadable';
// import GroupResultsPage from 'containers/GroupResultsPage/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const Routes = (parentProps) => (
  <Switch>
    <Route exact path="/" render={(props) => <UserResultsPage location={props.location} {...parentProps} />} />
    <Route path="/print" render={(props) => <PrintUserResultsPage location={props.location} {...parentProps} />} />
    {/* <Route exact path="/group-results" component={GroupResultsPage} /> */}
    {/* add other routes here */}
    <Route path="" component={NotFoundPage} />
  </Switch>
);

export default Routes;
