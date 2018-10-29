import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserResultsPage from 'containers/UserResultsPage/Loadable';
import PrintUserResultsPage from 'containers/PrintUserResultsPage/Loadable';
import ProfessorReportsPage from 'containers/ProfessorReportsPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const Routes = (parentProps) => (
  <Switch>
    <Route exact path="/your-leverage-inventory/your-results/" render={(props) => <UserResultsPage location={props.location} {...parentProps} />} />
    <Route path="/your-leverage-inventory/your-results/print" render={(props) => <PrintUserResultsPage location={props.location} {...parentProps} />} />
    <Route exact path="/your-leverage-inventory/your-results/group-results" render={(props) => <ProfessorReportsPage location={props.location} {...parentProps} />} />
    {/* add other routes here */}
    <Route path="" component={NotFoundPage} />
  </Switch>
);

export default Routes;
