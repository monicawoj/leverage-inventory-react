import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserResultsPage from 'containers/UserResultsPage/Loadable';
import PrintUserResultsPage from 'containers/PrintUserResultsPage/Loadable';
import ProfessorReportsPage from 'containers/ProfessorReportsPage';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import ResultsDashboard from 'containers/ResultsDashboard';
import BiasMeasurementPage from 'containers/BiasMeasurementPage';
import QuestionLevelPage from 'containers/QuestionLevelPage';
import HorizontalBarChartsPage from 'containers/HorizontalBarChartsPage';

const Routes = (parentProps) => (
  <Switch>
    <Route exact path="/your-leverage-inventory/your-results/" render={(props) => <ResultsDashboard location={props.location} {...parentProps} />} />
    <Route exact path="/your-leverage-inventory/your-results/print-report/" render={(props) => <PrintUserResultsPage location={props.location} {...parentProps} />} />
    <Route exact path="/your-leverage-inventory/your-results/group-results/" render={(props) => <ProfessorReportsPage location={props.location} {...parentProps} />} />
    <Route exact path="/your-leverage-inventory/your-results/comparison-groups/" render={(props) => <UserResultsPage location={props.location} {...parentProps} />} />
    <Route exact path="/your-leverage-inventory/your-results/bias-measurement/" render={(props) => <BiasMeasurementPage location={props.location} {...parentProps} />} />
    <Route exact path="/your-leverage-inventory/your-results/question-level-detail/" render={(props) => <QuestionLevelPage location={props.location} {...parentProps} />} />
    <Route exact path="/your-leverage-inventory/your-results/your-influence-behavior/" render={(props) => <HorizontalBarChartsPage location={props.location} {...parentProps} />} />
    {/* add other routes here */}
    <Route path="" component={NotFoundPage} />
  </Switch>
);

export default Routes;
