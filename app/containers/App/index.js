import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import {
  getUser,
  changeView,
  changeComparisonGroup
} from 'actions/index';
import App from './App';

const mapDispatchToProps = (dispatch) => ({
  getUser: (id) => {
    dispatch(getUser(id));
  },
  changeView: (view) => {
    dispatch(changeView(view));
  },
  changeComparisonGroup: (name, submissions) => {
    dispatch(changeComparisonGroup(name, submissions));
  }
});

const mapStateToProps = (state) => {
  const {
    data, view, loading, error, comparisonGroup
  } = state.user;
  return ({
    user: data,
    view,
    loading,
    error,
    comparisonGroup,
    location: state.routing
  });
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App))

export { mapDispatchToProps };
